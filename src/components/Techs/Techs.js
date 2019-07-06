import React from "react";
import "./Tech.scss";
import defaultPic from "../../assets/js.png";
const Techs = ({ techStack }) => {
  const tech = Object.keys(techStack)[0];

  return (
    <div className="flex">
      <img src={techStack[tech]} className={`skill-icon ${tech}`} alt="" />
      <p>{tech}</p>
    </div>
  );
};

export default Techs;
Techs.defaultProps = {
  techStack: {
    JavaScript: defaultPic
  }
};
