import React from "react";
import { Typography, Box, Container, Paper, Grid } from "@mui/material";
import aboutData from "../profile/about.json"; // Import the JSON data
import Profile from "../images/about/profile.png";
const About = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item md={6}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">{aboutData.about}</Typography>
          </Grid>
          <Grid item md={6}>
            <Box
              component="img"
              src={Profile}
              alt="Profile"
              sx={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
