import React, {useRef} from "react";
import { Button } from "@mui/material";
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
    <div className="sticky top-0 bg-white shadow-sm border-b flex flex-wrap items-center justify-between px-4 md:px-6 py-3 z-50 flex-col md:flex-row">
      {/* Explore Section */}
      <div className="flex items-center gap-2 md:gap-4 text-gray-700 text-sm px-4 relative">
      {/* Explore Icon */}
      <span className="text-[rgba(4,154,155,255)] font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap">
        <WhatshotIcon sx={{ color: "orange" }} /> Explore
      </span>

      {/* Scrollable Destination List */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap max-w-[85%] scroll-smooth"
      >
        {destinations.map((dest, index) => (
          <span
            key={index}
            onClick={() => navigate(`/country/${dest.name}`)}
            className="flex items-center gap-1 cursor-pointer hover:text-[rgba(4,154,155,255)] min-w-max"
          >
            {React.cloneElement(dest.icon, {
              sx: { fontSize: 30, color: "gray" },
            })}
            {dest.name}
            {dest.trending && (
              <span className="bg-[rgba(4,154,155,255)] text-white text-xs px-2 py-0.5 rounded-md">
                Trending
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Scroll Arrow */}
      <button
        className="absolute right-2 p-1 rounded-full bg-white shadow-md hover:bg-gray-100"
        onClick={scrollRight}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>

      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-4">
          <Button variant="contained" sx={{ backgroundColor: "#049a9b", '&:hover': { backgroundColor: "#037f7f" } }}>
            Tours
          </Button>
          <Button variant="outlined" sx={{ color: "#049a9b", borderColor: "#049a9b" }}>
            Activities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
