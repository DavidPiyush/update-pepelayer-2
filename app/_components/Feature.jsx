import Image from "next/image";
import featureBg from "@/public/feature-bg.jpeg";
import Button from "./Button";

function Feature() {
  return (
    <section className="mt-24  ">
      <div className="container-div py-12 grid grid-cols-2 gap-20 items-center">
        <div className="relative ">
          <Image
            src={featureBg}
            alt="feature bg"
            placeholder="blur"
            quality={50}
            className="img-box "
          />
        </div>
        <div className="space-y-10">
          <h1 className="text-7xl font-bold gradient-text-h1 leading-tight">
            Pepe Layer <br /> Token
          </h1>
          <Button className="w-[363px] h-20 p-4 rounded-2xl text-3xl">
            Comming Soon
          </Button>
          <p className="text-lg md:text-xl text-[#eee]">
            Stay tuned for something amazing!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
