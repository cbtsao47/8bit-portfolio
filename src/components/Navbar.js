import React from "react";

const Navbar = () => {
  return (
    <div className="nes-container is-dark is-rounded">
      <button className="nes-btn is-rounded">About</button>
      <button className="nes-btn is-primary">Portfolio</button>
      <button className="nes-btn is-disabled">Contact</button>
    </div>
  );
};

export default Navbar;
