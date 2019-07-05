import React from "react";

const Techs = ({ techStack }) => {
  return (
    <div className="flex">
      <i className="nes-icon linkedin is-large" />
      <p>{techStack}</p>
    </div>
  );
};

export default Techs;
