import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto bg-primary">
      {/* Text content — z-10 keeps it above the canvas layer */}
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-electric-purple">{personalInfo.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {personalInfo.role} with 2+ YOE in Java, Spring Boot, and microservices.
            <span className="sm:hidden"><br /></span>
            Specialized in scalable backend systems. Solved 3000+ DSA problems, LeetCode Top 10%.
          </p>
        </div>
      </div>

      {/* 3D Computer model */}
      <div className="absolute inset-0 w-full h-full">
        <ComputersCanvas />
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
