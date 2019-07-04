import React from "react";
import "./Navbar.scss";
import Social from "./Social";
const Navbar = () => {
  return (
    <div className="nes-container is-dark is-rounded navbar-container">
      <button className="nes-btn">Home</button>
      <button className="nes-btn is-primary">About</button>
      <button className="nes-btn">Projects</button>
      <Social />
    </div>
  );
};

export default Navbar;
