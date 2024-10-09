'use client'
import "@/app/_styles/style.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react"; // Import useEffect
import {
  IoBarChartOutline,
  IoLogoBitcoin,
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoReddit,
  IoLogoTwitter,
} from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";

function Community() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  return (
    <section className="mt-24">
      <div className="container-div">
        <div
          className="border-2 border-black text-center bg-[#1A1919] rounded-3xl p-8"
          data-aos="fade-up" // Add fade-up animation to the container
        >
          <h2 className="secondary-heading mb-24" data-aos="fade-up">
            Stay in the Loop!
          </h2>
          <p className="text-lg md:text-xl text-white" data-aos="fade-up">
            Become part of the $PEPE family—follow us for the latest updates,
            exclusive content, and vibrant discussions. Dive in and connect with
            like-minded enthusiasts today!
          </p>
          <div className="community-section" data-aos="fade-up">
            <p className="text-white">Join Our Pepecoin Community today!</p>
            <div className="social-icons flex justify-center items-center">
              <IoLogoReddit data-aos="fade-up" />
              <IoLogoGithub data-aos="fade-up" />
              <BsTelegram data-aos="fade-up" />
              <IoLogoDiscord data-aos="fade-up" />
              <IoLogoTwitter data-aos="fade-up" />
              <IoLogoBitcoin data-aos="fade-up" />
              <IoBarChartOutline data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
