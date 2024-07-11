import React from "react";
import Image from "../assets/abstract-blue-background-with-beautiful-fluid-shapes-free-vector.jpg";
// import Image from "../assets/bgpattern.png";

import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaGit,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn, fadein } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12 w-full">
          {/* Text Section */}
          <div className="flex-1 text-center font-secondary lg:text-left z-10">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] text-secondary"
            >
              PROSPECTS <span>DIVISIONS</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] text-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                sequence={["Start", 2000, "Grow", 2000, "Scale", 2000]}
                speed={25}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
                style={{ color: "#FFFFFF" }}
              />
              <span className="mr-4" style={{ color: "#d7b99a" }}>
                your agency
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto xl:mx-0 text-secondary"
              style={{ fontSize: "24px" }} /* Adjust the size as needed */
            >
              Let Our Vision Be A Part Of Your Vision With its innovative
              approach to lead generation and data analysis, Prospects Division
              can help companies increase their customer base, improve their
              sales process, and boost their revenue growth.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/** socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.instagram.com/prospectsdiv/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/prospects-division-54b541272/">
                <FaLinkedin />
              </a>
              {/* <a href="#">
                <FaDribbble />
              </a> */}
            </motion.div>
          </div>
          {/* Image Section */}

          {/**image */}
          {/* <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="bg-cover hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] z-1"
          >
            <img src={Image} alt="" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
