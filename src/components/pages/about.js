import React from "react";
import { Typography, Box, Container, Paper, Grid } from "@mui/material";
import aboutData from "../profile/about.json"; // Import the JSON data
import Profile from "../images/about/NewProfile.png";

const About = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: { xs: "auto", md: "85vh" }, // Adjust for smaller screens
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 0 }, // Add padding for small screens
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: { xs: 2, md: 6 }, // Adjust padding
          mt: 0,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #ffffff, #e0f7fa)",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            {" "}
            <Typography
              variant="h4"
              fontFamily="initial"
              gutterBottom
              color="blue"
              sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }} // Responsive font size
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              fontFamily="initial"
              sx={{
                color: "#555555",
                fontSize: { xs: "0.875rem", md: "1rem" },
              }} // Responsive font size
            >
              {aboutData.about}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Box
              component="img"
              src={Profile}
              alt="Profile"
              sx={{
                width: "100%",
                maxWidth: { xs: "250px", md: "400px" }, // Responsive max width
                height: "auto",
                borderRadius: "50px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                border: "4px solid #ffffff",
                mx: "auto", // Center the image on smaller screens
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
