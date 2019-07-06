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
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
};

export default View;
