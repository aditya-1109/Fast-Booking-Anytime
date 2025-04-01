import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const slides = {
  Dubai:[{
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
  }],
  "Singapore": [
    {
      "image": "./images/singapore01.jpg",
      "title": "Discover Singapore’s Marvels",
      "discount": "35% off",
      "price": "INR 650",
      "oldPrice": "INR 1000"
    },
    {
      "image": "./images/singapore02.jpg",
      "title": "Gardens by the Bay Tour",
      "discount": "25% off",
      "price": "INR 750",
      "oldPrice": "INR 1000"
    }
  ],
  "Bhutan": [
    {
      "image": "./images/bhutan01.jpg",
      "title": "Himalayan Escape in Bhutan",
      "discount": "40% off",
      "price": "INR 560",
      "oldPrice": "INR 1120"
    },
    {
      "image": "./images/bhutan02.jpg",
      "title": "Tiger’s Nest Monastery Trek",
      "discount": "30% off",
      "price": "INR 700",
      "oldPrice": "INR 1000"
    }
  ],
  "Bali": [
    {
      "image": "./images/bali01.jpg",
      "title": "Serene Bali Beach Getaway",
      "discount": "35% off",
      "price": "INR 650",
      "oldPrice": "INR 1000"
    },
    {
      "image": "./images/bali02.jpg",
      "title": "Ubud’s Cultural Wonders",
      "discount": "20% off",
      "price": "INR 800",
      "oldPrice": "INR 1000"
    }
  ],
  "Thailand": [
    {
      "image": "./images/thailand01.jpg",
      "title": "Bangkok’s Grand Palace Tour",
      "discount": "30% off",
      "price": "INR 700",
      "oldPrice": "INR 1000"
    },
    {
      "image": "./images/thailand02.jpg",
      "title": "Phuket Island Adventure",
      "discount": "25% off",
      "price": "INR 750",
      "oldPrice": "INR 1000"
    }
  ],
  "USA": [
    {
      "image": "./images/usa01.jpg",
      "title": "Explore the Grand Canyon",
      "discount": "40% off",
      "price": "INR 560",
      "oldPrice": "INR 1120"
    },
    {
      "image": "./images/usa02.jpg",
      "title": "New York City Sightseeing",
      "discount": "30% off",
      "price": "INR 700",
      "oldPrice": "INR 1000"
    }
  ]
};

const ImageSlider = ({country}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [dataa, setData]= useState("");
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides[country].length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides[country].length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    setData(slides[country])
  }, [dataa])

  return (
    <div className="relative w-screen h-screen">
      
      <div className="w-full h-full bg-cover bg-center transition-all duration-700" style={{backgroundImage: `url(${dataa[currentIndex].image})`}}>

      
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            {dataa[currentIndex].title}
          </h2>
        
          <p className="mt-2 text-lg md:text-xl">
            Get up to{" "}
            <span className="bg-yellow-400 text-black px-2 py-1 rounded">
              {dataa[currentIndex].discount}
            </span>{" "}
            on Dubai Activities
          </p>
          <p className="mt-2 text-lg">
            Activities starting from{" "}
            <span className="font-bold text-xl">{dataa[currentIndex].price}</span>{" "}
            <span className="line-through text-gray-300">
              {dataa[currentIndex].oldPrice}
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
