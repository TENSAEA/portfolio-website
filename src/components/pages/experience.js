import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { Work } from "@mui/icons-material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";

// Styled components for animations and shadow
const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(3),
  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.3s ease-in-out",
  },
}));

const IconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(2),
}));

const Experience = () => {
  const theme = useTheme();
  const experiences = [
    {
      title: "Software Customizer",
      company: "Addis Ababa University Digital Library",
      duration: "11/2023 - 2/2024",
      location: "AAU Digital Library",
      details: "Customize Digital Library Using Dspace.",
    },
    {
      title: "Programming Trainer",
      company: "CodeJIKA and KoderLab Comapany's",
      duration: "04/2024 - Present",
      location: "Remote, Inperson",
      details: "Teach Students about Programming and Programming Languages.",
    },
    {
      title: "Tech Club President",
      company: "Addis Ababa University",
      duration: "09/2023 - Present",
      location: "Addis Ababa",
      details: "President for Tech Club in Addis Ababa University",
    },
    // Add more experience objects here if needed
  ];

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 5 },
        marginTop: 0,
        marginLeft: { xs: "5%", md: "20%" },
        width: { xs: "90%", md: "60%" },
        height: { xs: "auto", md: "70vh" },
      }}
    >
      <Typography
        fontFamily="initial"
        sx={{
          color: theme.palette.mode === "dark" ? "white" : "blue", // Adjust the color according to the theme
          fontSize: { xs: "1.5rem", md: "2.125rem" },
        }}
        variant="h4"
        gutterBottom
      >
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <StyledCard key={index} sx={{ marginBottom: { xs: 2, md: 3 } }}>
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              flexDirection={{ xs: "column", md: "row" }}
            >
              <IconWrapper sx={{ marginBottom: { xs: 1, md: 0 } }}>
                <Work fontSize="large" color="primary" />
              </IconWrapper>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                >
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {exp.company}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {exp.duration} - {exp.location}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              {exp.details}
            </Typography>
          </CardContent>
        </StyledCard>
      ))}
    </Box>
  );
};

export default Experience;
