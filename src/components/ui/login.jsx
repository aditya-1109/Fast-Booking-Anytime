import React, { useState } from 'react';
import { Modal, Box, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function LoginPopup() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '50vh',
    bgcolor: 'background.paper',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Trigger Image */}
      <img
        src="/images/dubai01.jpg"
        alt="Dubai"
        height="200"
        onClick={handleOpen}
        className="h-48 w-48 object-cover cursor-pointer rounded-lg"
      />

      {/* OR Trigger Button */}
      <Button
        variant="text"
        onClick={handleOpen}
        sx={{
          color: '#049a9b',
          fontWeight: 500,
          textTransform: 'none',
        }}
      >
        Login
      </Button>

      {/* Modal Box */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} className="relative flex flex-col gap-4 justify-center items-center">
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          >
            <CloseIcon />
          </IconButton>

          <h2 className="text-2xl font-semibold text-[#049a9b]">Login Form</h2>

          <TextField fullWidth label="Name" variant="outlined" />
          <TextField fullWidth label="Mobile Number" variant="outlined" type="tel" />
          <TextField fullWidth label="Email" variant="outlined" type="email" />
          <TextField fullWidth label="Password" variant="outlined" type="password" />

          <Button
            variant="contained"
            sx={{ backgroundColor: '#049a9b', mt: 2 }}
            className="w-full"
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
