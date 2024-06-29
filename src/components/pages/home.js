import React from "react";
import { Typography, Box, useTheme, IconButton, Avatar } from "@mui/material";
import styled from "@emotion/styled";
import homeData from "../profile/home.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Profile from "../images/about/NewProfile.png";
import { ReactTyped } from "react-typed"; // Make sure to use the correct case

const FullPageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2px;
  background: #f0f0f0;
`;

const NameTypography = styled(Typography)`
  color: purple;
  font-family: "Great Vibes", cursive;
  text-align: center;
`;

const Home = () => {
  const theme = useTheme();

  const iconStyles = {
    fontSize: { xs: "1.5rem", md: "2rem" },
    color: theme.palette.mode === "dark" ? "blue" : "#004185",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.2)",
      color: theme.palette.primary.main,
    },
  };

  return (
    <FullPageBox
      sx={{
        minHeight: { xs: "80vh", md: "80vh" },
        marginTop: { xs: "8px", md: "16px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "70%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Profile Image"
          src={Profile}
          sx={{
            width: { xs: "12em", md: "25em" },
            height: { xs: "12em", md: "25em" },
            mb: { xs: "16px", md: 0 },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            maxWidth: "100%",
            width: { xs: "100%", sm: "85%", md: "70%", lg: "55%", xl: "40%" },
            textAlign: { xs: "center", md: "left" },
            marginLeft: "25px",
          }}
        >
          <NameTypography
            variant="h4"
            sx={{ fontSize: { xs: "1.5rem", md: "3rem" } }}
          >
            {homeData.name}
          </NameTypography>
          <Typography
            sx={{
              marginTop: "5px",
              marginBottom: "15px",
              color: "green",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
            variant="h5"
          >
            I'm{" "}
            <ReactTyped
              strings={[
                "Information System Fresh Graduate of 2024",
                "Full Stack Developer",
                "WordPress Developer",
                "MERN Stack Developer",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=">"
              showCursor={true}
            />
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/TENSAEA"
              target="_blank"
              sx={iconStyles}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/tensae-aschalew-339368239"
              target="_blank"
              sx={iconStyles}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Telegram"
              component="a"
              href="https://t.me/tensae316213"
              target="_blank"
              sx={iconStyles}
            >
              <TelegramIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              gap: 2,
              marginTop: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "blue",
              }}
            >
              <PhoneIcon />
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                +251984049121
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "blue",
              }}
            >
              <EmailIcon />
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                tensaeaschalew27@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </FullPageBox>
  );
};

export default Home;
