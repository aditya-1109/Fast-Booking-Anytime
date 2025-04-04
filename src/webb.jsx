import React, { useEffect, useState } from "react";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import MenuBar from "./components/ui/menu";
import { useNavigate, useParams } from "react-router-dom";
import { pagesData } from "./data";
import CallIcon from '@mui/icons-material/Call';

const DestinationSection = ({ title, destinations, navigate, call, whatsapp }) => (
  <section className="p-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Button variant="text" onClick={() => navigate(`/view/${title}`)} color="#049a9b">
        View All ➜
      </Button>
    </div>
    <div className="flex gap-4 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide" style={{scrollbarWidth: "none"}}>
    {Object.entries(destinations).map(([titttle, dest])=> (
        <div key={titttle} className="overflow-hidden shadow-sm min-w-1/3 max-w-[400px]">

         <img
            src={dest.poster.image}
            alt={dest.poster.title}
            onClick={() => navigate(`/pic/${dest.poster.tittle}/${dest.poster.country}`)}
            className="w-100 h-100 object-cover cursor-pointer rounded-lg"
          />
          <div className="p-4">
          <div className="flex justify-between items-center">
  <p className="text-gray-500 text-sm">{dest.poster.days}</p>
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

            
            <div className="flex justify-between mt-3">
              <Button variant="outlined" onClick={call} startIcon={<FaPhoneAlt />} color="#049a9b">
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

const ThrillophiliaClone = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const [filteredDestinations, setFilteredDestinations] = useState(pagesData);

  const phoneNumber = "+919899997587";
  const whatsappMessage = "Hello, I would like to request a callback.";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleRequestCallback = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    if (countryName) {
      setFilteredDestinations({ [countryName]: pagesData[countryName] || [] });
    } else {
      setFilteredDestinations(pagesData);
    }
  }, [countryName]);

  return (
    <div className="w-full bg-white">
     
      <MenuBar />

      <div>
        {Object.entries(filteredDestinations).map(([country, destinations]) => (
          <DestinationSection
            key={country}
            title={country}
            destinations={destinations}
            navigate={navigate}
            call={handleCall}
            whatsapp={handleRequestCallback}
          />
        ))}
      </div>


    </div>
  );
};

export default ThrillophiliaClone;
