import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"
import { typewriterSpeed } from "../data/app"

import "./NavBar.css";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const typeSpeed = typewriterSpeed + 30;

  const handleOpen = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-menu-icon" onClick={handleOpen}>
          <i className={open ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <Link to="/" className="navbar-logo">
           JN
        </Link>
      </div>
      <div className="navbar-right">
        <ul className={open ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-items">
            <Link to="/" className="navbar-links" onClick={closeMenu}>
              <i className="fas fa-home" />
              <Typewriter options={{
                strings:"home",
                delay: typeSpeed, 
                cursor: '', 
                autoStart: true,
                loop: false
            }}  /> 
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/about" className="navbar-links" onClick={closeMenu}>
              <i className="fas fa-child" />
              <Typewriter options={{
                strings:"about",
                delay: typeSpeed, 
                cursor: '', 
                autoStart: true,
                loop: false
            }}  /> 
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/projects" className="navbar-links" onClick={closeMenu}>
              <i className="fas fa-briefcase" />
              <Typewriter options={{
                strings:"projects",
                delay: typeSpeed, 
                cursor: '', 
                autoStart: true,
                loop: false
            }}  /> 
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/contact" className="navbar-links" onClick={closeMenu}>
              <i className="fas fa-address-book" />
              <Typewriter options={{
                strings:"contact",
                delay: typeSpeed, 
                cursor: '', 
                autoStart: true,
                loop: false
            }}  /> 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
