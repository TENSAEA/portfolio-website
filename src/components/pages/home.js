import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import homeData from "../profile/home.json";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School"; // Example icon
import CodeIcon from "@mui/icons-material/Code"; // Example icon

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

const StyledTypography = styled(Typography)`
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`;

const Home = () => {
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
      <Typography variant="h3" gutterBottom>
        {homeData.name}
      </Typography>
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
