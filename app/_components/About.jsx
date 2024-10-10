"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css";

import Button from "./Button";

// import AboutImg from "@/public/pepe-About.png";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);
  return (
    <section className="my-0">
      <div className="container-div grid lg:grid-cols-2 gap-12 items-center ">
        <article
          className="space-y-10 flex flex-col justify-center items-center p-2 lg:p-0"
          data-aos="fade-left"
        >
          <h2 className="text-3xl lg:text-6xl font-bold neon-heading leading-tight uppercase">
            About $pepe
          </h2>
          <p className="text-[12px] lg:text-lg  text-[#eee] text-center ">
            Introducing $PEPE: The ultimate meme coin with a colossal supply of
            100 billion tokens. Our token features 65% liquidity locked for one
            year for unmatched stability and a 5% transaction tax to fuel
            continuous growth. Dive into the $PEPE experience and ride the wave
            of innovation in the crypto world!
          </p>
          <Button className="px-24 bg-primary-btn-color">Join AirDrop</Button>
        </article>
        <article className="relative " data-aos="fade-left">
          <img
            src="/about-pattern.png"
            alt=""
            className="absolute top-[-157px]
    right-[100px]"
          />
          {/* <div className="relative"> */}
          {/* <div className="absolute inset-0  gradient-about opacity-50 " /> */}
          <img
            src="/About.png"
            alt="about"
            className="gradient-about p-2 lg:p-0"
          />
          {/* </div> */}
        </article>
      </div>
    </section>
  );
}

export default About;
