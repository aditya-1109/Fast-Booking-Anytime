import { useState } from "react";
import { Select, MenuItem, Typography } from "@mui/material";
import { AiFillFire } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Navbar() {
  const [selected, setSelected] = useState("explore-all");

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-20">
  {/* Explore All */}
  <div
    className={`flex flex-col items-center cursor-pointer transition duration-300 ${
      selected === "explore-all" ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
    }`}
    onClick={() => setSelected("explore-all")}
  >
    <AiFillFire className="text-2xl" />
    <Typography variant="body1" className="font-semibold">
      Explore All
    </Typography>
    {selected === "explore-all" && (
      <div className="w-10 border-b-2 border-orange-500 mt-1"></div>
    )}
  </div>

  {/* Desert Safari */}
  <div
    className={`flex flex-col items-center cursor-pointer transition duration-300 ${
      selected === "desert-safari" ? "text-black" : "text-gray-600 hover:text-black"
    }`}
    onClick={() => setSelected("desert-safari")}
  >
    <MdOutlineLocationOn className="text-2xl" />
    <Typography variant="body1" className="font-medium">
      Desert Safari
    </Typography>
    {selected === "desert-safari" && (
      <div className="w-10 border-b-2 border-black mt-1"></div>
    )}
  </div>
</div>

  );
}
