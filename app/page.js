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

export default function Home() {
  return (

    <main className="bg-[#000] overflow-hidden overflow-x-hidden">
      <Header />
      <Hero />
      <Feature />
      <About />
      <Roadmap />
      <JoinAirdrop />
      {/* <Refer /> */}
      <Community />
      <Contact />
      <Footer />
    </main>
  );
}

//bg-[#e6f8f3
