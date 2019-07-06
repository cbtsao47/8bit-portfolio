import React from "react";
import Project from "../components/Project/Project";
import "./Projects.scss";
import gameGGJ from "../assets/gameGGJ.png";
import slackr from "../assets/slackr.png";
import tippr from "../assets/tippr.png";
import pkStat from "../assets/pkstat.png";
const Projects = ({ projects }) => {
  return (
    <main className="main projects nes-container is-dark is-rounded">
      {projects &&
        projects.map((project, i) => {
          return <Project key={project.id || i} project={project} />;
        })}
    </main>
  );
};

export default Projects;
Projects.defaultProps = {
  projects: [
    {
      title: "Slackr",
      description: "An asynchronous stand-up app for fast-paced teams",
      techStacks: "stacks",
      img: slackr,
      projectLink: "https://slackrs-app.netlify.com",
      codeLink: "https://github.com/labs-13-slack-manager-survey/frontend"
    },
    {
      title: "Pokestat",
      description: "A stat viewer for Pokemon enthusiasts",
      techStacks: "stacks",
      img: pkStat,
      projectLink: "https://pkstats.netlify.com/",
      codeLink: "https://github.com/pokepokepokedex/pokedex-Landing-Page"
    },
    {
      title: "Tippr",
      description: "A modern tipping app for customers and employees",
      techStacks: "stacks",
      img: tippr,
      projectLink: "https://joe-tippr.netlify.com/index.html",
      codeLink: "https://github.com/tippr-application/tippr-back-end-ben"
    },
    {
      title: "When I Still Knew You",
      description: "A narrative game about an old man and his memories.",
      techStacks: "stacks",
      img: gameGGJ,
      projectLink: "https://globalgamejam.org/2019/games/when-i-still-knew-you"
    }
  ]
};
