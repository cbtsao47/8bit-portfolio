import React from "react";
import Project from "../components/Project/Project";
import "./Projects.scss";
import projImg from "../assets/selfportrait.png";
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
      title: "title",
      description: "description",
      techStacks: "stacks",
      img: projImg
    },
    {
      title: "title",
      description: "description",
      techStacks: "stacks",
      img: projImg
    },
    {
      title: "title",
      description: "description",
      techStacks: "stacks",
      img: projImg
    },
    {
      title: "title",
      description: "description",
      techStacks: "stacks",
      img: projImg
    }
  ]
};
