import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const destinations = [
  { name: "Dubai", trending: true },
  { name: "Singapoore", trending: false },
  { name: "Bali", trending: false },
  { name: "Bhutan", trending: false },
  { name: "Thailand", trending: false },
  { name: "USA", trending: true },
];

const MenuBar = () => {

  const navigate= useNavigate();
  return (
    <div className="w-full bg-white shadow-sm border-b flex flex-wrap items-center mt-20 justify-between px-4 md:px-6 py-3">
  {/* Explore Section */}
  <div className="flex items-center gap-4 md:gap-6 text-gray-700 text-sm overflow-x-auto">
    <span className="text-[rgba(4,154,155,255)] font-bold flex items-center gap-1 cursor-pointer">
      <span className="text-xl">🔥</span> Explore
    </span>

    {/* Destinations (Scrollable on Small Screens) */}
    <div className="flex gap-4 md:gap-6 overflow-x-auto whitespace-nowrap">
      {destinations.map((dest, index) => (
        <span 
          key={index} 
          onClick={() => navigate(`/country/${dest.name}`)} 
          className="flex items-center gap-1 cursor-pointer hover:text-[rgba(4,154,155,255)]"
        >
          {dest.name}
          {dest.trending && (
            <span className="bg-[rgba(4,154,155,255)] text-white text-xs px-2 py-0.5 rounded-md">
              Trending
            </span>
          )}
        </span>
      ))}
    </div>
  </div>

  {/* Navigation Buttons (Dropdown on Mobile) */}
  <div className="flex items-center gap-4">
    <div className="hidden sm:flex gap-4">
      <Button variant="contained" sx={{ backgroundColor: "#049a9b", '&:hover': { backgroundColor: "#037f7f" } }}>
        Tours
      </Button>
      <Button variant="outlined" color="#049a9b">
        Activities
      </Button>
    </div>

    
  </div>
</div>

  );
};

export default MenuBar;
