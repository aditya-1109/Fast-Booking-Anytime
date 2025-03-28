import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box, Select } from "@mui/material";
import { AiFillFire } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Navbar from "./components/ui/navbar";
import Header from "./components/ui/header";
import ImageSlider from "./slider";

const activities = [
  {
    title: "Museum Of The Future",
    image: "./images/activity01.JPG",
    description:
      "The Museum of Future, Dubai is a new era museum themed on modern technology.",
    rating: 4.7,
    reviews: 921,
    price: 3706,
    originalPrice: 4638,
    duration: "1 Hour",
    tags: ["Top Seller", "Futuristic Museum", "Innovative Design", "Technology Hub", "Interactive Exhibits"],
  },
  {
    title: "Burj Khalifa",
    image: "./images/activity02.JPG",
    description:
      "Burj Khalifa, also known as the Burj Dubai, is one of the largest skyscrapers in the world.",
    rating: 4.8,
    reviews: 1200,
    price: 4500,
    originalPrice: 5200,
    duration: "1 Hour - 2 Hours",
    tags: ["Tallest skyscraper in the World", "Iconic Skyscraper", "Panoramic Views", "Architectural Marvel", "Sky-High Experience"],
  },
];

const ActivityCard = ({ activity }) => {
  return (
    <Card className="shadow-lg rounded-xl mb-6 w-full md:w-3/4 lg:w-4/5 ">
      <div className="flex flex-col md:flex-row">
        <CardMedia
          component="img"
          height="200"
          image={activity.image}
          alt={activity.title}
          className="h-48 w-48"
        />
        <CardContent className="md:w-9/10 p-4">
          <Typography variant="h6" className="font-bold">
            {activity.title}
          </Typography>
          <Box className="flex flex-wrap gap-2 mt-2">
            {activity.tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" className="bg-gray-200" />
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary" className="mt-2">
            {activity.description}
          </Typography>
          <Typography className="mt-2 text-green-600 font-bold flex items-center">
            <FaStar className="text-yellow-500 mr-1" /> {activity.rating} ({activity.reviews})
          </Typography>
          <Typography variant="body1" className="mt-2 font-semibold">
            <span className="line-through text-gray-500">INR {activity.originalPrice}</span> INR {activity.price}
          </Typography>
          <Button variant="contained" color="warning" className="mt-4">
            Book Now
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

const ThingsToDoInDubai = () => {
  return (
    <Box sx={{display: "flex", position:"absolute", justifyContent: "flex-start", width:"100vw", left: 0, top:0, flexDirection: "column", alignItems: "flex-start"}}>
    <Header />
    <ImageSlider  />
    <Box className="container w-1000 px-4 py-8" sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
      <Typography variant="h5" className="mb-5 font-bold flex items-center gap-2" sx={{fontWeight: 600, fontSize: "20px", color: "grey"}}>
         Things to Do in Dubai
      </Typography>

      <Navbar />
      
      {activities.map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
      ))}
    </Box>
    </Box>
  );
};

export default ThingsToDoInDubai;
