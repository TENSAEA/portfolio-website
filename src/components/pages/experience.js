import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import experienceData from "../profile/experiences.json";

const Experience = () => {
  return (
    <Box>
      <Typography variant="h4">Experience</Typography>
      {experienceData.experiences.map((exp, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h6">{exp.title}</Typography>
            {/* Add more details from exp */}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Experience;
