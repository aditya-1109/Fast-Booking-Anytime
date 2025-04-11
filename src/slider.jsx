import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { pagesData } from "./data";


const ImageSlider = ({ country }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataa, setData] = useState(pagesData[country].places || []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pagesData[country]?.mainImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pagesData[country]?.mainImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(()=>{
    const newData= Object.values(dataa);
    setData(newData)
  },[])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [dataa]); 

  

  return (
    <div className="relative w-full h-screen">
  <div
    className="w-full h-full bg-cover bg-center transition-all duration-700"
    style={{ backgroundImage: `url(${pagesData[country]?.mainImages[currentIndex]})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        {dataa[currentIndex]?.poster.title}
      </h2>

      <p className="mt-2 text-base sm:text-lg md:text-xl">
        Get on to{" "}
        <span className="bg-yellow-400 text-black px-2 py-1 rounded">
          {dataa[currentIndex]?.poster.price}
        </span>{" "}
        on {country} Booking
      </p>
      
      <p className="mt-2 text-base sm:text-lg">
        Original price is{" "}
        <span className="font-bold text-lg sm:text-xl">
          {dataa[currentIndex]?.poster.originalPrice}
        </span>{" "}
        
      </p>

      <Button
        variant="contained"
        color="warning"
        className="mt-4 bg-orange-500 px-6 py-2 sm:px-8 sm:py-3 rounded-full"
      >
        Connect With An Expert
      </Button>
    </div>
  </div>

  {/* Navigation Buttons */}
  <button
    className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-30 hover:bg-opacity-50 text-white p-2 sm:p-3 rounded-full transition"
    onClick={prevSlide}
  >
    <ArrowBackIos className="text-sm sm:text-base" />
  </button>
  <button
    className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-30 hover:bg-opacity-50 text-white p-2 sm:p-3 rounded-full transition"
    onClick={nextSlide}
  >
    <ArrowForwardIos className="text-sm sm:text-base" />
  </button>
</div>

  );
};

export default ImageSlider;
