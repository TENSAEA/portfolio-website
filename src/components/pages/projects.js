import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import projectsData from "../profile/projects.json";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: theme.spacing(2),
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

const StyledLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));

const Projects = () => {
  return (
    <Grid container spacing={4}>
      {projectsData.projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <CardActionArea>
              {project.image && (
                <CardMedia
                  component="img"
                  height="140"
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
                    <StyledLink
                      href={link.href}
                      key={index}
                      target="_blank"
                      rel="noopener"
                    >
                      {link.text}
                    </StyledLink>
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
