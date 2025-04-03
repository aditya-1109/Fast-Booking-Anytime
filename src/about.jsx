import { Typography, Button, Card, CardContent } from "@mui/material";

const HeroSection = () => {
  return (
    <div>
      {/* Shaping the Future of Travel Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 md:px-20">
        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
          <Typography variant="subtitle1" className="text-gray-500 font-semibold">
            THRILLOPHILIA
          </Typography>
          <Typography variant="h2" className="font-bold leading-tight mt-2">
            Shaping the <span className="text-orange-500">Future Of Travel!</span>
          </Typography>
          <Typography variant="body1" className="text-gray-600 mt-2">
            Changing The Way People Travel The World
          </Typography>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/images/globe.png" alt="Globe" className="w-72 md:w-96" />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6 md:px-20 py-10">
        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
          <Typography variant="h3" className="font-bold leading-tight text-gray-800">
            Our <span className="text-orange-500">Mission</span>
          </Typography>
          <Typography variant="body1" className="text-gray-600 mt-4">
            At Fast Booking Anytime, we're on a grand quest to transform the landscape of travel experiences.
            Our aspiration goes beyond destinations—we endeavor to spark passion, carve everlasting memories,
            and lead the way in crafting adventures that echo in the hearts of every explorer.
          </Typography>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/images/founders.png" alt="Founders" className="w-80 md:w-96" />
        </div>
      </div>

      {/* Architects of Experiences Section */}
      <div className="bg-white px-6 md:px-20 py-10 text-center">
        <Typography variant="h3" className="font-bold leading-tight">
          Meet the <span className="text-orange-500">Architects of Experiences</span>
        </Typography>
        <Typography variant="body1" className="text-gray-600 mt-2">
          We are a power-packed tribe of <span className="font-bold text-orange-500">800+</span> extraordinarily talented & passionate professionals.
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
          <div className="bg-orange-500 text-white font-bold rounded-full w-32 h-32 flex items-center justify-center text-xl">
            See yourself here?
          </div>
          <Button 
            variant="outlined" 
            sx={{ mt: 2, borderColor: "orange", color: "orange", "&:hover": { backgroundColor: "#ffe5b4" } }}
          >
            Join Us!
          </Button>
        </div>
      </div>

      {/* In The Spotlight Section */}
      <div className="bg-gray-100 px-6 md:px-20 py-10">
        <Typography variant="h3" className="font-bold leading-tight text-center">
          In The <span className="text-orange-500">Spotlight</span>
        </Typography>
        <Typography variant="body1" className="text-gray-600 text-center mt-2">
          Explore What the World is Saying About Our Adventures and Experiences
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              logo: "THE WEEK",
              title: "A Tale of Success: 53 Takeoffs Organic Growth to Thrillophilia’s Funding Saga",
              description:
                "53Takeoffs soared to become India’s leading multi-day tours company within three years, serving 800,000+ travelers in 2023. Reporting a turnover of 500+ crores & a 2.5x surge from the previous year, they also reclaimed control of their vision by buying back investor shares in Thrillophilia.",
            },
            {
              logo: "mint",
              title: "An Audacious Journey of Thrillophilia & 53 TakeOffs!",
              description:
                "This is the journey of a dynamic company whose post-COVID growth skyrocketed, expanding 8X from pre-pandemic days & its team size surged from 150 to 900. Thrillophilia and 53 TakeOffs broadened their product lines, eyeing multi-billion-dollar status, 100 global brands & targeting 1000+ crores revenue in 2024.",
            },
            {
              logo: "The Telegraph online",
              title: "Thrillophilia Trends to be One of the Most Popular Platforms to Book Tours",
              description:
                "Thrillophilia has emerged as one of the leading platforms for booking tours, captivating travelers worldwide. Offering a vast array of handpicked tours and activities, the platform’s seamless user interface, secure payment system, and comprehensive customer support today ensure a hassle-free trip booking experience.",
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
      </div>
    </div>
  );
};

export default HeroSection;
