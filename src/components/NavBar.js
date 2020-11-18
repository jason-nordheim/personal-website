import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <Link to="/" className="navbar-logo">
          JN
        </Link>
      </div>
      <div className="navbar-right">
        <ul className={click ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-items">
            <Link to="/" className="navbar-links" onClick={closeMobileMenu}>
              <i className="fas fa-home" />
              <span>Home</span>
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/about" className="navbar-links" onClick={closeMobileMenu}>
              <i className="fas fa-child" />
              <span>About</span>
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/projects" className="navbar-links" onClick={closeMobileMenu}>
              <i className="fas fa-briefcase" />
              <span>Projects</span>
            </Link>
          </li>
          <li className="navbar-items">
            <Link to="/contact" className="navbar-links" onClick={closeMobileMenu}>
              <i className="fas fa-address-book" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
