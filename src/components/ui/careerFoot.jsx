import React, { useState } from "react";
import { Button, Card, CardContent, Typography, Chip, Stack } from "@mui/material";



const CareersSection = () => {

    const categories = ["All", "Sales & BD", "Marketing", "Engineering", "Others"];

const [chooseOption, setChooseOption]= useState("All");

    const jobsData=[
        {name:"Sales and Business Development Associate", place:"Delhi - Full Time", type: "Sales & BD"},
        {name:"Content Marketing Specialist", place:"Delhi - Full Time", type: "Marketing"},
        {name: "Content Writer", place:"Delhi - Full Time", type: "Engineering"},
        {name: "Full Stack Developer", place:"Delhi - Full Time", type: "Engineering"},
        {name: "Ruby on Rails Developer", place:"Delhi - Full Time", type: "Engineering"},
        {name: "Head of Customer Experiences" , place:"Delhi - Full Time", type: "Others"},
        {name:"Social Media Specialist" , place:"Delhi - Full Time", type: "Marketing"},
        {name:"HR Executive / Manager" , place:"Delhi - Full Time", type: "Sales & BD"},
        {name: "Creative Designer" , place:"Delhi - Full Time", type: "Engineering"},
        {name: "SEO Specialist" , place:"Delhi - Full Time", type: "Marketing"},
        {name: "Public Relations Associate/Manager" , place:"Delhi - Full Time", type: "Sales & BD"},
        {name: "Quality Analyst Tester" , place:"Delhi - Full Time", type: "Engineering"},
        {name: "Category Manager" , place:"Delhi - Full Time", type: "Sales & BD"},
        {name: "Digital Marketing Manager" , place:"Delhi - Full Time", type: "Marketing"},
        {name:"Customer Delight Associate" , place:"Delhi - Full Time", type: "Sales & BD"},
        {name:"Video Editor" , place:"Delhi - Full Time", type: "Engineering"},
        {name:"Business Development Associate" , place:"Delhi - Full Time", type: "Sales & BD"},
        {name:"Manager- Strategic Partnerships" , place:"Delhi - Full Time", type: "Sales & BD"},
        {name:"Operations Executive" , place:"Delhi - Full Time", type: "Others"},
        {name:"Sourcing and Procurment Manager" , place:"Delhi - Full Time", type: "Sales & BD"},
    ]
  return (
    <div className="font-sans">
    
      

      {/* Category + Job Card Section */}
      <div className="relative text-white pt-12 pb-24 rounded-t-[100px]" style={{backgroundColor: "#049a9b"}}>
        {/* Tabs */}
        <Stack direction="row" spacing={{xs: 1, sm: 4, md: 6, lg: 10}} justifyContent="center" className="flex-wrap mb-10">
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
        {jobsData
  .filter((job) => chooseOption === "All" || job.type === chooseOption)
  .map((job, index) => (
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
        mb: 3, // vertical spacing between cards
        borderBottom: "1px solid #ffffff",
        transition: "background-color 0.3s ease",
        '&:hover': {
          backgroundColor: "#037f80", // darker on hover
        },
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="h6" className="text-left" component="div" sx={{ fontWeight: "bold", mb: 1 }}>
          {job.name}
        </Typography>
        <Typography
          variant="body2"
          className="tracking-wider uppercase text-left"
          sx={{ mt: 2 }}
        >
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
