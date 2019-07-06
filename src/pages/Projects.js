import React from "react";
import Project from "../components/Project";
import "./Projects.scss";
const Projects = () => {
  const project = {
    title: "",
    description: "",
    techStacks: ""
  };
  return (
    <main className="main projects nes-container is-dark is-rounded">
      <div className="projects-container">
        <div className="projects-image" />
        <Project project={project} />
      </div>
    </main>
  );
};

export default Projects;
