import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

// custom components 
import NavBar from "./NavBar"

// page components 
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

// css 
import './MeyersReset.css'
import './App.scss'

const App = () => {
  let location = useLocation();
  return (
    <div className="app">
      <NavBar /> 
      <div className="page">
        <Switch location={location}>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
