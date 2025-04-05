import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const slides = {
  Dubai: [
    {
      image: "/images/dubai04.jpg",
      title: "Things to do in DUBAI",
      discount: "40% off",
      price: "INR 560",
      oldPrice: "INR 1120",
    },
    {
      image: "/images/dubai05.jpg",
      title: "Explore the Wonders",
      discount: "30% off",
      price: "INR 700",
      oldPrice: "INR 1000",
    },
  ],
  Singapoore: [
    {
      image: "/images/singapore05.jpg",
      title: "Discover Singapore’s Marvels",
      discount: "35% off",
      price: "INR 650",
      oldPrice: "INR 1000",
    },
    {
      image: "/images/singapore06.jpg",
      title: "Gardens by the Bay Tour",
      discount: "25% off",
      price: "INR 750",
      oldPrice: "INR 1000",
    },
  ],
  Bhutan: [
    {
      image: "/images/bhu05.jpg",
      title: "Himalayan Escape in Bhutan",
      discount: "40% off",
      price: "INR 560",
      oldPrice: "INR 1120",
    },
    {
      image: "/images/bhu06.jpg",
      title: "Tiger’s Nest Monastery Trek",
      discount: "30% off",
      price: "INR 700",
      oldPrice: "INR 1000",
    },
  ],
  Bali: [
    {
      image: "/images/bali07.jpg",
      title: "Serene Bali Beach Getaway",
      discount: "35% off",
      price: "INR 650",
      oldPrice: "INR 1000",
    },
    {
      image: "/images/bali05.jpg",
      title: "Ubud’s Cultural Wonders",
      discount: "20% off",
      price: "INR 800",
      oldPrice: "INR 1000",
    },
  ],
  Thailand: [
    {
      image: "/images/thai06.jpg",
      title: "Bangkok’s Grand Palace Tour",
      discount: "30% off",
      price: "INR 700",
      oldPrice: "INR 1000",
    },
    {
      image: "/images/thai08.jpg",
      title: "Phuket Island Adventure",
      discount: "25% off",
      price: "INR 750",
      oldPrice: "INR 1000",
    },
  ],
  USA: [
    {
      image: "/images/usa09.jpg",
      title: "Explore the Grand Canyon",
      discount: "40% off",
      price: "INR 560",
      oldPrice: "INR 1120",
    },
    {
      image: "/images/usa10.jpg",
      title: "New York City Sightseeing",
      discount: "30% off",
      price: "INR 700",
      oldPrice: "INR 1000",
    },
  ],
};

const ImageSlider = ({ country }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataa, setData] = useState(slides[country] || []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataa.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataa.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [dataa]); // Restart interval when `dataa` changes

  useEffect(() => {
    if (slides[country]) {
      setData(slides[country]);
      setCurrentIndex(0); // Reset index when country changes
    }
  }, [country]);

  if (!dataa.length) return <div>Loading...</div>; // Prevents rendering errors

  return (
    <div className="relative w-full h-screen">
  <div
    className="w-full h-full bg-cover bg-center transition-all duration-700"
    style={{ backgroundImage: `url(${dataa[currentIndex]?.image})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        {dataa[currentIndex]?.title}
      </h2>

      <p className="mt-2 text-base sm:text-lg md:text-xl">
        Get up to{" "}
        <span className="bg-yellow-400 text-black px-2 py-1 rounded">
          {dataa[currentIndex]?.discount}
        </span>{" "}
        on {country} Activities
      </p>
      
      <p className="mt-2 text-base sm:text-lg">
        Activities starting from{" "}
        <span className="font-bold text-lg sm:text-xl">
          {dataa[currentIndex]?.price}
        </span>{" "}
        <span className="line-through text-gray-300 text-sm sm:text-base">
          {dataa[currentIndex]?.oldPrice}
        </span>
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
