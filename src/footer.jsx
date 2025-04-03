import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className="bg-gray-900 text-white py-10 px-5 mt-40" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
  <Grid 
    container 
    spacing={4} 
    className="w-full max-w-5xl" 
    sx={{ 
      backgroundColor: "white", 
      padding: { xs: "30px", md: "50px" }, 
      borderRadius: "20px", 
      marginTop: "-150px", 
      border: "solid grey 1px", 
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    }}
  >
    {/* About Section */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" className="text-sm text-black font-semibold">ABOUT THRILLOPHILIA</Typography>
      <ul className="space-y-2 mt-2">
        {["About Us", "We Are Hiring", "Thrillophilia Reviews", "Terms & Conditions", "Privacy Policies", "Support"].map((item) => (
          <li key={item}>
            <Link href="#" className="text-gray-500 hover:text-black text-sm">{item}</Link>
          </li>
        ))}
        <li className="text-red-500"><Link href="#" className="font-semibold text-sm">⚠ Beware of Frauds</Link></li>
      </ul>
    </Grid>

    {/* Suppliers & Brands */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" className="text-sm text-black font-semibold">FOR SUPPLIERS</Typography>
      <ul className="space-y-2 mt-2">
        <li><Link href="#" className="text-gray-500 hover:text-black text-sm">List Your Activities</Link></li>
      </ul>
      <Typography variant="h6" className="text-sm text-black font-semibold mt-4">FOR BRANDS</Typography>
      <ul className="space-y-2 mt-2">
        {["Partner With Us", "Destination Marketing"].map((item) => (
          <li key={item}>
            <Link href="#" className="text-gray-500 hover:text-black text-sm">{item}</Link>
          </li>
        ))}
      </ul>
    </Grid>

    {/* Travellers Section */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" className="text-sm text-black font-semibold">FOR TRAVELLERS</Typography>
      <ul className="space-y-2 mt-2">
        <li><Link href="#" className="text-gray-500 hover:text-black text-sm">Gift An Experience</Link></li>
      </ul>
    </Grid>

    {/* Travel Destinations */}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" className="text-sm text-black font-semibold">TRAVEL DESTINATIONS</Typography>
      <div className="grid grid-cols-3 gap-2 text-center mt-2">
        {["Bali", "Dubai", "Singapore", "Thailand", "Andaman", "India", "Ladakh", "Hong Kong", "Sri Lanka"].map((destination) => (
          <div key={destination} className="bg-gray-800 py-1 rounded-md text-sm text-white">{destination}</div>
        ))}
      </div>
    </Grid>
  </Grid>

  {/* Bottom Footer */}
  <Box className="mt-10 border-t border-gray-700 pt-5 text-center w-full max-w-5xl">
    {/* Social Media Icons */}
    <div className="flex justify-center space-x-4">
      {[Facebook, Instagram, Twitter, LinkedIn, YouTube].map((Icon, index) => (
        <IconButton key={index} href="#" className="text-white hover:text-gray-400">
          <Icon />
        </IconButton>
      ))}
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
