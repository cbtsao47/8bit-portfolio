import React from "react";
import "./Social.scss";

const Social = () => {
  const handleClick = link => {
    window.open(link);
  };
  return (
    <div className="social icon-list">
      <i
        className="social nes-icon github is-medium navbar-social nes-pointer"
        onClick={() => handleClick("https://github.com/cbtsao47")}
      />
      <a href="mailto:cbtsao47@gmail.com">
        <i className="social nes-icon gmail is-medium navbar-social nes-pointer" />
      </a>
      <i
        className="social nes-icon linkedin is-medium navbar-social nes-pointer"
        onClick={() => handleClick("https://www.linkedin.com/in/cbtsao/")}
      />
    </div>
  );
};

export default Social;
