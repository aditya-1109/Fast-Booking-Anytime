import React from 'react';
import { Button } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import CareersSection from './components/ui/careerFoot';
import {Typography} from "@mui/material";

const Careers = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h2 className="text-sm tracking-widest font-semibold text-orange-200 mb-2">CAREERS</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Make Fast Booking Anytime <br />
            your next <br />
            destination
          </h1>
          <p className="text-md md:text-lg text-gray-200 mb-6 max-w-xl">
            We believe in a career that is just as adventurous as the trips we take.
          </p>
          <Button
            variant="contained"
            color="error"
            className="rounded-full px-6 py-2 text-lg"
            style={{ backgroundColor: '#ff0050' }}
          >
            TAKE ME PLACES
          </Button>

          <ArrowDownward className="mt-10 text-white animate-bounce" />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 bg-white text-gray-900">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-orange-600 font-semibold text-sm mb-3">WE’RE ON A MISSION OF</p>
          <h2 className="text-4xl md:text-5xl text-left font-bold mb-6 leading-tight">
            Changing the way the world experiences the world
          </h2>
          <p className="text-lg text-left  text-gray-700 mb-4">
            Fast Booking Anytime started in 2019 with an intention that continues to inspire us more than a decade later. We want to help the world travel farther and better. Every day, we strive to bring new adventures to our community and work towards making each experience they have with us memorable.
          </p>
          <p className="text-lg text-left text-gray-700">
            As we continue to grow, we are eager to expand our family with adventurers who are keen on taking up new challenges head-on. If you’re one such braveheart who wishes to learn, explore, and grow with us, come join us!
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/sport.JPG"
            alt="The Adventure People"
            className="rounded-lg max-w-full"
          />
        </div>

      </div>
      <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-orange-600 font-semibold text-sm mb-3">At heart</p>
          <h2 className="text-4xl text-left  md:text-5xl font-bold mb-6 leading-tight">
              We’re the Adventure People
          </h2>
          <p className="text-lg text-left  text-gray-700 mb-4">
          We work hard, we play hard, and in whatever we do, we give it our all. Three values drive us to do more and be more. First is a passion for adventure, which drives us to expand the horizons for us and our community alike. Then comes integrity, a guiding light for our relationships at work, with ourselves, and all in between. Finally, we give our all to succeed the expectations of our travellers and adventure seekers.</p>
        </div>

        <div className="text-center px-4 py-12 bg-white">
        <Typography variant="h3" className="font-bold text-left text-gray-400 mb-4" sx={{fontWeight: "800"}}>
          Excited to take the joyride?
        </Typography>
        <Typography variant="body1" className="text-gray-500 text-left max-w-xl mx-auto">
          We're always searching for amazing people to join our team. Take a look at our current opening roles.
        </Typography>
      </div>

        <CareersSection />

    </div>
  );
};

export default Careers;
