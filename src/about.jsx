import { Typography, Button, Card, CardContent, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const locations = [
  {
    city: "Jaipur, India",
    address: "Sitapura Industrial Area, Sitapura, Jaipur, Rajasthan, 302022",
    icon: "/images/jaipur.PNG", // Replace with actual icon
  },
  {
    city: "Dubai, UAE",
    address: "Dubai Silicon Oasis, DDP, Building A, Dubai, United Arab Emirates",
    icon: "/images/dubai.PNG", // Replace with actual icon
  },
  {
    city: "Delaware, USA",
    address:
      "Suite 403-B, 1013 Centre Road, Wilmington, New Castle, Delaware, 19805-1270",
    icon: "/images/delware.PNG", // Replace with actual icon
  },
];




const HeroSection = () => {
  return (
    <div>
      {/* Shaping the Future of Travel Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 md:px-20">
        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
          <Typography variant="subtitle1" className="text-gray-500 font-semibold">
            Fast Booking Anytime
          </Typography>
          <Typography variant="h2" className="font-bold leading-tight mt-2" sx={{color: "grey", fontSize: "60px", fontWeight: "800"}}>
            Shaping the <span style={{color: "#049a9b"}}>Future Of Travel!</span>
          </Typography>
          <Typography variant="body1" className="text-gray-600 mt-2">
            Changing The Way People Travel The World
          </Typography>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="./images/globe.PNG" alt="Globe" className="w-72 md:w-96" />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6 md:px-20 py-10">
        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
          <Typography variant="h3" className="font-bold leading-tight text-gray-800">
            Our <span style={{color: "#049a9b"}}>Mission</span>
          </Typography>
          <Typography variant="body1" className="text-gray-600 mt-4">
            At Fast Booking Anytime, we're on a grand quest to transform the landscape of travel experiences.
            Our aspiration goes beyond destinations—we endeavor to spark passion, carve everlasting memories,
            and lead the way in crafting adventures that echo in the hearts of every explorer.
          </Typography>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/images/logo.jpg" alt="Founders" className="w-80 md:w-96" />
        </div>
      </div>

      {/* Architects of Experiences Section */}
      <div className="bg-white px-6 md:px-20 py-10 text-center">
        <Typography variant="h3" className="font-bold leading-tight" sx={{color: "grey", fontSize: "30px", fontWeight: "800", textAlign: "left"}}>
          Meet the <span style={{color: "#049a9b"}}>Architects of Experiences</span>
        </Typography>
        <Typography variant="body1" className="text-gray-600 text-left mt-2">
          We are a power-packed tribe of <span className="font-bold" style={{color: "#049a9b"}}>800+</span> extraordinarily talented & passionate professionals.
        </Typography>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8">
          {[
            { name: "Chitra Gurnani Daga", title: "CEO & Co-Founder", role: "The Show Runner", img: "/images/chitra.png" },
            { name: "Abhishek Daga", title: "Co-Founder", role: "The Idea Box", img: "/images/abhishek.png" },
            { name: "Tarun Dadlani", title: "Vice President - Growth", role: "Life of The Party", img: "/images/tarun.png" },
            { name: "Abhishek Puri", title: "Vice President - Growth", role: "Man City Fan", img: "/images/puri.png" },
            { name: "Rajdeep Mandrekar", title: "Head of Engineering", role: "The Poker Guy", img: "/images/rajdeep.png" },
            { name: "Girdhar Singh Sodha", title: "SEO Manager", role: "Heavy Driver", img: "/images/girdhar.png" },
            { name: "Ram Ratan Mishra", title: "Digital Marketing Manager", role: "Cognitive Maven", img: "/images/ram.png" },
            { name: "Chitransh Singh", title: "Associate Vice President", role: "The Off-Roader", img: "/images/chitransh.png" },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={member.img} alt={member.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-200" />
              <Typography variant="h6" className="font-semibold mt-2">{member.name}</Typography>
              <Typography variant="body2" className="text-gray-500">{member.role}</Typography>
              <Typography variant="body2" className="text-gray-400">{member.title}</Typography>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="flex flex-col items-center mt-8">
          <div style={{backgroundColor: "#049a9b"}} className=" text-white font-bold rounded-full w-32 h-32 flex items-center justify-center text-xl">
            See yourself here?
          </div>
          <Button 
            variant="outlined" 
            sx={{ mt: 2, borderColor: "#049a9b", color: "#049a9b", "&:hover": { backgroundColor: "#ffe5b4" } }}
          >
            Join Us!
          </Button>
        </div>
      </div>

      {/* In The Spotlight Section */}
      <div className="bg-gray-100 px-6 md:px-20 py-10">
        <Typography variant="h3" className="font-bold leading-tight text-center" sx={{color: "black"}}>
          In The <span style={{color: "#049a9b"}}>Spotlight</span>
        </Typography>
        <Typography variant="body1" className="text-gray-600 text-center mt-2">
          Explore What the World is Saying About Our Adventures and Experiences
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              logo: "THE WEEK",
              title: "A Tale of Success: 53 Takeoffs Organic Growth to Fast Booking Anytime Funding Saga",
              description:
                "53Takeoffs soared to become India’s leading multi-day tours company within three years, serving 800,000+ travelers in 2023. Reporting a turnover of 500+ crores & a 2.5x surge from the previous year, they also reclaimed control of their vision by buying back investor shares in Fast Booking Anytime.",
            },
            {
              logo: "mint",
              title: "An Audacious Journey of Fast Booking Anytime & 53 TakeOffs!",
              description:
                "This is the journey of a dynamic company whose post-COVID growth skyrocketed, expanding 8X from pre-pandemic days & its team size surged from 150 to 900. Fast Booking Anytime and 53 TakeOffs broadened their product lines, eyeing multi-billion-dollar status, 100 global brands & targeting 1000+ crores revenue in 2024.",
            },
            {
              logo: "The Telegraph online",
              title: "Fast Booking Anytime Trends to be One of the Most Popular Platforms to Book Tours",
              description:
                "Fast Booking Anytime has emerged as one of the leading platforms for booking tours, captivating travelers worldwide. Offering a vast array of handpicked tours and activities, the platform’s seamless user interface, secure payment system, and comprehensive customer support today ensure a hassle-free trip booking experience.",
            },
          ].map((item, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent>
                <Typography variant="h6" className="font-bold text-gray-800">{item.logo}</Typography>
                <Typography variant="subtitle1" className="font-semibold mt-2">{item.title}</Typography>
                <Typography variant="body2" className="text-gray-600 mt-2">{item.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="px-6 md:px-20 py-10 bg-white">
      <Grid container spacing={4} alignItems="center">
        {/* Left: Image */}
        <Grid item xs={12} md={6} className="flex justify-center">
          <img
            src="./images/takeoff.PNG"
            alt="53 Takeoffs Logo"
            className="w-64 md:w-80"
          />
        </Grid>

        {/* Right: Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className="font-bold mb-2">
            Building{" "}
            <span className="text-yellow-500">
              53 Takeoffs (53TO)
            </span>
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 mb-6">
            Taking Off Travel Experiences &amp; Technology to New Heights
          </Typography>

          <ul className="list-disc pl-5 space-y-4 text-gray-800 text-left">
            <li>
              <span className="font-bold text-yellow-500">
                53 Takeoffs (53TO)
              </span>
              , is a house of digital-first travel brands, focusing on becoming
              a powerful travel conglomerate by growing its tours vertical and
              incubating new travel brands.
            </li>
            <li>
              Currently catering to customers across 75+ countries, the firm is
              leveraging its proficiency in online travel, technology, consumer
              understanding and distribution. One thing that remains consistent
              across its brands is delivering the best travel experiences for
              the customers. The brands which are run as of now include
              Fast Booking Anytime, Couple Escapes, Rare Safaris and MyTravelPass.
            </li>
            <li>
              53TO is set to become a multi-billion dollar travel conglomerate
              in the next 5 years, with a mission to create 100+ sizable travel
              brands across the globe by 2027.
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  

    <div className="bg-white text-center px-4 md:px-20 py-14">
      <Typography variant="h5" className="font-semibold mb-10 uppercase">
        Our Presence
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {locations.map((loc, index) => (
          <Grid item xs={12} md={4} key={index}>
            <div className="flex flex-col items-center">
              <img
                src={loc.icon}
                alt={loc.city}
                className="h-24 w-24 mb-4"
              />
              <Typography variant="h6" className="font-semibold mb-2">
                {loc.city}
              </Typography>
              <Typography className="text-gray-600">{loc.address}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>

      {/* CTA Section */}
      <div className="bg-gray-100 mt-16 py-12 px-6 rounded-lg">
        <Typography
          variant="h5"
          className="font-bold mb-4 text-gray-800"
        >
          Let’s Build the Future of Travel,{" "}
          <span style={{color: "#049a9b"}}>TOGETHER!</span>
        </Typography>
        <Typography className="text-gray-600 max-w-3xl mx-auto mb-6">
          Fast Booking Anytime is not just a career opportunity; it is the breeding
          ground for fresh ideas, ambitious individuals, fast-paced culture &
          unrestricted growth. If you're ready to discover your potential, make
          a difference, and join a thrilling professional journey – choose us!
          Click the button crafted just for you, whether you're drawn to
          marketing, sales, tech or beyond—your adventure awaits!
        </Typography>
        <Button
          variant="contained"
          style={{backgroundColor: "#049a9b"}}
          className="text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Join Our team!
        </Button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HeroSection;
