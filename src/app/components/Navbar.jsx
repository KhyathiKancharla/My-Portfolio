"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import About from "./About";
import Contact from "./Contact";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#000000] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
       
      <Image
              src="/images/herosection_girlimg.png"
              alt="hero image"
              className="absolute"
              width={50}
              height={50}
            /> 
            <Link
          href={"/"}
          className="text-2xl md:text-3xl text-white font-semibold ml-14"
        >
          Khyathi's Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
         
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    
    </nav>
  )
}

export default Navbar;