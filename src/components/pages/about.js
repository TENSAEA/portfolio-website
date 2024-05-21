import React from "react";
import { Typography, Box } from "@mui/material";
import aboutData from "../profile/about.json"; // Import the JSON data

const About = () => {
  return (
    <Box>
      <Typography variant="h4">About Me</Typography>
      <Box>
        <Typography variant="body1">{aboutData.about}</Typography>
        <Box
          component="img"
          src={aboutData.imageSource}
          alt="Profile"
          sx={{ width: "100%", maxWidth: "400px", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default About;
