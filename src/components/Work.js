import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ReactPlayer from "react-player";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const VideoPlayer = ({ url, category, title, summary }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
      onClick={handleTogglePlay}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      <ReactPlayer
        height="100%"
        width="100%"
        url={url}
        playing={isPlaying}
        controls
      />
      <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
        <div className="text-gradient">{category}</div>
        <div className="text-3xl text-white" style={{ marginTop: "1rem" }}>
          {title}
        </div>
        <div className="text-white mt-4">{summary}</div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/**text */}
            <div className="mb-8">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-6 md:mb-16">
                A brief glimpse into my portfolio, showcasing projects across
                various domains
              </p>
              <button className="btn btn-sm">
                More Projects addded to site soon!
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-96 h-[300px] md:h-[400px]"
          >
            <VideoPlayer
              url="https://www.youtube.com/watch?v=O9YjB28a14I"
              category="Web Development"
              title="Study Zone (All in one study space)"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-96 h-[300px] md:h-[400px]"
          >
            <VideoPlayer
              url="https://www.youtube.com/watch?v=y2LXg6UzBZ4"
              category="Web Development"
              title="Art Listing Site"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-96 h-[300px] md:h-[400px]"
          >
            <VideoPlayer
              url="https://www.youtube.com/shorts/wx9sMekQCMo"
              category="Mobile App"
              title="Sleep Tracking (Moonrise)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
