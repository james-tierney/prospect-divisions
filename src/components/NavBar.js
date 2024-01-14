import React from "react";
import ButtonWithAnimation from "./ButtonWithAnimation";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/services">Services</a>
        </li>
        <li className="nav-item">
          {/* Use the ButtonWithAnimation component in the navigation bar */}
          <ButtonWithAnimation />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
