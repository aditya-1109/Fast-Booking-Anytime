import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className="bg-gray-900 text-white py-10 mt-40 px-5" sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      {/* Top Footer Sections */}
      <Grid container spacing={4} className="max-w-5xl" sx={{backgroundColor: "white", padding:"50px", borderRadius: "20px", marginTop: "-150px", border: "solid grey 1px", boxShadow: "5 5 20 10 grey"}}>
        {/* About Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="text-s text-black font-semibold ">ABOUT THRILLOPHILIA</Typography>
          <ul className="space-y-2 mt-2">
            <li><Link href="#" className="text-gray-400 hover:text-black">About Us</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-black">We Are Hiring</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-black">Thrillophilia Reviews</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-black">Terms & Conditions</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-black">Privacy Policies</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-black">Support</Link></li>
            <li className="text-red-500"><Link href="#" className="font-semibold">⚠ Beware of Frauds</Link></li>
          </ul>
        </Grid>

        {/* Suppliers & Brands */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="text-lg text-black font-semibold">FOR SUPPLIERS</Typography>
          <ul className="space-y-2 mt-2">
            <li><Link href="#" className="text-gray-400 hover:text-black">List Your Activities</Link></li>
          </ul>
          <Typography variant="h6" className="text-lg text-black font-semibold mt-4">FOR BRANDS</Typography>
          <ul className="space-y-2 mt-2">
            <li><Link href="#" className="text-gray-400 hover:text-white">Partner With Us</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Destination Marketing</Link></li>
          </ul>
        </Grid>

        {/* Travellers Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="text-lg text-black font-semibold">FOR TRAVELLERS</Typography>
          <ul className="space-y-2 mt-2">
            <li><Link href="#" className="text-gray-400 text-black hover:text-white">Gift An Experience</Link></li>
          </ul>
        </Grid>

        {/* Travel Destinations */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="text-s text-black font-semibold">TRAVEL DESTINATIONS</Typography>
          <div className="grid grid-cols-3 gap-2 text-center mt-2">
            {["Bali", "Dubai", "Singapore", "Thailand", "Andaman", "India", "Ladakh", "Hong Kong", "Sri Lanka"].map((destination) => (
              <div key={destination} className="bg-gray-800 py-1 rounded-md text-sm">{destination}</div>
            ))}
          </div>
        </Grid>
      </Grid>

      {/* Bottom Footer */}
      <Box className="mt-10 border-t border-gray-700 pt-5 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <IconButton href="#" className="text-white hover:text-blue-500"><Facebook /></IconButton>
          <IconButton href="#" className="text-white hover:text-pink-500"><Instagram /></IconButton>
          <IconButton href="#" className="text-white hover:text-blue-400"><Twitter /></IconButton>
          <IconButton href="#" className="text-white hover:text-blue-700"><LinkedIn /></IconButton>
          <IconButton href="#" className="text-white hover:text-red-500"><YouTube /></IconButton>
        </div>

        {/* Copyright */}
        <Typography variant="body2" className="text-gray-400 mt-3">
          © 2025 Fast Booking.com All rights reserved.
        </Typography>
        <Typography variant="caption" className="text-gray-500 mt-1 block">
          The content and images used on this site are copyright protected. Unauthorized use is prohibited and punishable by law.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
