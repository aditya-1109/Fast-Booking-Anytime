import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Button, Typography, Modal, Box, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyPicker from './flag';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const modalStyle = {
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
    <>
      <header className="flex w-full bg-opacity-50 z-10 items-center justify-between px-4 md:px-10 max-w-screen-xl mx-auto">
        {/* Logo */}
        <img onClick={() => navigate("/")} src="/images/logo.png" className="w-16 h-16 md:w-20 md:h-20 cursor-pointer" />

        {/* Search Bar */}
        <div className="hidden md:block relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for Destinations"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-600"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        </div>

        {/* Currency & Login */}
        <div className="flex gap-4 items-center">
          <CurrencyPicker />

          {/* Login Button */}
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
        </div>
      </header>

      {/* Login Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle} className="relative flex flex-col gap-4 justify-center items-center">
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          >
            <CloseIcon />
          </IconButton>

          <h2 className="text-2xl font-semibold text-[#049a9b]">Fast Booking Anytime Login</h2>

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
    </>
  );
}
