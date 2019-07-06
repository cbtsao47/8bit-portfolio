import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "nes.css/css/nes.css";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
