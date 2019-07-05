import React from "react";
import "./Skills.scss";
const Skills = ({ title, text, Ben }) => {
  return (
    <>
      <div className="skills-container nes-container is-dark is-rounded">
        <div className="skills skills-fe">
          <h2 className="skills-title">Front-End</h2>
          <i className="nes-icon linkedin is-medium" />
          <i className="nes-icon linkedin is-medium" />
          <i className="nes-icon linkedin is-medium" />
        </div>
        <div className="skills skills-be">
          <h2 className="skills-title">Back-End</h2>
          <i className="nes-icon linkedin is-medium" />
          <i className="nes-icon linkedin is-medium" />
          <i className="nes-icon linkedin is-medium" />
        </div>
      </div>
    </>
  );
};

export default Skills;
