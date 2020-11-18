import React, { useState } from "react";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
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
