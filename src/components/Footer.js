import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-black py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span style={{ color: "#d7b99a" }}>Let's</span> get started & work
          together
        </h1>
        <div>
          <button className="btn btn-lg">Contact Us</button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white-400 bg-black text-sm pb-8"
      >
        <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          © 2024 Prospect Divisions. All rights reserved.
        </span>
        <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          Privacy Policy
        </span>
        <div className="flex space-x-4">
          <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            Terms & Conditions{" "}
          </span>
          {/* {Icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a> */}
          {/* ))} */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
