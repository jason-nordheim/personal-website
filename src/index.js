import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./app";
import "./app.css";

const index = () => (
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(index, document.getElementById("root"));
