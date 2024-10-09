"use client";
import Image from "next/image";
import { useEffect } from "react"; // Import useEffect
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

import { cardData } from "../_data/card";
import Button from "./Button";
import cardImage from "@/public/pattern-how.png";

function JoinAirdrop() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  return (
    <section className="my-24 relative" id="how">
      <div className="relative h-screen">
        <Image
          src={cardImage}
          alt="background"
          fill
          quality={50}
          palaceholder={"blur"}
          className="opacity-20"
        />
      </div>

      <div className="absolute top-0 flex w-full flex-col items-center justify-center">
        <h2
          className="text-6xl font-bold text-[#e1a313] leading-tight uppercase text-center py-12"
          data-aos="fade-in"
        >
          How to Buy
        </h2>
        <div className="container-div grid grid-cols-2 gap-6">
          {cardData?.map((data) => (
            <article
              className="w-[566px] h-[280px] gradient-card p-6 space-y-2"
              key={data.step}
              data-aos="fade-up" // Add fade-up animation to each card
            >
              <h3 className="heading-h3 font-bold">Step {data.step}</h3>
              <h3 className="text-white font-bold">{data.title}</h3>
              <p className="text-[#ccc] py-2">{data.description}</p>
              {data.button && (
                <Button className="px-20 py-2 text-base">{data.button}</Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinAirdrop;
