import Image from "next/image";
import Link from "next/link";


// import heroImage from "@/public/hero.jpg"
function Hero() {
  return (
    <section className=" h-[90vh]">
      {/* Green overlay */}
      {/* <div className="absolute inset-0 bg-green-950 opacity-50 z-10"></div> */}

      {/* Background Image */}

      {/* Content Section */}
      <div className="relative z-20 flex flex-col md:flex-row items-center  h-full  container-div gap-8">
        {/* Text Content */}
        <article className="max-w-md text-center md:text-left">
          <h1 className="text-5xl md:text-7xl my-12 font-bold heading-primary">
            PEPE <br /> LAYER 2
          </h1>
          <p className="text-lg md:text-xl text-white">
            Pepe Layer2 Memecoin is a cryptocurrency inspired by the popular
            internet meme character Pepe the Frog. Created as a parody and a nod
            to meme culture, Pepe Memecoin blends the playful, irreverent spirit
            of online memes with the serious world of digital currencies.
          </p>

          {/* Social Links */}
          <div className="flex my-12 gap-12 justify-center md:justify-start">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={54}
                height={54}
                fill="currentColor"
                className="bi bi-twitter-x fill-[#e1a313]"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={54}
                height={54}
                fill="currentColor"
                className="bi bi-telegram fill-[#e1a313]"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
              </svg>
            </Link>
          </div>
        </article>

        {/* Hero Image */}
        <article className="relative w-full h-[80vh]">
          {/* <Image
            src={heroImage}
            alt="hero image"
            placeholder="blur"
            fill
            // objectFit="contain"
            quality={80}
            className="object-right object-fit "
          /> */}
        </article>
      </div>
    </section>
  );
}

export default Hero;
