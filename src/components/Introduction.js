import React from "react";
import Ben from "../assets/selfportrait.png";
import "./Introduction.scss";
const Introduction = ({ title, text }) => {
  return (
    <>
      <div className="introduction-container nes-container is-rounded is-dark">
        <div className="introduction-self-portrait">
          <img className="self-portrait " src={Ben} alt="Ben Tsao" />
          <p className="introduction-text--primary">Ben Tsao</p>
        </div>
        <div className="introduction-text ">
          <p className="introduction-paragraph ">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
