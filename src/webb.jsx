import React from "react";
import { FaSearch, FaStar, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import MenuBar from "./components/ui/menu";
import Footer from "./footer";

const DestinationSection = ({ title, destinations }) => (
  <section className="p-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Button variant="text" color="warning">View All ➜</Button>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-4">
      {destinations.map((dest, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
          <img src={dest.image} alt={dest.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-gray-500 text-sm">{dest.days}</p>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <FaStar /> {dest.rating} ({dest.reviews})
            </div>
            <h3 className="text-md font-semibold mt-1">{dest.title}</h3>
            <p className="text-xs mt-2 bg-gray-100 p-1 inline-block rounded-md">{dest.duration}</p>

            {/* Price Section */}
            <div className="mt-3">
              <p className="text-lg font-bold text-gray-800">{dest.price}</p>
              <p className="text-sm line-through text-gray-500">{dest.originalPrice}</p>
              <p className="text-green-600 text-sm font-semibold">{dest.discount}</p>
            </div>

            {/* Call and Callback Buttons */}
            <div className="flex gap-3 mt-3">
              <Button variant="outlined" startIcon={<FaPhoneAlt />} color="warning">Call</Button>
              <Button variant="contained" color="warning">Request Callback</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);


const destinationsByCountry = 
  {Dubai: [{
    image: "./images/singapore01.jpg",
    days: "5 days & 4 nights",
    rating: "5.0",
    reviews: "1.2k",
    title: "Escape To Dubai | Flights Inclusive Deal",
    duration: "5D Dubai",
    price: "INR 68,550",
    originalPrice: "INR 124,761",
    discount: "SAVE INR 56,211",
  },
  {
    image: "./images/singapore02.jpg",
    days: "7 days & 6 nights",
    rating: "4.9",
    reviews: "1.6k",
    title: "Discovering Dubai | A Journey To The Golden Emirates",
    duration: "7D Dubai",
    price: "INR 86,000",
    originalPrice: "INR 111,836",
    discount: "SAVE INR 25,836",
  },
  {
    image: "./images/singapore03.jpg",
    days: "6 days & 5 nights",
    rating: "4.8",
    reviews: "425",
    title: "Dubai Kids Special With FREE Tickets To Aquaventure Waterpark",
    duration: "6D Dubai",
    price: "INR 68,750",
    originalPrice: "INR 91,437",
    discount: "SAVE INR 22,687",
  }],
  Singapoore:
  [{
    "image": "https://via.placeholder.com/300",
    "days": "7 days & 6 nights",
    "rating": "5.0",
    "reviews": "512",
    "title": "Singapore And Bali Honeymoon Bliss | City Romance To Tropical Retreat",
    "duration": "3D Singapore + 4D Kuta",
    "price": "INR 55,000",
    "originalPrice": "INR 84,616",
    "discount": "SAVE INR 29,616"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "5 days & 4 nights",
    "rating": "4.9",
    "reviews": "407",
    "title": "Best Of Singapore | FREE Universal Studio Tickets",
    "duration": "5D Singapore",
    "price": "INR 45,915",
    "originalPrice": "INR 79,860",
    "discount": "SAVE INR 33,945"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "7 days & 6 nights",
    "rating": "4.8",
    "reviews": "146",
    "title": "Singapore & Malaysia Trip | FREE Night Safari Experience",
    "duration": "3D Singapore + 4D Kuala Lumpur",
    "price": "INR 59,432",
    "originalPrice": "INR 99,261",
    "discount": "SAVE INR 39,829"
  }],
  
    Thai:[{
    "image": "https://via.placeholder.com/300",
    "days": "8 days & 7 nights",
    "rating": "4.8",
    "reviews": "2.1K",
    "title": "Bangkok Phuket Krabi | FREE 4 Island Tour In Krabi",
    "duration": "2D Bangkok + 3D Phuket + 3D Krabi",
    "price": "INR 43,990",
    "originalPrice": "INR 80,061",
    "discount": "SAVE INR 38,071"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "8 days & 7 nights",
    "rating": "4.7",
    "reviews": "1.8K",
    "title": "Wonders Of Thailand | Culture, Corals And Coastlines",
    "duration": "2D Pattaya + 2D Bangkok + 4D Phuket",
    "price": "INR 49,500",
    "originalPrice": "INR 60,200",
    "discount": "SAVE INR 10,700"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "6 days & 5 nights",
    "rating": "5.0",
    "reviews": "1.1K",
    "title": "Phuket Krabi | A Flights Inclusive DEAL",
    "duration": "2D Krabi + 4D Phuket",
    "price": "INR 64,900",
    "originalPrice": "INR 1,08,383",
    "discount": "SAVE INR 43,483"
  }],
   Bhutan: 
    [{"image": "https://via.placeholder.com/300",
    "days": "7 days & 6 nights",
    "rating": "4.5",
    "reviews": "30",
    "title": "Glimpse Of Bhutan | From Sacred Sites To Scenic Wonders",
    "duration": "1D Phuntsholing + 2D Thimphu City + 2D Paro + 1D F...",
    "price": "INR 45,950",
    "originalPrice": "INR 63,900",
    "discount": "SAVE INR 17,950"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "6 days & 5 nights",
    "rating": "5.0",
    "reviews": "200",
    "title": "Wonders Of Bhutan | FREE Excursion To Paro",
    "duration": "1D Phuntsholing + 1D Thimphu City + 1D Punakha + ...",
    "price": "INR 42,990",
    "originalPrice": "INR 55,999",
    "discount": "SAVE INR 13,009"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "8 days & 7 nights",
    "rating": "4.5",
    "reviews": "39",
    "title": "Experiential Bhutan | Free Gangtey Gompa Monastery Excursion",
    "duration": "1D Phuntsholing + 2D Thimphu City + 2D Punakha + ...",
    "price": "INR 48,299",
    "originalPrice": "INR 69,000",
    "discount": "SAVE INR 20,701"
  }],
   Bali: 
  [{
    "image": "https://via.placeholder.com/300",
    "days": "6 days & 5 nights",
    "rating": "4.8",
    "reviews": "925",
    "title": "Escape To Bali | Temple, Terraces And Tropical Shores",
    "duration": "2D Ubud + 4D Kuta",
    "price": "INR 59,750",
    "originalPrice": "INR 80,662",
    "discount": "SAVE INR 20,912"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "5 days & 4 nights",
    "rating": "4.8",
    "reviews": "742",
    "title": "Bali Couple Special | From Sacred Temples To Serene Shores",
    "duration": "2D Ubud + 2D Kuta + 1D Ubud",
    "price": "INR 27,800",
    "originalPrice": "INR 41,700",
    "discount": "SAVE INR 13,900"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "6 days & 5 nights",
    "rating": "4.7",
    "reviews": "906",
    "title": "Romantic Escape To Bali | From Hills To Horizon",
    "duration": "2D Ubud + 4D Kuta",
    "price": "INR 34,500",
    "originalPrice": "INR 46,575",
    "discount": "SAVE INR 12,075"
  }],
   USA:
  [{
    "image": "https://via.placeholder.com/300",
    "days": "13 days & 12 nights",
    "rating": "5.0",
    "reviews": "125",
    "title": "Best Of USA | Group Tour Package",
    "duration": "2D New York City + 2D Washington D.C. + 2D Niagara + 4 More",
    "price": "INR 3,30,000",
    "originalPrice": "INR 4,20,000",
    "discount": "SAVE INR 90,000"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "7 days & 6 nights",
    "rating": "5.0",
    "reviews": "115",
    "title": "USA Group Tour To California And Vegas",
    "duration": "2D Las Vegas + 1D Los Angeles + 1D Fresno + 3D San Francisco + 1 More",
    "price": "INR 1,65,120",
    "originalPrice": "INR 2,19,610",
    "discount": "SAVE INR 54,490"
  },
  {
    "image": "https://via.placeholder.com/300",
    "days": "7 days & 6 nights",
    "rating": "5.0",
    "reviews": "121",
    "title": "USA East Coast Treasures | Group Tour Package",
    "duration": "2D New York City + 2D Washington D.C. + 3D Niagara + 1 More",
    "price": "INR 1,55,768",
    "originalPrice": "INR 1,94,710",
    "discount": "SAVE INR 38,942"
  }]};

const ThrillophiliaClone = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <img src="./images/logo.jpg" className="w-32 h-32" />
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search for Bali"
            className="w-full p-2 pl-10 border rounded-full"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-sm">INR ₹</span>
          <Button variant="outlined" color="warning">
            Login
          </Button>
        </div>
      </header>

      <MenuBar />

      <div>
      {Object.entries(destinationsByCountry).map(([country, destinations]) => (
        <DestinationSection key={country} title={country} destinations={destinations} />
      ))}
    </div>

    <div className="mt-40">
    <Footer />
    </div>
    
    </div>
  );
};

export default ThrillophiliaClone;
