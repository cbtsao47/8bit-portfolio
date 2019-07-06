import React from "react";
import "./Skills.scss";
import Techs from "../Techs/Techs";
const Skills = ({ techStacks }) => {
  const { fe, be } = techStacks || {};
  return (
    <>
      <div className="skills-container nes-container is-dark is-rounded with-title">
        <p className="title title-primary">Skills</p>
        <div className="skills skills-fe">
          <h2 className="skills-title">Front-End</h2>
          {fe &&
            fe.map((techStack, i) => {
              return <Techs key={techStack.id || i} techStack={techStack} />;
            })}
        </div>
        <div className="skills skills-be">
          <h2 className="skills-title">Back-End</h2>
          {be &&
            be.map((techStack, i) => {
              return <Techs key={techStack.id || i} techStack={techStack} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Skills;

Skills.defaultProps = {
  techStacks: {
    fe: [],
    be: []
  }
};
