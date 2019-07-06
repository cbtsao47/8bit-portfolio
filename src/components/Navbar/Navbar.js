import React from "react";
import "./Navbar.scss";
import Social from "../Social/Social";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar nes-container is-dark is-rounded">
      <NavLink exact to="/" className="nes-btn" activeClassName="is-primary">
        Home
      </NavLink>
      <NavLink to="/about" className="nes-btn " activeClassName="is-primary">
        About
      </NavLink>
      <NavLink to="/projects" className="nes-btn" activeClassName="is-primary">
        Projects
      </NavLink>
      <Social />
    </nav>
  );
};

export default Navbar;