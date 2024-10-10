"use client";

import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react"; // Import useEffect
// import {
//   IoBarChartOutline,
//   IoLogoBitcoin,
//   IoLogoDiscord,
//   IoLogoFacebook,
//   IoLogoGithub,
//   IoLogoInstagram,
//   IoLogoReddit,
//   IoLogoTwitter,
// } from "react-icons/io5";
// import { BsTelegram } from "react-icons/bs";

// function Community() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // Animation duration in ms
//     });
//   }, []);

//   return (
//     <section className="mt-24">
//       <div className="container-div">
//         <div
//           className="border-2 border-black text-center bg-[#1A1919] rounded-3xl p-8"
//           data-aos="fade-up" // Add fade-up animation to the container
//         >
//           <h2 className="secondary-heading mb-24" data-aos="fade-up">
//             Stay in the Loop!
//           </h2>
//           <p className="text-lg md:text-xl text-white" data-aos="fade-up">
//             Become part of the $PEPE family—follow us for the latest updates,
//             exclusive content, and vibrant discussions. Dive in and connect with
//             like-minded enthusiasts today!
//           </p>
//           <div className="community-section" data-aos="fade-up">
//             <p className="text-white">Join Our Pepecoin Community today!</p>
//             <div class="icon-wrapper flex justify-center items-center">
//               <a href="https://t.me/PEPELAYER_2" class="para-level-3">
//                 <BsTelegram data-aos="fade-up" className="main-icon" />
//               </a>
//             </div>
//             <div className="social-icons flex justify-center items-center">
//               <IoLogoFacebook data-aos="fade-up" />
//               <IoLogoInstagram data-aos="fade-up" />
//               <IoLogoTwitter data-aos="fade-up" />
//               <IoLogoBitcoin data-aos="fade-up" />

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Community;

import "@/app/_styles/style.css";
function Community() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);
  return (
    <section class="community mt-16">
      <div class="stay-in-loop">
        <h2 className="text-[#e1a313]" data-aos="fade-up">
          STAY IN THE LOOP!
        </h2>
        <p className="text-[#ccc]" data-aos="fade-up">
          Become part of the $PEPE family—follow us for the latest updates,
          exclusive content, and vibrant discussions. Dive in and connect with
          like-minded enthusiasts today!
        </p>
        <h3 className="text-white" data-aos="fade-up">
          Join Our Pepecoin Community today!
        </h3>

        <div class="social-icons-cn " data-aos="fade-up">
          <a href="#" className="flex justify-center items-center">
            <i class="fab fa-telegram-plane " data-aos="fade-up"></i>
          </a>
        </div>

        <div class="social-media-links-cn">
          <a href="#">
            <i class="fab fa-facebook" data-aos="fade-up"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram" data-aos="fade-up"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter" data-aos="fade-up"></i>
          </a>
          <a href="#">
            <i class="fab fa-bitcoin" data-aos="fade-up"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Community;
