import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box, Select } from "@mui/material";
import { FaStar } from "react-icons/fa";
import Navbar from "./components/ui/navbar";
import Header from "./components/ui/header";
import ImageSlider from "./slider";
import { useParams } from "react-router-dom";



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

  const activities = {
    Dubai: [{
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
    }],
    Bhutan:[{
      "title": "Tiger's Nest Monastery",
      "image": "./images/bhutan01.JPG",
      "description": "The Tiger's Nest Monastery is a sacred site in Bhutan, perched on a cliffside 900 meters above the Paro Valley.",
      "rating": 4.9,
      "reviews": 890,
      "price": 3500,
      "originalPrice": 4200,
      "duration": "3 Hours",
      "tags": ["Sacred Site", "Cultural Experience", "Mountain Views", "Hiking Adventure", "Historical Landmark"]
    },
    {
      "title": "Paro Dzong",
      "image": "./images/bhutan02.JPG",
      "description": "Paro Dzong is a fortress-monastery, offering stunning views of the Paro Valley and a significant part of Bhutan's history.",
      "rating": 4.8,
      "reviews": 762,
      "price": 2800,
      "originalPrice": 3500,
      "duration": "2 Hours",
      "tags": ["Cultural Heritage", "Ancient Architecture", "Historical Landmark", "Scenic Views", "Spiritual Journey"]
    }],
    Bali: [{
      "title": "Bali Safari & Marine Park",
      "image": "./images/bali01.JPG",
      "description": "Explore the wildlife of Bali in an immersive safari park with over 60 species of animals from Indonesia, India, and Africa.",
      "rating": 4.7,
      "reviews": 1125,
      "price": 4200,
      "originalPrice": 4800,
      "duration": "4 Hours",
      "tags": ["Wildlife Safari", "Family Friendly", "Animal Encounters", "Educational Experience", "Nature Exploration"]
    },
    {
      "title": "Sacred Monkey Forest Sanctuary",
      "image": "./images/bali02.JPG",
      "description": "A peaceful forest sanctuary in Ubud, Bali, inhabited by playful long-tailed macaques and surrounded by ancient temple ruins.",
      "rating": 4.8,
      "reviews": 1345,
      "price": 1500,
      "originalPrice": 1800,
      "duration": "1 Hour - 1.5 Hours",
      "tags": ["Wildlife Spotting", "Nature Walk", "Cultural Experience", "Temple Ruins", "Unique Flora and Fauna"]
    }],
    Thailand:[{
      "title": "Safari World",
      "image": "./images/thailand01.JPG",
      "description": "Safari World in Thailand is a sprawling open zoo and leisure park offering a great mix of animal shows and wildlife exploration.",
      "rating": 4.6,
      "reviews": 1020,
      "price": 3200,
      "originalPrice": 3800,
      "duration": "5 Hours",
      "tags": ["Wildlife Adventure", "Family Fun", "Animal Shows", "Safari Experience", "Thailand Attractions"]
    },
    {
      "title": "Grand Palace & Wat Phra Kaew",
      "image": "./images/thailand02.JPG",
      "description": "A cultural experience in Thailand, visit the Grand Palace and the Temple of the Emerald Buddha, home to stunning architecture and sacred relics.",
      "rating": 4.9,
      "reviews": 1500,
      "price": 3500,
      "originalPrice": 4000,
      "duration": "3 Hours",
      "tags": ["Cultural Heritage", "Historic Architecture", "Spiritual Significance", "Guided Tours", "Iconic Landmark"]
    }],
    USA:[{
      "title": "Statue of Liberty",
      "image": "./images/usa01.JPG",
      "description": "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor.",
      "rating": 4.7,
      "reviews": 1390,
      "price": 4500,
      "originalPrice": 5100,
      "duration": "1 Hour - 2 Hours",
      "tags": ["Historical Landmark", "Iconic Statue", "Freedom", "Tourist Attraction", "New York Experience"]
    },
    {
      "title": "Grand Canyon Helicopter Tour",
      "image": "./images/usa02.JPG",
      "description": "Soar above the Grand Canyon in a helicopter for a breathtaking aerial view of one of the world's greatest natural wonders.",
      "rating": 4.9,
      "reviews": 750,
      "price": 15000,
      "originalPrice": 18000,
      "duration": "30 Minutes",
      "tags": ["Adventure", "Aerial Views", "Nature Wonders", "Luxury Experience", "Grand Canyon"]
    }],
    Singapoore:[{
      "title": "Gardens by the Bay",
      "image": "./images/singapore01.JPG",
      "description": "A stunning nature park in Singapore, with futuristic Supertree Grove and a variety of plant species, showcasing modern gardening.",
      "rating": 4.8,
      "reviews": 1100,
      "price": 2500,
      "originalPrice": 3000,
      "duration": "2 Hours",
      "tags": ["Modern Gardens", "Nature Walk", "Futuristic Architecture", "Iconic Landmark", "Family-Friendly"]
    },
    {
      "title": "Marina Bay Sands SkyPark",
      "image": "./images/singapore02.JPG",
      "description": "Enjoy panoramic views of Singapore from the observation deck at the Marina Bay Sands SkyPark, one of the city's most famous landmarks.",
      "rating": 4.7,
      "reviews": 1250,
      "price": 4000,
      "originalPrice": 4600,
      "duration": "1 Hour",
      "tags": ["Skyline Views", "Luxury Experience", "Iconic Landmark", "Panoramic Views", "Singapore Skyline"]
    }]
  };

  const {country}= useParams();
  console.log(country);
  return (
    <Box sx={{display: "flex", position:"absolute", justifyContent: "flex-start", width:"100vw", left: 0, top:0, flexDirection: "column", alignItems: "flex-start"}}>
    <Header />
    <ImageSlider country={country} />
    <Box className="container w-1000 px-4 py-8" sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
      <Typography variant="h5" className="mb-5 font-bold flex items-center gap-2" sx={{fontWeight: 600, fontSize: "20px", color: "grey"}}>
         {activities[country].title}
      </Typography>

      <Navbar />
      
      {activities[country].map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
      ))}
    </Box>
    </Box>
  );
};

export default ThingsToDoInDubai;
