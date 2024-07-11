import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="section bg-about bg-no-repeat bg-cover bg-left overflow-hidden"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/*img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
            style={{ backgroundSize: "50%" }}
          ></motion.div>
          {/*text*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-3xl font-bold text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              I'm a web & mobile app developer and designer with over 4 years
              experience and I currently work as a software engineer.
            </h3>
            <p className="mb-6">
              I am dedicated to crafting a personalized web, mobile or software
              solution that precisely aligns with your unique needs. With my
              expertise, your project will not only meet but exceed your
              expectations, ensuring a tailored and effective application for
              your personal or business requirements
            </p>
            {/**stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div className="flex flex-col items-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={1500} duration={3.75} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Businesses <br />
                  Scaled
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={140} duration={3.75} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={500} suffix="+" duration={3.75} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Businesses <br />
                  Scaled
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                Our Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
