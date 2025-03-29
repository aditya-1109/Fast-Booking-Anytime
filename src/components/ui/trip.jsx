import { useState } from "react";
import { Button, Tabs, Tab } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/dubai01.JPG",
  "/images/dubai02.JPG",
  "/images/dubai03.JPG",
];

export default function DubaiTrip() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const handleTabChange = (_, newValue) => setSelectedTab(newValue);
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-xl shadow-lg justify-start items-start">
      <h2 className="text-2xl font-bold mb-4">Trip Highlights</h2>
      <ul className="list-disc pl-0 space-y-2 text-gray-700">
        <li>Dive into a world of luxury, from pristine beaches to towering skyscrapers.</li>
        <li>Experience the 125th floor of Burj Khalifa with stunning city views.</li>
        <li>Feel the thrill of dune-bashing in Dubai’s golden desert.</li>
        <li>Enjoy a dhow cruise along the serene waters of Dubai Creek.</li>
      </ul>
      
      <Tabs value={selectedTab} onChange={handleTabChange} className="mt-6">
        <Tab label="Itinerary" />
        <Tab label="Summarised View" />
        <Tab label="Activities" />
        <Tab label="Flights" />
        <Tab label="Stay" />
        <Tab label="Transfers" />
      </Tabs>

      <div className="relative mt-6">
        <img
          src={images[currentImage]}
          alt="Dubai"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <ChevronLeft />
        </button>
        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}