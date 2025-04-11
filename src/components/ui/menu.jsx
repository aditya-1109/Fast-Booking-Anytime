import React, { useEffect, useRef, useState } from "react";
import { Button, IconButton, Box, Typography } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot"; // Explore Icon
import LandscapeIcon from "@mui/icons-material/Landscape"; // Ladakh
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive"; // Singapore
import WavesIcon from "@mui/icons-material/Waves"; // Bali
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist"; // Thailand
import ForestIcon from "@mui/icons-material/Forest"; // North East India
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"; // Dubai
import TerrainIcon from "@mui/icons-material/Terrain"; // Kashmir
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MapIcon from '@mui/icons-material/Map';
import PlaceIcon from '@mui/icons-material/Place';
import LocalBarIcon from '@mui/icons-material/LocalBar'; 
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import { pagesData } from "../../data";


const destinations = [
  { name: "Leh", icon: <LandscapeIcon />, trending: true },
  { name: "Singapore", icon: <AirplanemodeActiveIcon />, trending: false },
  { name: "Malaysia", icon: <TerrainIcon />, trending: false },
  { name: "Thailand", icon: <TempleBuddhistIcon />, trending: false },
  { name: "Maldives", icon: <ForestIcon />, trending: false },
  { name: "Indonesia", icon: <WavesIcon />, trending: true },
  { name: "Dubai", icon: <FlightTakeoffIcon />, trending: false },
  { name: "Rajasthan", icon: <MapIcon />, trending: false },
  { name: "Kerala", icon: <BeachAccessIcon />, trending: false },
  { name: "Goa", icon: <LocalBarIcon />, trending: false },
  { name: "Delhi", icon: <PlaceIcon />, trending: false },
  { name: "Himachal", icon: <ForestIcon />, trending: false },
];


const DestinationSection = ({ title, destinations, navigate, call, whatsapp }) => (
  <section className="p-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl text-black font-semibold">{title}</h2>
      <Button variant="text" onClick={() => navigate(`/view/${title}`)} color="#049a9b" sx={{color:"#049a9b"}}>
        View All ➜
      </Button>
    </div>
    <div className="flex gap-4 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide" style={{scrollbarWidth: "none"}}>
    {Object.entries(destinations).map(([titttle, dest])=> (
        <div key={titttle} className="overflow-hidden shadow-sm min-w-100 max-w-[400px]">

         <img
            src={dest.poster.image}
            alt={dest.poster.title}
            onClick={() => navigate(`/pic/${titttle}/${dest.poster.country}`)}
            className="w-100 h-100 object-cover cursor-pointer rounded-lg"
          />
          <div className="p-4">
          <div className="flex justify-between items-center">
  <p className="text-gray-500 text-sm">{dest.poster.destination}</p>
  <div className="flex items-center gap-1 text-green-600 text-sm">
    <FaStar /> {dest.poster.rating} ({dest.poster.reviews})
    </div>
  </div>
            <h3 className="text-md font-semibold mt-1">{dest.poster.title}</h3>
            <p className="text-xs mt-2 bg-gray-100 p-1 inline-block rounded-md">{dest.poster.duration}</p>

            
            <div className="mt-3 flex flex-row items-center gap-2">
              <p className="text-lg font-bold text-gray-800">{dest.poster.price}</p>
              <p className="text-sm line-through text-gray-500">{dest.poster.originalPrice}</p>
              <p className="text-green-600 text-sm font-semibold">{dest.poster.discount}</p>
            </div>

            
            <div className="flex justify-between mt-3 flex-row">
              <Button variant="outlined" startIcon={<FaPhoneAlt />} onClick={call} color="#049a9b" sx={{color: "#049a9b"}}>
                Call
              </Button>
              <Button variant="contained" onClick={whatsapp} sx={{ backgroundColor: "#049a9b", '&:hover': { backgroundColor: "#037f7f" } }}>
                Request Callback
              </Button>
            </div> 
          </div> 
        </div>
      ))}
    </div>
  </section>
);

const MenuBar = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [type, setType]= useState("International");
  const [filteredData, setFilteredData]= useState(pagesData);

  const phoneNumber = "+919899997587";
  const whatsappMessage = "Hello, I would like to request a callback.";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleRequestCallback = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };


  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  useEffect(() => {
    // Convert pagesData into an array and filter based on the type
    const newData = Object.entries(pagesData)
      .filter(([country, data]) => data.type === type) // Filter by the type value
      .reduce((acc, [country, data]) => {
        acc[country] = data; // Rebuild the object with the filtered data
        return acc;
      }, {});

    setFilteredData(newData);
  }, [type]);

  return (
    <>
    
    <div className="w-full bg-white">
         
    <Box className="sticky top-0 bg-white shadow-sm border-b flex flex-col md:flex-row flex-wrap items-center justify-between px-4 md:px-6 py-3 z-50">
 {/* Explore Section */}
 <Box className="w-full md:w-3/4 flex items-center gap-2 md:gap-4 text-gray-700 text-sm px-2 md:px-4 relative overflow-x-auto" sx={{scrollbarWidth:"none"}}>
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
      onClick={() => navigate(`/view/${dest.name}`)}
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
            right: 0,
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
     
        <Box className="w-full md:w-auto mt-2 md:mt-0 flex items-center justify-center md:justify-end gap-4 border border-gray-300 rounded-md p-2">
        <Button
            variant="contained w-1/2"
            onClick={()=>setType("International")}
            sx={{
              backgroundColor: "#049a9b",
              '&:hover': { backgroundColor: "#037f7f" },
            }}
          >
            International
          </Button>
          <Button
            variant="outlined w-1/2"
            onClick={()=>setType("Domestic")}
            sx={{
              color: "#049a9b",
              borderColor: "#049a9b",
            }}
          >
            Domestic
          </Button>
        </Box>
      
    </Box>
    
          <div>
            {Object.entries(filteredData).map(([country, destinations]) => (
              <DestinationSection
                key={country}
                title={country}
                destinations={destinations.places}
                navigate={navigate}
                call={handleCall}
                whatsapp={handleRequestCallback}
              />
            ))}
          </div>
    
    
        </div>
    </>
  );
};

export default MenuBar;
