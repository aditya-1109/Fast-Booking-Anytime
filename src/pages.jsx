import React, { useState, useEffect, useRef } from "react";
import { Button, Rating, Card, TextField, Select, MenuItem, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaPlaneDeparture } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pagesData } from "./data";


const DubaiTourPage = () => {
  const { tittle , country} = useParams();
  console.log(tittle,country);

  // States
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [selectedStay, setSelectedStay] = useState("Standard");
  const [tabValue, setTabValue] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [dataa, setData]= useState(null);
    const leftRef = useRef(null);
  const [isLeftVisible, setIsLeftVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsLeftVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (leftRef.current) {
      observer.observe(leftRef.current);
    }
    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
    };
  }, []);
    
    
    useEffect(() => {
  if (country && tittle) {
  
    setData(pagesData[country].places[tittle]);
  }
}, [country, tittle]);


  console.log(dataa?.images)
    const handleTabChange = (_, newValue) => setSelectedTab(newValue);
    const prevImage = () => setCurrentImage((prev) => (prev === 0 ? dataa.tittle?.belowImages.length - 1 : prev - 1));
    const nextImage = () => setCurrentImage((prev) => (prev === dataa.tittle?.belowImages.length - 1 ? 0 : prev + 1));
  
    
  return (
    <>
  
    <div className="relative w-full mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white" style={{width:"100vw"}}>

      {Array.isArray(dataa?.images) && dataa.images.length >= 3 && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Large Left Image */}
    <img
      src={dataa.images[0]}
      alt="Main"
      className="rounded-lg w-full h-64 md:h-96 object-cover"
    />

    {/* Two Smaller Right Images */}
    <div className="grid grid-rows-2 gap-2">
      <img
        src={dataa.images[1]}
        alt="Top Right"
        className="rounded-lg w-full h-32 md:h-48 object-cover"
      />
      <img
        src={dataa.images[2]}
        alt="Bottom Right"
        className="rounded-lg w-full h-32 md:h-48 object-cover"
      />
    </div>
  </div>
)}

<div className="w-full flex flex-col md:flex-row gap-6">
<div ref={leftRef} className="w-full md:w-[70%] flex flex-col">
      <h2 className="mt-4 text-xl md:text-2xl font-bold text-center md:text-left">Escape to Dubai | Flights Inclusive Deal</h2>
      <p className="text-gray-600 text-center md:text-left">{selectedDuration}D/{selectedDuration - 1}N • {selectedDuration} Days in Dubai</p>

      <div className="flex flex-wrap items-center space-x-4 my-2 text-gray-600 justify-center md:justify-start">
        <span className="flex items-center gap-1"><FaPlaneDeparture /> Transfer Included</span>
        <span className="flex items-center gap-1">🏨 Stay Included</span>
        <span className="flex items-center gap-1">🍽️ Breakfast Included</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold">Choose Trip Duration</h3>
      <div className="flex flex-wrap gap-3 mt-2">
        {dataa?.tripDurations.map((trip) => (
          <button
            key={trip.days}
            className={`px-3 py-2 rounded-md border ${selectedDuration === trip.days ? "bg-[rgba(4,154,155,255)]-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedDuration(trip.days)}
          >
            {trip.days} days<br /><span className="text-sm">₹ {trip.price}</span>
          </button>
        ))}
      </div>

      <h3 className="mt-4 text-lg font-semibold">Destination Routes</h3>
      <Select value="Dubai" className="w-full mt-2">
        <MenuItem value="Dubai">Dubai</MenuItem>
      </Select>

      <h3 className="mt-4 text-lg font-semibold">Stay Category</h3>
      <div className="flex flex-wrap gap-3 mt-2">
        {["Standard", "Deluxe", "Luxury"].map((category) => (
          <button
            key={category}
            className={`px-3 py-2 rounded-md border ${selectedStay === category ? "bg-[rgba(4,154,155,255)]-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedStay(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center mt-4">
        <p className="text-lg font-semibold text-green-600">
          INR {dataa?.tripDurations.find((trip) => trip.days === selectedDuration)?.price} 
          <span className="line-through text-gray-400 text-sm">INR 1,24,761</span>
        </p>
        <div className="flex items-center">
          <Rating value={4.8} precision={0.1} readOnly /> <span className="text-gray-600">(46.5k)</span>
        </div>
        <Button variant="contained" color="warning" sx={{backgroundColor:"rgba(4,154,155,255)" }} className="text-white">Send Enquiry</Button>
      </div>

      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className="bg-white shadow-md rounded-lg mt-6" variant="scrollable" scrollButtons="auto">
        <Tab label="Itinerary" />
        <Tab label="Summarized View" />
        <Tab label="Activities" />
        <Tab label="Flights" />
        <Tab label="Stay" />
        <Tab label="Transfers" />
      </Tabs>

      <div className="w-full mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Trip Highlights</h2>
        {dataa?.trip.map((trips, index) => (
          <ul key={index} className="list-disc pl-0 space-y-2 text-left text-gray-700">
            <li>{trips}</li>
          </ul>
        ))}

        <div className="relative mt-6">
          <img src={dataa?.images[currentImage]} alt="Dubai" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" />
          <button onClick={prevImage} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white p-3 md:p-2 rounded-full shadow-md">
            <ChevronLeft />
          </button>
          <button onClick={nextImage} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white p-3 md:p-2 rounded-full shadow-md">
            <ChevronRight />
          </button>
        </div>
      </div>

      {tabValue === 0 && (
        <div className="mt-6">
          {dataa?.itinerary.map((item, index) => (
            <Accordion key={index} className="mb-4 bg-white shadow-md">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-bold">
                <span className="text-[rgba(4,154,155,255)]-500 px-4 py-2 rounded-full bg-[rgba(4,154,155,255)] mr-2">{item.day}</span>
                {item.title}
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-gray-600">Details about {item.title}...</p>
              </AccordionDetails>
            </Accordion>
          ))}
          <h2 className="text-center text-2xl font-bold text-[rgba(4,154,155,255)]-500 mt-6">End Of Trip</h2>
        </div>
      )}

      <div className="relative p-6 bg-white w-full shadow-lg rounded-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">What’s inside the package?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Inclusions ✅</h3>
            <ul className="list-none space-y-2">
              {dataa?.inclusions.map((item, index) => (
                <li key={index} className="flex items-left">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-gray-800 text-left">{item}</span>
              </li>
              
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Exclusions ❌</h3>
            <ul className="list-none space-y-2">
              {dataa?.exclusions.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-red-500 mr-2">✖</span> <span className="text-gray-800 text-left">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>

      <div
        className={`w-full md:w-[25%] ${
          isLeftVisible ? "sticky top-4" : ""
        } self-start`}
      >
      <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl">
        <div className="mb-4">
        
          <div className="flex items-center flex-col justify-between mt-2">
            <div>
              <span className="text-xl font-semibold text-orange-600" style={{fontWeight: "700"}}>{dataa?.poster.price}</span>
              <span className="text-sm line-through text-gray-500 ml-2">{dataa?.poster.originalPrice}</span>
              <div className="text-xs text-green-600 ml-2 bg-green-100 px-2 py-1 rounded">{dataa?.poster.discount}</div>
            </div>
            <div className="text-green-600 font-semibold text-sm">★ 4.8 (167)</div>
          </div>
        </div>

        <form className="space-y-4">
          <TextField label="Full Name" variant="outlined" fullWidth required />
          <TextField label="Email" variant="outlined" fullWidth required />
          <TextField label="Phone" variant="outlined" fullWidth required />
          <TextField label="Travel Date" type="date" InputLabelProps={{ shrink: true }} fullWidth required />
          <TextField label="Traveller Count" type="number" variant="outlined" fullWidth required />
          <TextField label="Message" variant="outlined" multiline rows={3} fullWidth />

          <Button variant="contained" color="warning" fullWidth className="!mt-4">
            Send Enquiry
          </Button>
        </form>
      </Card>
    </div>
    </div>


    </div>
</>

  );
};

export default DubaiTourPage;
