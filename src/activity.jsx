import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button,Grid, Chip, Box, Select } from "@mui/material";
import { FaStar } from "react-icons/fa";
import Navbar from "./components/ui/navbar";
import ImageSlider from "./slider";
import { useParams } from "react-router-dom";
import { pagesData } from "./data";



const ActivityCard = ({ activity }) => {

 
console.log(activity.poster.image)
  return (
    <Card className="shadow-lg rounded-xl mb-6 w-full md:w-3/4 lg:w-4/5 ">
      <div className="flex flex-col md:flex-row">
        
        <CardMedia
          component="img"
          height="200"
          image={activity?.poster.image?.replace('./', '/')}
          alt={activity.poster.title}
          className="h-48 w-48"
        />
        <CardContent className="md:w-9/10 p-4">
          <Typography variant="h6" className="font-bold">
            {activity.poster.title}
          </Typography>
          {/* <Box className="flex flex-wrap gap-2 mt-2">
            {activity.tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" className="bg-gray-200" />
            ))}
          </Box> */}
          <Typography variant="body2" color="text.secondary" className="mt-2">
            {activity.about}
          </Typography>
          <Typography className="mt-2 text-green-600 font-bold flex items-center">
            <FaStar className="text-yellow-500 mr-1" /> {activity.poster.rating} ({activity.poster.reviews})
          </Typography>
          <Typography variant="body1" className="mt-2 font-semibold">
            <span className="line-through text-gray-500">INR {activity.poster.originalPrice}</span> INR {activity.poster.price}
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


  const {country}= useParams();

  const [dataa, setData]= useState([]);

  useEffect(()=>{
    const newData= Object.values(pagesData[country].places);
    setData(newData);
  },[country])


  
  return (
    <Box 
  sx={{ 
    display: "flex", 
    position: "relative", 
    justifyContent: "flex-start", 
    width: "100vw", 
    left: 0, 
    top: 0, 
    flexDirection: "column", 
    alignItems: "flex-start" 
  }}
>
  
  <ImageSlider country={country} />

  <Box 
    className="container px-4 py-8"
    sx={{ 
      width: "100%", 
      maxWidth: "1200px", 
      margin: "0 auto", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "flex-start", 
      alignItems: "flex-start" 
    }}
  >
    <Typography 
      variant="h5" 
      className="mb-5 font-bold flex items-center gap-2"
      sx={{ 
        fontWeight: 600, 
        fontSize: { xs: "16px", sm: "18px", md: "20px" }, 
        color: "grey" 
      }}
    >
   
    </Typography>

    <Navbar />

    <Grid 
      container 
      spacing={3} 
      sx={{ 
        width: "100%", 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center" 
      }}
    >
      {dataa?.map((activity, index) => (
        <Grid item xs={12} sm={6} md={12} key={index}>
          <ActivityCard activity={activity} />
        </Grid>
      ))}
    </Grid>
  </Box>
</Box>

  );
};

export default ThingsToDoInDubai;
