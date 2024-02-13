"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
  <span className="text-transparent bg-clip-text bg-white" style={{ backgroundImage: 'white', WebkitBackgroundClip: 'text', color: 'transparent' }}>
    Hi, I&apos;m{" "}
  </span>
  <br />
  <TypeAnimation
    sequence={[
      "Khyathi Kancharla",
      1000,
      " A Web Developer",
      1000,
      " A Logo Designer",
      1000,
      "Tech Enthusiast"
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    style={{ backgroundImage: 'linear-gradient(to right, #ff8a00, #e52e71)', WebkitBackgroundClip: 'text', color: 'transparent' }}
  />
</h1>
<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           I am computer science and engineering major student at K L University
          </p>
          <div>
         
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#ffffff] w-[250px] h-[250px] lg:w-[330px] lg:h-[330px] relative">
            <Image
              src="/images/herosection_girlimg.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
