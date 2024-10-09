"use client";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast"; // Import toast
import featureBg from "@/public/feature-bg.jpeg";
import Button from "./Button";
import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

function Feature() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  const handleCopy = async (address) => {
    try {
      await navigator.clipboard.writeText(address); // Copy the address to clipboard
      toast.success("Address copied!"); // Show success message
    } catch (err) {
      toast.error("Failed to copy the address."); // Handle any copy errors
    }
  };

  return (
    <section className="" id="roadmap">
      <div className="container-div py-12 grid grid-cols-2 gap-20 items-center">
        <div className="relative" data-aos="fade-left">
          {" "}
          {/* AOS applied here */}
          <Image
            src={featureBg}
            alt="feature bg"
            placeholder="blur"
            quality={50}
            className="img-box"
          />
        </div>
        <div className="space-y-10" data-aos="fade-left">
          {" "}
          {/* AOS applied here */}
          <h1 className="text-7xl font-bold text-[#e1a313] leading-tight">
            Pepe Layer <br /> Token
          </h1>
          <div className="space-y-4">
            {/* Second button */}
            <Button
              className="p-3 pr-0 text-base bg-[#000] hover:bg-black flex items-center"
              onClick={() =>
                handleCopy("0x5E20B1d17376A10c66f539004bC970Af59F2DC08")
              }
            >
              <span className="bg-yellow-600 p-3 rounded-s-lg">
                0x5E20B1d17376A10c66f539004bC970Af59F2DC08
              </span>
              <span className="bg-green-800 p-3 px-4 rounded-e-lg flex gap-2 items-center">
                <IoCopyOutline />
                COPY
              </span>
            </Button>
          </div>
          <p className="text-lg md:text-xl text-[#eee]">
            Stay tuned for something amazing!
          </p>
        </div>
      </div>
      {/* Toaster to display notifications */}
      <Toaster />
    </section>
  );
}

export default Feature;
