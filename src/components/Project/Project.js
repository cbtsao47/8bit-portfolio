import React from "react";
import "./Project.scss";
import img from "../../assets/selfportrait.png";
const Project = ({
  project: { title, description, img, projectLink, codeLink }
}) => {
  const handleClick = (e, link) => {
    window.open(link);
  };
  return (
    <div className="project-container with-title is-centered nes-container is-rounded is-dark">
      <h2 className="project-title title">{title}</h2>
      <img className="project-image" src={img} alt="" />
      <h2 className="project-description">{description}</h2>
      <div>
        <button
          className="nes-btn is-primary"
          onClick={e => handleClick(e, projectLink)}
        >
          Project
        </button>
        {codeLink ? (
          <button
            className="nes-btn is-primary"
            onClick={e => handleClick(e, codeLink)}
          >
            Code
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
Project.defaultProps = {
  project: {
    title: "title",
    description: "description",
    techStacks: "stacks",
    img
  }
};
