import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import skillsData from "../profile/skills.json";

const Skills = () => {
  return (
    <Box>
      <Typography variant="h4">Skills</Typography>
      <Typography variant="body1">{skillsData.intro}</Typography>
      <Grid container spacing={2}>
        {skillsData.skills.map((skillCategory, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Typography variant="h6">{skillCategory.title}</Typography>
            <Grid container spacing={1}>
              {skillCategory.items.map((skill, skillIndex) => (
                <Grid item key={skillIndex} xs={6} sm={4} md={3}>
                  <Box
                    component="img"
                    src={skill.icon}
                    alt={skill.title}
                    sx={{ width: "100%", maxWidth: "50px", height: "auto" }}
                  />
                  <Typography variant="body2">{skill.title}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
