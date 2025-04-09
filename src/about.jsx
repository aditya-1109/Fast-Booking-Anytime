import { Typography, Button, Card, CardContent, Grid } from "@mui/material";
import VisitorReviews from "./components/video";
import { useNavigate } from "react-router-dom";


const locations = [
  {
    city: "Delhi, India",
    address: "A 28 najafgarh road uttam nagar metro piller no 644, Delhi, 110059",
    icon: "/images/jaipur.PNG", 
  
  },
 
];




const HeroSection = () => {

  const navigate= useNavigate();
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
            About <span style={{color: "#049a9b"}}>Us</span>
          </Typography>
          <Typography variant="body1" className="text-gray-600 mt-4">
          Welcome to Fast Booking Anytime, your trusted partner in travel for over 8 years. With a proud legacy of delivering exceptional travel experiences, we have served 15,000+ happy customers and continue to grow through trust, value, and a commitment to excellence.

          </Typography>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/images/logo.png" alt="Founders" className="w-80 md:w-96" />
        </div>
      </div>

      {/* Architects of Experiences Section */}
      <div className="bg-white px-6 md:px-20 py-10 text-center">
  <Typography
    variant="h3"
    className="font-bold leading-tight"
    sx={{
      color: "grey",
      fontSize: "30px",
      fontWeight: "800",
      textAlign: "center",
    }}
  >
    Our <span style={{ color: "#049a9b" }}>Founder</span>
  </Typography>

  <img
    src="/images/founder.jpg"
    alt="Founder & CEO"
    style={{ width: "200px" }}
    className="mx-auto my-4"
  />

  <Typography
    variant="h5"
    className="font-bold leading-tight"
    sx={{
      color: "grey",
      fontSize: "20px",
      fontWeight: "500",
      textAlign: "center",
    }}
  >
    Mr. Bala Saxena
  </Typography>

  <Typography variant="body1" className="text-gray-600 text-center mt-2">
    our visionary CEO
  </Typography>
</div>


      {/* In The Spotlight Section */}
      <div className="bg-gray-100 px-6 md:px-20 py-10">
        <Typography variant="h3" className="font-bold leading-tight text-center" sx={{color: "black"}}>
          Our <span style={{color: "#049a9b"}}>Services</span>
        </Typography>
        <Typography variant="body1" className="text-gray-600 text-center mt-2">
        Fast Booking Anytime was established with a clear mission — to make travel easy, affordable, and personalized. Today, we specialize in a wide range of travel services including:


        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
  {[
    {
      logo: "Luxury Holiday Packages",
      title: "Luxury Escapes Redefined: Fast Booking Anytime's Rise in Premium Holiday Experiences",
      description:
        "Fast Booking Anytime has transformed the luxury travel segment by curating exclusive holiday packages that blend comfort, style, and personalized service. With 5-star accommodations, elite itineraries, and white-glove support, the company is setting a new benchmark in premium travel across India and abroad.",
    },
    {
      logo: "Five-Star Hotel Bookings",
      title: "Where Comfort Meets Class: Revolutionizing Five-Star Hotel Bookings",
      description:
        "Fast Booking Anytime has streamlined the process of booking five-star hotels with unbeatable deals, real-time availability, and personalized concierge service. Trusted by thousands of luxury travelers, the platform partners with top hotel chains worldwide to deliver unmatched stay experiences.",
    },
    {
      logo: "Domestic and International Tour Packages",
      title: "Globetrotting Made Easy: Fast Booking Anytime’s Tour Packages Take Off",
      description:
        "From the beaches of Bali to the palaces of Rajasthan, Fast Booking Anytime offers curated domestic and international tour packages for every kind of traveler. With flexible itineraries, expert guides, and exceptional value, they make world-class travel accessible and unforgettable.",
    },
    {
      logo: "Group Tours for Students and Corporate",
      title: "Empowering Group Travel: Fast Booking Anytime Leads in Student & Corporate Tours",
      description:
        "Specializing in large group coordination, Fast Booking Anytime delivers seamless travel planning for student excursions and corporate retreats. With cost-effective packages, safety-first planning, and tailored experiences, they’ve become the go-to partner for group travel in India and beyond.",
    }
  ].map((item, index) => (
    <Card key={index} className="shadow-lg w-full">
      <CardContent>
        <Typography variant="h6" className="font-bold text-gray-800">
          {item.logo}
        </Typography>
        <Typography variant="subtitle1" className="font-semibold mt-2">
          {item.title}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mt-2">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  ))}
</div>


      

    <div className="bg-gray-100 py-16 px-4 md:px-20 rounded-2xl mt-16">
      
    <Typography variant="h5" className="font-semibold mb-10 uppercase" sx={{color:"#049a9b", fontWeight: "700", fontSize: "30px"}}>
        Visitors Reviews Section
      </Typography>
      <VisitorReviews />
    </div>
  

    <div className="bg-white text-center px-4 md:px-20 py-14">
      <Typography variant="h5" className="font-semibold mb-10 uppercase" sx={{color:"#049a9b", fontWeight: "700", fontSize: "30px"}}>
        Our Presence
      </Typography>

      <Grid container spacing={6} justifyContent="center" className="mt-20">
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
      <div className="bg-gray-100 mt-16 py-12 px-6 rounded-lg flex flex-col items-center text-center">
  <Typography
    variant="h5"
    className="font-bold mb-4 text-gray-800"
  >
    Let us take you{" "}
    <span style={{ color: "#049a9b" }}>places!</span>
  </Typography>

  <Typography className="text-gray-600 max-w-3xl mb-6">
    Whether you're planning a family vacation, a business retreat, or a large student tour, we ensure seamless coordination, unbeatable prices, and personalized support — without the wait. Our dedicated team takes pride in creating tailored travel experiences that match your needs and budget.
  </Typography>

  <Button
    variant="contained"
    style={{ backgroundColor: "#049a9b" }}
    onClick={() => navigate("/We Are Hiring")}
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
