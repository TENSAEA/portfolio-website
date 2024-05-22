import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

// Import images
import liraImage from "../images/projects/lira.png";
import quicknotesImage from "../images/projects/quicknotes.png";
import filehandlerImage from "../images/projects/filehandler.png";
import digitalequb from "../images/projects/digitalequb.png";
import tasktracker from "../images/projects/tasktracker.png";
import techclub from "../images/projects/techclubwordpress.png";
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: theme.spacing(2),
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
}));

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  height: "auto",
  width: "100%",
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(2),
}));

const ChipsContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
}));

const LinksContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const projects = [
  {
    image: liraImage,
    title: "LIRA Workspace",
    bodyText:
      "- Project Management Website made in MERN with Redux Toolkit and Query\n -  Fully customisable and dynamic, easily change data and images.\n - With Authentication",
    links: [
      {
        text: "GitHub",
        href: "https://github.com/TENSAEA/lira-workspace-backend.git",
      },
      { text: "Live", href: "https://lira-workspace.onrender.com" },
    ],
    tags: ["React", "Mongodb", "JavaScript", "Expressjs", "ReduxToolkit"],
  },
  {
    image: quicknotesImage,
    title: "Quicknotes",
    bodyText:
      "- A Note app made using MERN stack with Axios\n - Added User authentication.\n - Deployed on render",
    links: [
      {
        text: "GitHub",
        href: "https://github.com/TENSAEA/quicknote-frontend-mern.git",
      },
      { text: "Live", href: "https://quicknote-ydsm.onrender.com/" },
    ],
    tags: ["Mongodb", "React", "Material UI", "Nodejs", "Expressjs", "Axios"],
  },
  {
    image: filehandlerImage,
    title: "File Handler",
    bodyText:
      "- A File handler website using MERN with mysql\n - You can upload files and edit the description\n - I used Sequlizer",
    links: [
      {
        text: "GitHub",
        href: "https://github.com/TENSAEA/file-uploader-mern-with-mysql.git",
      },
    ],
    tags: ["React", "Mongodb", "Mysql", "Expressjs"],
  },
  {
    image: digitalequb,
    title: "Digital Equb",
    bodyText:
      "- A Digital Equb Site made by MERN Stack\n - Authentication with payment\n - With many features like equb drawing, chat forum\n - Ethiopian Tradition",
    links: [
      {
        text: "GitHub",
        href: "https://github.com/TENSAEA/Digital-Equb-Backend-Mern-Updated.git",
      },
    ],
    tags: ["React", "Node", "Mongodb", "Expressjs"],
  },
  {
    title: "Home Rental",
    bodyText: "- Rental Website made by MERN\n - With Authentication",
    links: [
      {
        text: "GitHub",
        href: "https://github.com/TENSAEA/home-rental-backend-team-2.git",
      },
    ],
    tags: ["Nodejs", "Expressjs", "Mongodb", "React"],
  },
  {
    image: techclub,
    title: "Technology Club Site",
    bodyText:
      "- Wordpress Site for The AAU Tech Club \n - Made by Wordpress\n - Hosted on infinite free",
    links: [
      {
        text: "Live",
        href: "https://technologyofsocialscienceclubaau.wuaze.com/",
      },
    ],
    tags: ["Kotlin", "Android", "MVVM", "Paging 3", "Coroutines", "Flow"],
  },
  {
    image: tasktracker,
    title: "Task Tracker",
    bodyText:
      "- A simple Task Tracker web app made with React.\n - Uses **mock JSON server** to get, add, delete or update tasks.",
    links: [
      { text: "GitHub", href: "https://github.com/TENSAEA/Task-Tracker.git" },
    ],
    tags: ["React"],
  },
  {
    title: "PHP Mini Project, Auth with Dashboard",
    bodyText: "- A PHP project with signup and login plus dashboard\n - PHP",
    links: [
      {
        text: "GitHub",
        href: "https://github.com/TENSAEA/php-mini-auth-project.git",
      },
    ],
    tags: ["HTML", "CSS", "PHP", "Mysql"],
  },
];

const Projects = () => {
  return (
    <Grid container spacing={2} padding={2}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <StyledCard>
            <CardActionArea>
              {project.image && (
                <CardMediaStyled
                  component="img"
                  image={project.image}
                  alt={project.title}
                />
              )}
              <CardContentStyled>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.bodyText.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
                <ChipsContainer>
                  {project.tags.map((tag, index) => (
                    <StyledChip label={tag} key={index} />
                  ))}
                </ChipsContainer>
                <LinksContainer>
                  {project.links.map((link, index) => (
                    <StyledButton
                      variant="contained"
                      color="primary"
                      href={link.href}
                      key={index}
                      target="_blank"
                      rel="noopener"
                    >
                      {link.text}
                    </StyledButton>
                  ))}
                </LinksContainer>
              </CardContentStyled>
            </CardActionArea>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
