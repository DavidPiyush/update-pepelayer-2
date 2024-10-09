import "@/app/_styles/style.css";
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
  return (
    <section className="mt-24">
      <div className="container-div">
        <div className=" border-2 border-black text-center bg-[#1A1919] rounded-3xl p-8">
          <h2 className="secondary-heading mb-24 ">Stay in the Loop!</h2>
          <p className="text-lg md:text-xl text-white">
            Become part of the $PEPE family—follow us for the latest updates,
            exclusive content, and vibrant discussions. Dive in and connect with
            like-minded enthusiasts today!
          </p>
          <div className="community-section">
            <p className="text-white">Join Our Pepecoin Community today!</p>
            <div className="social-icons flex justify-center items-center">
              <IoLogoReddit />
              <IoLogoGithub />
              <BsTelegram />
              <IoLogoDiscord />
              <IoLogoTwitter />
              <IoLogoBitcoin />
              <IoBarChartOutline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
