import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const slides = [
  {
    image: "./images/dubai04.jpg", 
    title: "Things to do in DUBAI",
    discount: "40% off",
    price: "INR 560",
    oldPrice: "INR 1120",
  },
  {
    image: "./images/dubai05.jpg",
    title: "Explore the Wonders",
    discount: "30% off",
    price: "INR 700",
    oldPrice: "INR 1000",
  },
  
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      
      <div className="w-full h-full bg-cover bg-center transition-all duration-700" style={{backgroundImage: `url(${slides[currentIndex].image})`}}>

      
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            {slides[currentIndex].title}
          </h2>
        
          <p className="mt-2 text-lg md:text-xl">
            Get up to{" "}
            <span className="bg-yellow-400 text-black px-2 py-1 rounded">
              {slides[currentIndex].discount}
            </span>{" "}
            on Dubai Activities
          </p>
          <p className="mt-2 text-lg">
            Activities starting from{" "}
            <span className="font-bold text-xl">{slides[currentIndex].price}</span>{" "}
            <span className="line-through text-gray-300">
              {slides[currentIndex].oldPrice}
            </span>
          </p>
          <Button
            variant="contained"
            color="warning"
            className="mt-4 bg-orange-500 px-6 py-2 rounded-full"
          >
            Connect With An Expert
          </Button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-20 text-white p-3 rounded-full"
        onClick={prevSlide}
      >
        <ArrowBackIos />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-20 text-white p-3 rounded-full"
        onClick={nextSlide}
      >
        <ArrowForwardIos />
      </button>
    </div>
  );
};

export default ImageSlider;
