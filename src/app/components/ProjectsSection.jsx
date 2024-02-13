"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MorseDecipher",
    description: "A online Morse Code translator that converts text to Morse code or decode Morse back to text with user-friendly ",
    image: "images/projects/morsedecipher.png",
    tag: ["All",],
    gitUrl: "https://github.com/KhyathiKancharla/MorseDecipher",
    previewUrl: "/",
   
  },
  {
    id: 2,
    title: "KLGLUG Website",
    description: "KLGLUG (GNU/Linux Users Group) is a part of SwechaAP where students learn and explore opensource tech  ",
    image: "/images/projects/klglugwebsite.png",
    tag: ["All",],
    gitUrl: "https://code.swecha.org/KLUGLUG/glug_website",
    previewUrl: "/",

  },
  {
    id: 3,
    title: "Servico Website",
    description: "A website for a venture who provides web development,designing and marketing services ",
    image: "/images/projects/servico.png",
    tag: ["All", ],
     gitUrl: "https://code.swecha.org/KLUGLUG/glug_website",
     previewUrl: "/",
   
  },
  {
    id: 4,
    title: "Product Sales Dashboard",
    description: "This project aims to provide a comprehensive and visually appealing static dashboard for tracking and analyzing product sales using Microsoft Power BI.",
    image: "/images/projects/productsalesdashboard.jpg",
    tag: ["All", ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Career Navigator",
    description: "Career Navigator is a comprehensive platform designed to empower students seeking to change their career domain. With a focus on providing clear guidance and resources.",
    image: "/images/projects/careernavigator.png",
    tag: ["All", ],
    gitUrl: "https://github.com/KhyathiKancharla/CareerNavigator",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "My Portfolio",
    description: " I made my portfolio using nextjs and tailwind css to which helps in showcasing my previous works. ",
    image: "/images/projects/myportfolio.png",
    tag: ["All", ],
    gitUrl: "https://github.com/KhyathiKancharla/My-Portfolio",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
     
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;