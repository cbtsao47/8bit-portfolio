import React from "react";
import Ben from "../assets/selfportrait.png";
import "./Introduction.scss";
const Introduction = ({ title, text }) => {
  return (
    <>
      <div className="introduction-container  ">
        <img
          className="introduction-self-portrait self-portrait "
          src={Ben}
          alt="Ben Tsao"
        />
        <div className="introduction-text ">
          <p className="introduction-text--primary">{title} Tsao</p>
          <p className="introduction-paragraph ">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
