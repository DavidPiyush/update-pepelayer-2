import Image from "next/image";

import About from "./_components/About";
import Community from "./_components/Community";
import Contact from "./_components/Contact";
import Feature from "./_components/Feature";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import JoinAirdrop from "./_components/JoinAirdrop";
import Refer from "./_components/Refer";
import Roadmap from "./_components/Roadmap";
import bgImage from "@/public/hero-bg-1.jpg";

export default function Home() {
  return (
    <main className="bg-[#000]">
      <section className="relative z-50">
        {/* Background Image */}
        <Image
          fill
          src={bgImage}
          alt="money-background"
          placeholder="blur"
          quality={50}
          className="object-cover object-top"
        />

        {/* White Background Layer with Blur */}
        <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-3xl z-10"></div>

        {/* Content (Header and Hero) */}
        <Header />
        <Hero />
      </section>

      <Feature />
      <About />
      <Roadmap />
      <JoinAirdrop />
      <Refer />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
}

//bg-[#e6f8f3
