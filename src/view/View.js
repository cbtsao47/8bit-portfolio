import React from "react";
import Navbar from "../components/Navbar";
import DialogBox from "../components/DialogBox";
import Home from "../pages/Home";
import "./view.scss";
import About from "../pages/About";
import Projects from "../pages/Projects";
const View = () => {
  return (
    <div className="view">
      <Home />
      <About />
      <Projects />
      <Navbar />
    </div>
  );
};

export default View;
