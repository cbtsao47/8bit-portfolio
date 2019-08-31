import React from "react";
import "./Social.scss";

const Social = ({screenSize}) => {
  const handleClick = link => {
    window.open(link);
  };
  console.log(screenSize)
  return (
    <div className={`icon-list social${screenSize === "mobile" ? "-mobile":"-desktop"}`}>
      <i
        className="nes-icon github is-medium navbar-social nes-pointer"
        onClick={() => handleClick("https://github.com/cbtsao47")}
      />
      <a href="mailto:cbtsao47@gmail.com">
        <i className="social nes-icon gmail is-medium navbar-social nes-pointer" />
      </a>
      <i
        className="nes-icon linkedin is-medium navbar-social nes-pointer"
        onClick={() => handleClick("https://www.linkedin.com/in/cbtsao/")}
      />
    </div>
  );
};

export default Social;
