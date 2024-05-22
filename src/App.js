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
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Skills from "./components/pages/skills";
import Education from "./components/pages/education";
import Experience from "./components/pages/experience";
import Resume from "./components/pages/resume";
import Project from "./components/pages/projects";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Logo from "./components/images/logo.png";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00094B",
    },
    background: {
      default: "#f4f5f7",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1e1e1e",
    },
    background: {
      default: "#121212",
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Experience",
    "Projects",
    "Resume",
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppBar
          position="static"
          color="primary"
          sx={{
            width: isMobile ? "100%" : "60%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: isMobile ? 0 : "10px",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white" }}
            >
              <img
                src={Logo}
                alt="Tensae's Portfolio"
                style={{
                  height: "4em",
                  maxWidth: "100%",
                  marginTop: "5px",
                }}
              />{" "}
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {menuItems.map((text) => (
                    <MenuItem
                      key={text}
                      onClick={handleClose}
                      component={NavLink}
                      to={`/${text.toLowerCase()}`}
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "inherit",
                      })}
                    >
                      {text}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {menuItems.map((text) => (
                  <Button
                    key={text}
                    component={NavLink}
                    to={`/${text.toLowerCase()}`}
                    style={({ isActive }) => ({
                      color: isActive ? "green" : "inherit",
                    })}
                  >
                    {text}
                  </Button>
                ))}
              </Box>
            )}
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="default"
            />
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
