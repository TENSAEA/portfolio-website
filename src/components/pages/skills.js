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

// Importing images
import Mongodb from "../images/skills/mongo-db.png";
import PHP from "../images/skills/php.png";
import MySQL from "../images/skills/mysql.png";
import JavaScript from "../images/skills/js.png";
import Wordpress from "../images/skills/wordpress.png";
import ReactIcon from "../images/skills/react.png";
import Nodejs from "../images/skills/nodejs.png";
import Git from "../images/skills/git.png";
import Docker from "../images/skills/docker.png";
import Redux from "../images/skills/redux.png";
import { useTheme } from "@emotion/react";

const Skills = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 } }}>
      <Typography
        variant="h4"
        fontFamily="initial"
        gutterBottom
        sx={{
          color: theme.palette.mode === "dark" ? "white" : "blue", // Adjust the color according to the theme
          fontSize: { xs: "1.5rem", md: "2.125rem" },
        }}
      >
        Skills
      </Typography>
      <Typography
        variant="body1"
        fontFamily="initial"
        paragraph
        sx={{
          color: theme.palette.mode === "dark" ? "white" : "blue", // Adjust the color according to the theme
          fontSize: { xs: "1rem", md: "1.25rem" },
        }}
      >
        I love to learn new things and experiment with new technologies. These
        are some of the major languages, technologies, tools, and platforms I
        have worked with:
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {/* Languages & Databases */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: { xs: 1, md: 2 } }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
            >
              Languages & Databases
            </Typography>
            <Grid container spacing={{ xs: 1, md: 2 }}>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={Mongodb}
                    alt="Mongodb"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">Mongodb</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={PHP}
                    alt="PHP"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">PHP</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={MySQL}
                    alt="MySQL"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">MySQL</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={JavaScript}
                    alt="JavaScript"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">JavaScript</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={Wordpress}
                    alt="Wordpress"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">Wordpress</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Frameworks & Technologies */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: { xs: 1, md: 2 } }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
            >
              Frameworks & Technologies
            </Typography>
            <Grid container spacing={{ xs: 1, md: 2 }}>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={ReactIcon}
                    alt="React"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">React</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={Nodejs}
                    alt="Nodejs"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">Nodejs</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Tools & Platforms */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: { xs: 1, md: 2 } }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
            >
              Tools & Platforms
            </Typography>
            <Grid container spacing={{ xs: 1, md: 2 }}>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={Git}
                    alt="Git"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">Git</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={Docker}
                    alt="Docker"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">Docker</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: 0.5, md: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={Redux}
                    alt="Redux"
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: "auto",
                      marginRight: 2,
                    }}
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography variant="body2">Redux</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
