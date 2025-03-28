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
    <div className="w-full bg-white shadow-sm border-b flex items-center mt-20 justify-between px-6 py-3">
      {/* Explore Section */}
      <div className="flex items-center gap-6 text-gray-700 text-sm">
        <span className="text-orange-500 font-bold flex items-center gap-1 cursor-pointer">
          <span className="text-xl">🔥</span> Explore
        </span>

        {/* Destinations */}
        {destinations.map((dest, index) => (
          <span key={index} onClick={()=>navigate(`/country/${dest.name}`)} className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
            {dest.name}
            {dest.trending && (
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">Trending</span>
            )}
          </span>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <Button variant="contained" color="warning">
          Tours
        </Button>
        <Button variant="outlined" color="warning">
          Activities
        </Button>
      </div>
    </div>
  );
};

export default MenuBar;
