"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css";

import Button from "./Button";
import Link from "next/link";

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
            Welcome to the world of $PEPE, the ultimate meme coin poised to
            redefine the crypto landscape! With an astonishing supply of 100
            billion tokens, $PEPE is not just another cryptocurrency; it’s a
            movement. Our robust ecosystem features 65% of liquidity locked for
            one full year, ensuring unwavering stability and fostering investor
            confidence. Plus, our innovative 5% transaction tax fuels continuous
            growth and empowers community-driven initiatives. Join a vibrant,
            passionate community that celebrates the playful spirit of memes
            while unlocking real-world potential. Embrace the $PEPE experience
            and ride the wave of innovation, where every transaction contributes
            to a brighter, more prosperous future in the crypto universe!
          </p>
          <Button className="px-24 bg-primary-btn-color">
            <Link href="/airDrop">Join AirDrop</Link>
          </Button>
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
