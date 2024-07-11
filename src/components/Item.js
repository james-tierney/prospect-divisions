import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Item = ({ Links, title }) => {
  return (
    <div>
      <h1 className="mb-1 font-bold text-white-600">{title}</h1>
      <ul>
        {Links.map((link, index) => (
          <li key={index} className={link.icon ? "inline-block mr-4" : ""}>
            <a
              className="font-semibold text-white-500 hover:text-[#d7b99a] duration-300 text-sm cursor-pointer leading-6"
              href={link.link}
            >
              {link.icon ? link.icon : link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
