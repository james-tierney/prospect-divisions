import React from "react";

// images
// import Logo from "../assets/logoSVG.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/** logo */}
          <div className="text-accent text-xxl">
            <h4 className="text-logo">JTierney Tech</h4>
            {/* <a href="#">
              {/* <img src={Logo} alt="" /> */}
          </div>
          {/**button */}
          <button className="btn btn-sm ">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
