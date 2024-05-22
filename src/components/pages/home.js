import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import homeData from "../profile/home.json";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

const FullPageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 28px;
  background: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  const theme = useTheme();

  const StyledTypography = styled(Typography)`
    color: ${theme.palette.mode === "dark" ? "purple" : "#333"};
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 16px 0;
  `;

  const TypographyNew = styled(Typography)`
    color: ${theme.palette.mode === "dark" ? "purple" : "#333"};
  `;

  // Define a function to get icons based on roles.
  const getIcon = (role) => {
    switch (role.toLowerCase()) {
      case "developer":
        return <CodeIcon />;
      case "student":
        return <SchoolIcon />;
      default:
        return <WorkIcon />;
    }
  };

  return (
    <FullPageBox>
      <TypographyNew variant="h3"> {homeData.name}</TypographyNew>
      {homeData.roles.map((role, index) => (
        <StyledTypography key={index} variant="h6">
          {getIcon(role)}
          {role}
        </StyledTypography>
      ))}
    </FullPageBox>
  );
};

export default Home;
