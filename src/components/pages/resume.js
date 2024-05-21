import React from "react";
import { Typography, Box, Link } from "@mui/material";
import navbarData from "../profile/navbar.json";

const Resume = () => {
  const resumeLink = navbarData.sections.find(
    (section) => section.title === "Resume"
  ).href;
  return (
    <Box>
      <Typography variant="h4">Resume</Typography>
      <Link href={resumeLink} target="_blank" rel="noopener">
        Download Resume
      </Link>
    </Box>
  );
};

export default Resume;
