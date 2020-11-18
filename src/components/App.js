import React, { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Route, Switch, useLocation } from "react-router-dom";
import './App.css'
import NavBar from "./NavBar"

const App = () => {
  let location = useLocation();
  return (
    <div className="app">
      <NavBar /> 
      <Switch location={location}>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;