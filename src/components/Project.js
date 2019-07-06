import React from "react";
import "./Project.scss";
const Project = ({ project: { title, description, techStacks } }) => {
  return (
    <div className="project-container">
      <div className="project-image" />
      <h2 className="project-title">{title}</h2>
      <h2 className="project-description">{description}</h2>
      <h2 className="project-techStacks">{techStacks}</h2>
    </div>
  );
};

export default Project;
