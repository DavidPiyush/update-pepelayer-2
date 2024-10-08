/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "./Button";

import AboutImg from "@/public/about.jpeg";

function About() {
  return (
    <section className="my-24">
      <div className="container-div grid grid-cols-2 gap-12 items-center ">
        <article className="space-y-10">
          <h2 className="text-6xl font-bold neon-heading leading-tight uppercase">
            About $pepe
          </h2>
          <p className="text-lg  text-[#eee]">
            Introducing $PEPE: The ultimate meme coin with a colossal supply of
            100 billion tokens. Our token features 65% liquidity locked for one
            year for unmatched stability and a 5% transaction tax to fuel
            continuous growth. Dive into the $PEPE experience and ride the wave
            of innovation in the crypto world!
          </p>
          <Button className="px-24">Join AirDrop</Button>
        </article>
        <article className="relative h-[600px]">
          <img
            src="/about-pattern.png"
            alt=""
            className="absolute top-[-157px]
    right-[100px]"
          />
          <Image src={AboutImg} alt="about" className="rounded-2xl shadow-lg " quality={50} fill />
        </article>
      </div>
    </section>
  );
}

export default About;
