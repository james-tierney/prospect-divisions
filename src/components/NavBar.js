import React from "react";
import ButtonWithAnimation from "./ButtonWithAnimation";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a style={{ color: "#FFFFFF" }} href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a style={{ color: "#FFFFFF" }} href="/about">
            About
          </a>
        </li>
        <li className="nav-item" id="portfolio-nav-item">
          <a style={{ color: "#FFFFFF" }} href="/portfolio">
            Portfolio
          </a>
        </li>
        {/* <li className="nav-item"> */}
        {/* Use the ButtonWithAnimation component in the navigation bar */}
        {/* <ButtonWithAnimation />
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
