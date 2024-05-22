import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import LoremIpsumIcon from "../images/education/aaulogo.png";
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

const Icon = styled("img")({
  width: 50,
  height: 50,
  marginBottom: 20,
});

const Education = () => {
  const theme = useTheme();
  const educationItem = {
    title: "Jun 2021 - Jun 2024",
    cardTitle: "B.Tech, Information System",
    cardSubtitle: "Addis Ababa University, Addis Ababa",
    cardDetailedText: "CGPA - 3.65",
    icon: {
      src: LoremIpsumIcon,
    },
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 5 },
        marginTop: { xs: 2, md: 0 },
        marginLeft: { xs: "5%", md: "20%" },
        width: { xs: "90%", md: "50%" },
      }}
    >
      <Typography
        fontFamily="initial"
        variant="h4"
        gutterBottom
        sx={{
          color: theme.palette.mode === "dark" ? "white" : "blue", // Adjust the color according to the theme
          fontSize: { xs: "1.5rem", md: "2.125rem" },
        }}
      >
        Education
      </Typography>
      <StyledCard>
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Icon
              sx={{ margin: { xs: "0 auto 10px", md: "0 5px 0 0" } }}
              src={educationItem.icon.src}
              alt="Education Icon"
            />
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
              >
                {educationItem.cardTitle}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {educationItem.cardSubtitle}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {educationItem.title}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            {educationItem.cardDetailedText}
          </Typography>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default Education;
