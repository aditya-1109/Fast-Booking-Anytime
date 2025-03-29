import React, { useState } from "react";
import { Button, Rating, Select, MenuItem, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaPlaneDeparture } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DubaiTrip from "./components/ui/trip";
import PackageDetails from "./components/ui/detail";
import Footer from "./footer";
import Header from "./components/ui/header";

const DubaiTourPage = () => {
  const { title } = useParams();
  console.log(title);

  // States
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [selectedStay, setSelectedStay] = useState("Standard");
  const [tabValue, setTabValue] = useState(0);

  // Trip durations & prices
  const tripDurations = [
    { days: 3, price: 33309 },
    { days: 4, price: 37950 },
    { days: 5, price: 68550 },
    { days: 6, price: 40930 },
    { days: 7, price: 57999 },
  ];

  const itinerary = [
    { day: "Day 1", title: "Arrival in Dubai" },
    { day: "Day 2", title: "Marina Dhow Dinner Cruise Tour" },
    { day: "Day 3", title: "Dubai Sightseeing Tour | Dubai Desert Safari" },
    { day: "Day 4", title: "Visit to Burj Khalifa" },
    { day: "Day 5", title: "Departure Day" },
  ];

  return (
    <>
    <Header />
    <div className="relative w-full mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white">
        
      {/* Main Image & Thumbnails */}
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/dubai04.jpg" alt="Dubai" className="rounded-lg w-full h-96 object-cover" />
        <div className="grid grid-rows-2 gap-2">
          <img src="/images/dubai03.JPG" alt="Dubai Night" className="rounded-lg w-full h-48 object-cover" />
          <img src="/images/dubai05.jpg" alt="Dubai Hotel" className="rounded-lg w-full h-48 object-cover" />
        </div>
      </div>

      {/* Tour Title */}
      <h2 className="mt-4 text-2xl font-bold">Escape to Dubai | Flights Inclusive Deal</h2>
      <p className="text-gray-600">{selectedDuration}D/{selectedDuration - 1}N • {selectedDuration} Days in Dubai</p>

      {/* Icons */}
      <div className="flex items-center space-x-4 my-2 text-gray-600">
        <span className="flex items-center gap-1"><FaPlaneDeparture /> Transfer Included</span>
        <span className="flex items-center gap-1">🏨 Stay Included</span>
        <span className="flex items-center gap-1">🍽️ Breakfast Included</span>
      </div>

      {/* Trip Duration Selection */}
      <h3 className="mt-4 text-lg font-semibold">Choose Trip Duration</h3>
      <div className="flex space-x-3 mt-2">
        {tripDurations.map((trip) => (
          <button
            key={trip.days}
            className={`px-3 py-2 rounded-md border ${selectedDuration === trip.days ? "bg-orange-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedDuration(trip.days)}
          >
            {trip.days} days<br /><span className="text-sm">₹ {trip.price}</span>
          </button>
        ))}
      </div>

      {/* Destination Routes Dropdown */}
      <h3 className="mt-4 text-lg font-semibold">Destination Routes</h3>
      <Select value="Dubai" className="w-full mt-2">
        <MenuItem value="Dubai">Dubai</MenuItem>
      </Select>

      {/* Stay Category */}
      <h3 className="mt-4 text-lg font-semibold">Stay Category</h3>
      <div className="flex space-x-3 mt-2">
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

      {/* Price & Booking */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold text-green-600">
          INR {tripDurations.find((trip) => trip.days === selectedDuration)?.price} <span className="line-through text-gray-400 text-sm">INR 1,24,761</span>
        </p>
        <Rating value={4.8} precision={0.1} readOnly /> <span className="text-gray-600">(46.5k)</span>
        <Button variant="contained" color="warning" className="bg-orange-500 text-white">Send Enquiry</Button>
      </div>

      {/* Tabs Section */}
      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className="bg-white shadow-md rounded-lg mt-6" variant="scrollable" scrollButtons="auto">
        <Tab label="Itinerary" />
        <Tab label="Summarized View" />
        <Tab label="Activities" />
        <Tab label="Flights" />
        <Tab label="Stay" />
        <Tab label="Transfers" />
      </Tabs>

      <DubaiTrip />
      {/* Itinerary Section */}
      {tabValue === 0 && (
        <div className="mt-6">
          {itinerary.map((item, index) => (
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
      <PackageDetails />
      <Footer className="mt-20"/>
    </div>
    </>
  );
};

export default DubaiTourPage;
