import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { keyframes, useTheme } from "@emotion/react";
import navbarData from "../profile/navbar.json";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Resume = () => {
  const theme = useTheme();
  const resumeLink = navbarData.sections.find(
    (section) => section.title === "Resume"
  ).href;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="80px" // Assuming some margin to clear the navbar
      animation={`${fadeIn} 1s ease-in-out`}
    >
      <Typography
        sx={{ color: theme.palette.mode === "dark" ? "white" : "blue" }}
        variant="h4"
        gutterBottom
      >
        Resume
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={resumeLink}
        target="_blank"
        rel="noopener"
        sx={{
          mt: 2, // Margin top of 2 for spacing
          fontSize: "1rem",
          padding: "10px 20px",
          textTransform: "none",
          animation: `${fadeIn} 1s ease-in-out`,
          backgroundColor:
            theme.palette.mode === "dark" ? "purple" : "primary.main",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark" ? "darkpurple" : "primary.dark", // Optional: change hover color
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Resume;
