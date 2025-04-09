def call(self, inputs):
        # print("decoding started")
        encoder_kwargs = {}
        attention_mask = self.prepare_attention_mask_for_generation_onnx(inputs, pad_token_id=1)

        encoder_kwargs["attention_mask"] = attention_mask
        encoder_kwargs["input_values"] = inputs
        
        encoder_outputs = self.encoder_ort_session.run(None, encoder_kwargs)
        encoder_hidden_states = encoder_outputs[0]           

        #some constant
        decoder_start_token_id = 2
        pad_token_id = 1
        num_beams = 4
        batch_size = 1
        max_length = 1024
        length_penalty = 1.0
        num_beam_hyps_to_keep = 1
        #decoder inputs

        decoder_input_ids = np.full((num_beams, 1), decoder_start_token_id, dtype=np.int64)
        attention_mask_decoder = np.repeat(attention_mask, num_beams, axis=0)
        cache_position = np.cumsum(np.ones_like(decoder_input_ids[0, :], dtype=np.int64)) - 1
        
        #beam search related variables
        eos_token_id = np.array([2])
        beam_scores = np.zeros((batch_size, num_beams))
        beam_scores[:, 1:] = -1e9
        beam_scores = beam_scores.flatten()
        beam_hyps = [
            {
                "beams": [],  # List of (score, sequence, beam_indices)
                "worst_score": 1e9,  # Track the worst score in the beam
            }
            for _ in range(batch_size)
        ]
        done = [False] * (batch_size)
        
        decoder_kwargs = {}
        decoder_kwargs["encoder_attention_mask"] = attention_mask_decoder
        decoder_kwargs["input_ids"] = decoder_input_ids
        decoder_kwargs["encoder_hidden_states"] = np.repeat(encoder_hidden_states, num_beams, axis=0)

        is_past_key_values_available =  False

        for iteration in range(max_length):
            if not is_past_key_values_available:
                outputs = self.decoder_ort_session.run(None, decoder_kwargs)

            else:
                outputs = self.decoder_ort_with_past_session.run(None, decoder_kwargs)
                
            past_key_values = outputs[1:]
            cache_position = cache_position[-1:] + 1
            
            #beam search
            # 1. Apply log_softmax
            next_token_logits = outputs[0][:, -1, :].copy()
            max_vals = np.max(next_token_logits, axis=-1, keepdims=True)
            exp_vals = np.exp(next_token_logits - max_vals)
            log_softmax = np.log(exp_vals / np.sum(exp_vals, axis=-1, keepdims=True))

            #2. [:, None] adds an extra dimension to make it a column vector (i.e., it reshapes (N,) to (N, 1)).
            next_token_scores = log_softmax + np.expand_dims(beam_scores, axis=1) #add previous beam scores
            
            #3. reshape for beam search
            vocab_size = next_token_scores.shape[-1]
            next_token_scores = next_token_scores.reshape(batch_size, num_beams * vocab_size)

            # 4. Beam token selection: pick 1 + eos_token_id.shape[0] next tokens for each beam so we have at least 1
            # non eos token per beam.
            eos_token_id = np.array([2])  # Example EOS token
            n_eos_tokens = eos_token_id.shape[0] if eos_token_id is not None else 0
            n_tokens_to_keep = max(2, 1 + n_eos_tokens) * num_beams
            
            #here topk_scores represents the top probability score from all 4 beams sorted in descending order
            # topk_indices represents the index of those scores  
            topk_indices = np.argpartition(-next_token_scores, n_tokens_to_keep, axis=1)[:, :n_tokens_to_keep]
            topk_scores = np.take_along_axis(next_token_scores, topk_indices, axis=1)
            
            #beam indices will tell from which beam, top scores tokens have been selected it is equivalent to beam index.
            #beam indices is guaranteed to lie b/w [0, 3] as we are dividing the index by vocab size and index <= (vocab_size -1)
            #token indices is the actual index of the token from the beam it will lie b/w [0, vocab size]
            beam_indices = topk_indices // vocab_size
            token_indices = topk_indices % vocab_size

            # Initialize next beam state
            next_beam_scores = np.zeros((batch_size, num_beams), dtype=np.float32)
            next_beam_tokens = np.zeros((batch_size, num_beams), dtype=np.int64)
            next_beam_indices = np.zeros((batch_size, num_beams), dtype=np.int64)
            

            for batch_idx in range(batch_size):
                if done[batch_idx]:
                    # If the batch is done, pad the output
                    next_beam_scores[batch_idx, :] = 0
                    next_beam_tokens[batch_idx, :] = pad_token_id
                    next_beam_indices[batch_idx, :] = 0
                    continue

                # Process top 2 * num_beams candidates
                beam_idx = 0
                for token_rank, (next_token, next_score, next_index) in enumerate(
                    zip(token_indices[batch_idx], topk_scores[batch_idx], beam_indices[batch_idx])
                ):
                    batch_beam_idx = batch_idx * num_beams + next_index

                    # If the token is EOS, add it to the beam hypotheses
                    if next_token in eos_token_id:        
                        if token_rank >= num_beams:
                            continue  # Skip if not in the top num_beams
                        
                        generated_len = decoder_input_ids.shape[-1]
                        score = next_score / (generated_len**length_penalty)
                        if len(beam_hyps[batch_idx]["beams"]) < num_beams or score > beam_hyps[batch_idx]["worst_score"]:
                            beam_hyps[batch_idx]["beams"].append((score, np.copy(decoder_input_ids[batch_beam_idx])))
                            if len(beam_hyps[batch_idx]["beams"]) > num_beams:
                                sorted_next_scores = sorted([(s, idx) for idx, (s, _) in enumerate(beam_hyps[batch_idx]["beams"])])
                                del beam_hyps[batch_idx]["beams"][sorted_next_scores[0][1]]
                                beam_hyps[batch_idx]["worst_score"] = sorted_next_scores[1][0]
                            else:
                                beam_hyps[batch_idx]["worst_score"] = min(score, beam_hyps[batch_idx]["worst_score"])

                    else:
                        # Add the token to the next beam state
                        next_beam_scores[batch_idx, beam_idx] = next_score
                        next_beam_tokens[batch_idx, beam_idx] = next_token
                        next_beam_indices[batch_idx, beam_idx] = batch_beam_idx
                        beam_idx += 1

                    # Stop if the beam is full
                    if beam_idx == num_beams:
                        break

                # Check if the batch is done
                done[batch_idx] = done[batch_idx] or (len(beam_hyps[batch_idx]["beams"]) >= num_beams)

            flat_beam_indices = next_beam_indices.reshape(-1)
            selected_decoder_inputs = decoder_input_ids[flat_beam_indices]

            # Reshape next_beam_tokens to a column vector and concatenate
            new_decoder_tokens = next_beam_tokens.reshape(-1, 1)
            decoder_input_ids = np.concatenate([selected_decoder_inputs, new_decoder_tokens], axis=1)
            
            beam_scores = next_beam_scores.flatten()

            if all(done):
                break

            past_key_values = self._temporary_reorder_cache_onnx(past_key_values, next_beam_indices.flatten())
            decoder_kwargs["input_ids"] = decoder_input_ids[:, cache_position].copy()
            decoder_kwargs = self.add_past_key_values_for_generation(past_key_values, decoder_kwargs, is_past_key_values_available)
            is_past_key_values_available = True
            del outputs

        for batch_idx, beam_hyp in enumerate(beam_hyps):
            if done[batch_idx]:
                continue

            # all open beam hypotheses are added to the beam hypothesis
            # beam hypothesis class automatically keeps the best beams
            for beam_idx in range(num_beams):
                batch_beam_idx = batch_idx * num_beams + beam_idx
                final_score = beam_scores[batch_beam_idx].item()
                final_tokens = decoder_input_ids[batch_beam_idx]
                generated_len = final_tokens.shape[-1]
                score = final_score / (generated_len**length_penalty)
                if len(beam_hyp["beams"]) < num_beams or score > beam_hyp["worst_score"]:
                    beam_hyp["beams"].append((score, np.copy(final_tokens)))
                    if len(beam_hyp["beams"]) > num_beams:
                        sorted_next_scores = sorted([(s, idx) for idx, (s, _) in enumerate(beam_hyp["beams"])])
                        del beam_hyp["beams"][sorted_next_scores[0][1]]
                        beam_hyp["worst_score"] = sorted_next_scores[1][0]
                    else:
                        beam_hyp["worst_score"] = min(score, beam_hyp["worst_score"])

        # select the best hypotheses
        sent_lengths = np.zeros(batch_size * num_beam_hyps_to_keep, dtype=np.int32)
        best = []
        best_scores = np.zeros(batch_size * num_beam_hyps_to_keep, dtype=np.float32)
        
        # retrieve best hypotheses
        for i in range(batch_size):
            beam_hyps_in_batch = beam_hyps[i]
            candidate_beams = [beam for beam in beam_hyps_in_batch["beams"]]
            sorted_hyps = sorted(candidate_beams, key=lambda x: x[0])
            for j in range(num_beam_hyps_to_keep):
                best_hyp_tuple = sorted_hyps.pop()
                best_score = best_hyp_tuple[0]
                best_hyp = best_hyp_tuple[1]
                sent_lengths[num_beam_hyps_to_keep * i + j] = len(best_hyp)

                # append hyp to lists
                best.append(best_hyp)
                best_scores[i * num_beam_hyps_to_keep + j] = best_score

        # prepare for adding eos
        sent_lengths_max = sent_lengths.max() + 1
        sent_max_len = min(sent_lengths_max, max_length) if max_length is not None else sent_lengths_max
        decoded = np.full((batch_size * num_beam_hyps_to_keep, sent_max_len), pad_token_id, dtype=np.int32)

        # shorter batches are padded if needed
        if sent_lengths.min() != sent_lengths.max():
            if pad_token_id is None:
                raise ValueError("pad_token_id has to be defined")
            decoded.fill_(pad_token_id)

    
        # fill with hypotheses and eos_token_id if the latter fits in
        for i, hypo in enumerate(best):
            decoded[i, : sent_lengths[i]] = hypo

            if sent_lengths[i] < sent_max_len:
                # inserting only the first eos_token_id
                decoded[i, sent_lengths[i]] = eos_token_id[0]

        return decoded