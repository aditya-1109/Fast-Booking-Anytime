import React, { useRef } from "react";
import { Button, IconButton, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WhatshotIcon from "@mui/icons-material/Whatshot"; // Explore Icon
import LandscapeIcon from "@mui/icons-material/Landscape"; // Ladakh
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive"; // Singapore
import WavesIcon from "@mui/icons-material/Waves"; // Bali
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist"; // Thailand
import ForestIcon from "@mui/icons-material/Forest"; // North East India
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"; // Dubai
import TerrainIcon from "@mui/icons-material/Terrain"; // Kashmir
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const destinations = [
  { name: "Ladakh", icon: <LandscapeIcon />, trending: true },
  { name: "Singapore", icon: <AirplanemodeActiveIcon />, trending: false },
  { name: "Kashmir", icon: <TerrainIcon />, trending: false },
  { name: "Thailand", icon: <TempleBuddhistIcon />, trending: false },
  { name: "North East India", icon: <ForestIcon />, trending: false },
  { name: "Bali", icon: <WavesIcon />, trending: true },
  { name: "Dubai", icon: <FlightTakeoffIcon />, trending: false },
];

const MenuBar = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <Box className="sticky top-0 bg-white shadow-sm border-b flex flex-wrap items-center justify-between px-4 md:px-6 py-3 z-50 flex-col md:flex-row">
      {/* Explore Section */}
      <Box className="flex items-center gap-2 md:gap-4 text-gray-700 text-sm px-4 relative">
        {/* Explore Icon */}
        <Typography variant="h7" sx={{ display: 'flex', alignItems: 'center', gap: 1, flexDirection:"column", cursor: 'pointer', color: 'rgba(4,154,155,255)', fontWeight: 'bold' }}>
          <WhatshotIcon sx={{ color: "orange" }} /><Box>Explore</Box> 
        </Typography>

        {/* Scrollable Destination List */}
        <Box
  ref={scrollRef}
  sx={{
    display: "flex",
    gap: 4,
    overflowX: "auto",
    maxWidth: "85%",
    whiteSpace: "nowrap",
    scrollbarWidth: "none", /* Firefox */
    msOverflowStyle: "none", /* Internet Explorer 10+ */
    "&::-webkit-scrollbar": { display: "none" }, /* Webkit browsers */
    scrollBehavior: "smooth",
  }}
>
  {destinations.map((dest, index) => (
    <Box
      key={index}
      onClick={() => navigate(`/country/${dest.name}`)}
      sx={{
        position: "relative", // Needed for absolute positioning
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        "&:hover": { color: "rgba(4,154,155,255)" },
      }}
    >
      {/* Trending Tag */}
      {dest.trending && (
        <Box
          sx={{
            position: "absolute",
            top: "0px", // Moves above the icon
            left: "30px", // Aligns to the left
            backgroundColor: "#049a9b",
            color: "white",
            fontSize: "7px",
            fontWeight: "bold",
            padding: "1px 2px",
            borderRadius: "2px",
            
          }}
        >
          Trending
        </Box>
      )}

      {/* Destination Icon */}
      {React.cloneElement(dest.icon, { sx: { fontSize: 30, color: "gray" } })}

      {/* Destination Name */}
      <Typography variant="body2">{dest.name}</Typography>
    </Box>
  ))}
</Box>


        {/* Scroll Arrow */}
        <IconButton
          sx={{
            position: 'absolute',
            right: -50,
            p: 1,
            backgroundColor: '#d3d3d3',
          
            '&:hover': { backgroundColor: '#f5f5f5' },
          }}
          onClick={scrollRight}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Button Section */}
      <Box className="flex items-center gap-4 border" sx={{
    border: "1px solid #d3d3d3", 
    borderRadius: "8px", 
    padding: "8px", 
  }}>
        <Box className="hidden sm:flex gap-4">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#049a9b",
              '&:hover': { backgroundColor: "#037f7f" },
            }}
          >
            Tours
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#049a9b",
              borderColor: "#049a9b",
            }}
          >
            Activities
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuBar;
