import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Switch,
  AppBar,
  Toolbar,
  Typography,
  Button,
  createTheme,
  Box,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Skills from "./components/pages/skills";
import Education from "./components/pages/education";
import Experience from "./components/pages/experience";
import Resume from "./components/pages/resume";

// Define the light and dark themes directly in this file
const lightTheme = createTheme({
  palette: {
    mode: "light",
    // ... other properties for the light theme
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // ... other properties for the dark theme
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tensae's Portfolio
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/skills">
                Skills
              </Button>
              <Button color="inherit" component={Link} to="/education">
                Education
              </Button>
              <Button color="inherit" component={Link} to="/experience">
                Experience
              </Button>
              <Button color="inherit" component={Link} to="/resume">
                Resume
              </Button>
            </Box>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
