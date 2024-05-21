import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import educationData from "../profile/education.json";

const Education = () => {
  return (
    <Box>
      <Typography variant="h4">Education</Typography>
      {educationData.education.map((edu, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h6">{edu.cardTitle}</Typography>
            {/* Add more details from edu */}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Education;
