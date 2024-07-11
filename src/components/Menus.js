import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const MENU = [
  { name: "How We Operate", link: "#" },
  { name: "About Us", link: "/about" },
  { name: "What We Offer", link: "#" },
  { name: "Book A Meeting", link: "#" },
];
export const CONTACT = [
  {
    name: "divisionprospect@gmail.com",
    link: "mailto:divisionprospect@gmail.com",
  },
  { name: "Tel: +353 8740 252 66", link: "#" },
  { name: "Rutland Square, Cork, Ireland", link: "#" },
  // { name: "Online evenet", link: "#" },
  // { name: "Nostrud exercitation", link: "#" },
];
// export const COMPANY = [
//   { name: "Diversity & inclusion", link: "#" },
//   { name: "About us", link: "#" },
//   { name: "Press", link: "#" },
//   { name: "Customer Stories", link: "#" },
//   { name: "Online communities", link: "#" },
// ];
export const FOLLOW = [
  // { name: "Documentation", link: "#" },
  // { name: "Tutorials & guides", link: "#" },
  // { name: "Webinars", link: "#" },
  // { name: "Open-source", link: "#" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prospects-division-54b541272/",
    icon: <FaLinkedin size={30} />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/prospectsdiv/",
    icon: <FaInstagram size={30} />,
  },
];

export const Icons = [
  { icon: <FaFacebook size={30} />, link: "#" },
  { icon: <FaTwitter size={30} />, link: "#" },
  { icon: <FaGithub size={30} />, link: "#" },
  { icon: <FaLinkedin size={30} />, link: "#" },
  { icon: <FaInstagram size={30} />, link: "#" },
];
