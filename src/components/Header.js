import React from "react";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/** Logo */}
          <h4
            className="text-logo"
            style={{ fontWeight: "bold", color: "#FFFFFF", fontSize: "2rem" }}
          >
            Prospects Divisions
          </h4>

          {/** Centered Navbar */}
          <div className="flex items-center">
            <Navbar />
          </div>

          {/** Button */}
          <button className="btn btn-sm">Book a call</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
