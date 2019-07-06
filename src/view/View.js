import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import "./view.scss";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { Route, Switch } from "react-router-dom";
const View = () => {
  return (
    <div className="view ">
      <Navbar />
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/projects" render={props => <Projects {...props} />} />
      </Switch>
    </div>
  );
};

export default View;
