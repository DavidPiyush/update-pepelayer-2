import Image from "next/image";

import BuyNow from "../_components/BuyNow";
import Header from "../_components/Header";
import galaxy from "@/public/galaxy.png";
import { Toaster } from "react-hot-toast";

function page() {
  return (
    <main class="bg-black">
      <section className="relative z-50">
        {/* Background Image */}
        <Image
          fill
          src={galaxy}
          alt="money-background"
          placeholder="blur"
          quality={50}
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-3xl z-10"></div>

        <Header />
        <BuyNow />
      </section>
      <Toaster />
    </main>
  );
}

export default page;
