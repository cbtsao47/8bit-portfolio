import React from "react";
import "./Navbar.scss";
import Social from "../Social/Social";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar nes-container is-dark is-rounded">
      <NavLink to="/" className="nes-btn">
        Home
      </NavLink>
      <NavLink to="/about" className="nes-btn is-primary">
        About
      </NavLink>
      <NavLink to="/projects" className="nes-btn">
        Projects
      </NavLink>
      <Social />
    </nav>
  );
};

export default Navbar;
