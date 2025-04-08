import React, { useRef, useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

const VisitorReviews = () => {
  const videos = [
    { video: "./videos/video01.MP4" },
    { video: "./videos/video02.MP4" },
    { video: "./videos/video03.MP4" },
    { video: "./videos/video04.MP4" },
    { video: "./videos/video06.MP4" },
    { video: "./videos/video07.MP4" },
    { video: "./videos/video08.MP4" },
    { video: "./videos/video09.MP4" },
    { video: "./videos/video10.MP4" },
    { video: "./videos/video11.MP4" },
    { video: "./videos/video12.MP4" },
    { video: "./videos/video13.MP4" },
    { video: "./videos/video14.MP4" },
    { video: "./videos/video15.MP4" },
    { video: "./videos/video16.MP4" },
  ];

  const [playingStates, setPlayingStates] = useState(Array(videos.length).fill(true));
  const videoRefs = useRef([]);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    const updatedStates = [...playingStates];

    if (video.paused) {
      video.play();
      updatedStates[index] = true;
    } else {
      video.pause();
      updatedStates[index] = false;
    }

    setPlayingStates(updatedStates);
  };

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-20 rounded-2xl mt-16">
      <Typography
        variant="h4"
        className="text-center mb-12 uppercase"
        sx={{
          color: "#049a9b",
          fontWeight: "700",
          fontSize: { xs: "24px", md: "30px" },
          letterSpacing: "1px",
        }}
      >
        Visitors Reviews Videos
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {videos.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg group">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <IconButton
                onClick={() => togglePlay(index)}
                className="absolute bottom-2 right-2 bg-white shadow-md hover:bg-gray-200"
                size="small"
              >
                {playingStates[index] ? (
                  <Pause fontSize="small" />
                ) : (
                  <PlayArrow fontSize="small" />
                )}
              </IconButton>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VisitorReviews;
