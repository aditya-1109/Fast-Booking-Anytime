import React, { useState } from "react";
import { Button, Card, CardContent, Typography, Chip, Stack } from "@mui/material";



const CareersSection = () => {

    const categories = ["All", "Sales & BD", "Marketing", "Engineering", "Others"];

const [chooseOption, setChooseOption]= useState("All");

    const jobsData=[
        {name:"Sales and Business Development Associate", place:"Delhi - Full Time", type: "sale"},
        {name:"Content Marketing Specialist", place:"Delhi - Full Time", type: "marketing"},
        {name: "Content Writer", place:"Delhi - Full Time", type: "engeeniering"},
        {name: "Full Stack Developer", place:"Delhi - Full Time", type: "engeeniering"},
        {name: "Ruby on Rails Developer", place:"Delhi - Full Time", type: "engeeniering"},
        {name: "Head of Customer Experiences" , place:"Delhi - Full Time", type: "other"},
        {name:"Social Media Specialist" , place:"Delhi - Full Time", type: "marketing"},
        {name:"HR Executive / Manager" , place:"Delhi - Full Time", type: "sale"},
        {name: "Creative Designer" , place:"Delhi - Full Time", type: "engeeniering"},
        {name: "SEO Specialist" , place:"Delhi - Full Time", type: "marketing"},
        {name: "Public Relations Associate/Manager" , place:"Delhi - Full Time", type: "sale"},
        {name: "Quality Analyst Tester" , place:"Delhi - Full Time", type: "engeeniering"},
        {name: "Category Manager" , place:"Delhi - Full Time", type: "sale"},
        {name: "Digital Marketing Manager" , place:"Delhi - Full Time", type: "marketing"},
        {name:"Customer Delight Associate" , place:"Delhi - Full Time", type: "sale"},
        {name:"Video Editor" , place:"Delhi - Full Time", type: "engeeniering"},
        {name:"Business Development Associate" , place:"Delhi - Full Time", type: "sale"},
        {name:"Manager- Strategic Partnerships" , place:"Delhi - Full Time", type: "sale"},
        {name:"Operations Executive" , place:"Delhi - Full Time", type: "other"},
        {name:"Sourcing and Procurment Manager" , place:"Delhi - Full Time", type: "sale"},
    ]
  return (
    <div className="font-sans">
    
      

      {/* Category + Job Card Section */}
      <div className="relative text-white pt-12 pb-24 rounded-t-[100px]" style={{backgroundColor: "#049a9b"}}>
        {/* Tabs */}
        <Stack direction="row" spacing={10} justifyContent="center" className="flex-wrap mb-10">
  {categories.map((tab) => (
    <Chip
      key={tab}
      label={tab}
      clickable
      onClick={() => setChooseOption(tab)}
      sx={{
        backgroundColor: tab === chooseOption ? "#ffffff" : "transparent",
        color: tab === chooseOption ? "#049a9b" : "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        '&:hover': {
          backgroundColor: tab === chooseOption ? "#049a9b" : "#fff",
          color: tab === chooseOption ? "#fff" :"#049a9b" ,
        },
    
      }}
    />
  ))}
</Stack>


        {/* Job Card */}
        {jobsData.map((job, index) => (
  <Card
    key={index}
    sx={{
      maxWidth: 900,
      margin: "0 auto",
      backgroundColor: "#049a9b",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      px: 3,
      py: 2,
      mb: 3, // vertical gap between cards
      borderBottom: "1px solid #ffffff",
      transition: "background-color 0.3s ease",
      '&:hover': {
        backgroundColor: "#037f80", // darker version of #049a9b
      },
    }}
  >
    <CardContent sx={{ padding: 0 }}>
      <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mb: 1 }}>
        {job.name}
      </Typography>
      <Typography variant="body2" className="tracking-wider uppercase" sx={{ mt: "30px" }}>
        {job.place}
      </Typography>
    </CardContent>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#ffffff",
        color: "#f97316",
        fontWeight: "bold",
        '&:hover': {
          backgroundColor: "#f3f4f6",
        },
      }}
    >
      Apply
    </Button>
  </Card>
))}

      </div>
    </div>
  );
};

export default CareersSection;
