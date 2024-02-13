"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
   <section className="text-white" id="about">
  <div className="md:grid md:grid-cols-2 gap-2 items-center py-8 px-4 xl:gap-8 sm:py-8 xl:px-8">
    <Image src="/images/myimage.png" width={300} height={300}   style={{borderRadius:'20%'}}/>
    
    
    <div className=" text-left flex flex-col h-full">
      <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
      <p>
        I am a Frontend developer with a passion for creating
        interactive and responsive web applications. I have experience
        working with React, HTML, CSS, JavaScript, and Git. I am a quick learner and I am always
        looking to expand my knowledge and skill set. I am a team player and
        I am excited to work with others to create amazing applications.
      </p>
    </div>
  </div>
</section>

  );
};

export default AboutSection;