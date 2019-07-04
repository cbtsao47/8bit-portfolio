import React from "react";
import Navbar from "../components/Navbar";
import DialogBox from "../components/DialogBox";
import Home from "../pages/Home";
import "./view.scss";
const View = () => {
  return (
    <div className="view">
      <Navbar />
      <Home />
      <DialogBox />
    </div>
  );
};

export default View;
