import React from "react";
import "./Tech.scss";
const Techs = ({ techStack }) => {
  const tech = Object.keys(techStack)[0];

  return (
    <div className="flex">
      <img src={techStack[tech]} className="skill-icon" alt="" />
      <p>{tech}</p>
    </div>
  );
};

export default Techs;
