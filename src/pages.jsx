import React, { useState, useEffect } from "react";
import { Button, Rating, Select, MenuItem, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaPlaneDeparture } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Footer from "./footer";
import Header from "./components/ui/header";
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
    const [dataa, setData]= useState("");
    
    
    useEffect(()=>{
      setData(pagesData[country])
    },[country])
  
    const handleTabChange = (_, newValue) => setSelectedTab(newValue);
    const prevImage = () => setCurrentImage((prev) => (prev === 0 ? dataa.tittle?.belowImages.length - 1 : prev - 1));
    const nextImage = () => setCurrentImage((prev) => (prev === dataa.tittle?.belowImages.length - 1 ? 0 : prev + 1));

    
  return (
    <>
    <Header />
    <div className="relative w-full mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={dataa[tittle]?.images[0]} alt="Dubai" className="rounded-lg w-full h-64 md:h-96 object-cover" />
        <div className="grid grid-rows-2 gap-2">
          <img src={dataa[tittle]?.images[1]} alt="Dubai Night" className="rounded-lg w-full h-32 md:h-48 object-cover" />
          <img src={dataa[tittle]?.images[2]} alt="Dubai Hotel" className="rounded-lg w-full h-32 md:h-48 object-cover" />
        </div>
      </div>

      <h2 className="mt-4 text-xl md:text-2xl font-bold text-center md:text-left">Escape to Dubai | Flights Inclusive Deal</h2>
      <p className="text-gray-600 text-center md:text-left">{selectedDuration}D/{selectedDuration - 1}N • {selectedDuration} Days in Dubai</p>

      <div className="flex flex-wrap items-center space-x-4 my-2 text-gray-600 justify-center md:justify-start">
        <span className="flex items-center gap-1"><FaPlaneDeparture /> Transfer Included</span>
        <span className="flex items-center gap-1">🏨 Stay Included</span>
        <span className="flex items-center gap-1">🍽️ Breakfast Included</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold">Choose Trip Duration</h3>
      <div className="flex flex-wrap gap-3 mt-2">
        {dataa[tittle]?.tripDurations.map((trip) => (
          <button
            key={trip.days}
            className={`px-3 py-2 rounded-md border ${selectedDuration === trip.days ? "bg-orange-500 text-white" : "bg-gray-100"}`}
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
            className={`px-3 py-2 rounded-md border ${selectedStay === category ? "bg-orange-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedStay(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center mt-4">
        <p className="text-lg font-semibold text-green-600">
          INR {dataa[tittle]?.tripDurations.find((trip) => trip.days === selectedDuration)?.price} 
          <span className="line-through text-gray-400 text-sm">INR 1,24,761</span>
        </p>
        <div className="flex items-center">
          <Rating value={4.8} precision={0.1} readOnly /> <span className="text-gray-600">(46.5k)</span>
        </div>
        <Button variant="contained" color="warning" className="bg-orange-500 text-white">Send Enquiry</Button>
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
        {dataa[tittle]?.trip.map((trips, index) => (
          <ul key={index} className="list-disc pl-0 space-y-2 text-gray-700">
            <li>{trips}</li>
          </ul>
        ))}

        <div className="relative mt-6">
          <img src={dataa[tittle]?.belowImages[currentImage]} alt="Dubai" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md" />
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
          {dataa[tittle]?.itinerary.map((item, index) => (
            <Accordion key={index} className="mb-4 bg-white shadow-md">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-bold">
                <span className="text-orange-500 px-4 py-2 rounded-full bg-orange-100 mr-2">{item.day}</span>
                {item.title}
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-gray-600">Details about {item.title}...</p>
              </AccordionDetails>
            </Accordion>
          ))}
          <h2 className="text-center text-2xl font-bold text-orange-500 mt-6">End Of Trip</h2>
        </div>
      )}

      <div className="relative p-6 bg-white w-full shadow-lg rounded-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">What’s inside the package?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Inclusions ✅</h3>
            <ul className="list-none space-y-2">
              {dataa[tittle]?.inclusions.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Exclusions ❌</h3>
            <ul className="list-none space-y-2">
              {dataa[tittle]?.exclusions.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-red-500 mr-2">✖</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer className="mt-20"/>
    </div>
</>

  );
};

export default DubaiTourPage;
