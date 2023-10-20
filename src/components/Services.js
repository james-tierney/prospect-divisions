import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/close-up-of-computer-programmer-coding.webp";

// services data
const services = [
  {
    name: "Web & Mobile Development",
    description:
      "Bringing Your Ideas to Life in the Digital Realm, From web to mobile, I bring life to your concepts, delivering seamless and responsive experiences. Explore the endless possibilities of web and mobile development.",
    link: "Learn More",
  },
  {
    name: "Software Applications",
    description:
      "I craft software applications that empower businesses and individuals. With years of experience, I specialize in developing effective solutions to address a wide range of needs, bringing value to every client.",
    link: "Learn More",
  },
  {
    name: "UI/UX Design",
    description:
      "Elevating User Experiences through Innovative Design. I'm dedicated to creating intuitive, user-centric designs that captivate and engage. Discover how thoughtful UI/UX design can transform your digital journey.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/**text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I Develop and Design robust applications whether it be for the web
              for mobile or a business application
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          {/**services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/** service list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 md:h-[146px] mb-[38px] flex flex-col md:flex-row items-center"
                    key={index}
                  >
                    <div className="md:max-w-[476px] p-[10px] md:p-[20px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3 md:mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary text-m leading-normal md:leading-tight whitespace-normal md:whitespace-pre-line max-w-[476px] overflow-hidden">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-1 items-start md:items-center md:items-stretch">
                      <div className="md:w-9 md:h-9 mt-3 md:mt-0">
                        <a href="#" className="btn w-9 h-9">
                          <BsArrowUpRight />
                        </a>
                      </div>
                      <a
                        href="#"
                        className="text-gradient text-sm md:self-start md:self-stretch"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
