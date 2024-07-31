"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Links } from "@/links";

const Navbar = () => {
  const [current, setCurrent] = useState<number | null>(null);

  const handleMouseEnter = (event: number) => {
    setCurrent(event);
  };

  const handleMouseLeave = () => {
    setCurrent(null);
  };
  return (
    <div className=" flex bg-white text-black m-5 flex-row items-center justify-between w-full mx-4 md:mx-0 lg:mx-10">
      <Link href="/">
        <p
        className={`text-2xl cursor-pointer ${current === -1 ? "text-blue-700": "text-black"}`}
        onMouseEnter={()=>handleMouseEnter(-1)}
        onMouseLeave={handleMouseLeave}
        >Vargas</p>
      </Link>
      <div className=" flex items-center justify-between gap-2 md:gap-5 px lg:gap-10 px-10 text-blue-700">
        {Links.map((link, index) => (
          <Link
            href={link === "Login" ? "/login" : "/"}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={current === index ? "text-blue-700" : "text-black"}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
