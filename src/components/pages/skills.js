import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import skillsData from "../profile/skills.json";

const Skills = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" paragraph>
        {skillsData.intro}
      </Typography>
      <Grid container spacing={3}>
        {skillsData.skills.map((skillCategory, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                {skillCategory.title}
              </Typography>
              <Grid container spacing={2}>
                {skillCategory.items.map((skill, skillIndex) => (
                  <Grid item key={skillIndex} xs={6}>
                    <Card
                      sx={{ display: "flex", alignItems: "center", padding: 1 }}
                    >
                      <CardMedia
                        component="img"
                        src={skill?.icon}
                        alt={skill.title}
                        sx={{ width: 50, height: "auto", marginRight: 2 }}
                      />
                      <CardContent sx={{ padding: "0 !important" }}>
                        <Typography variant="body2">{skill.title}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
