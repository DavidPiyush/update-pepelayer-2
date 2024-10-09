'use client'
import Link from "next/link";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react"; // Import useEffect

import "@/app/_styles/style.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  return (
    <footer className="footer mt-24">
      <div className="container-div grid grid-cols-3 justify-items-center">
        <div data-aos="fade-up">
          {" "}
          {/* Add fade-up animation to the first column */}
          <ul className="footer-main-list">
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                $PEPE Whitepaper
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                Solidproof Certification
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                Coinsult Certification
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                Help Center
              </Link>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up">
          {" "}
          {/* Add fade-up animation to the second column */}
          <ul className="footer-main-list">
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                User Agreement
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                Privacy &amp; Cookies
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                Risk Advisory
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                User Commitments
              </Link>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up">
          {" "}
          {/* Add fade-up animation to the third column */}
          <ul className="footer-main-list">
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-base cursor-pointer">
                Telegram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright" data-aos="fade-up">
        {" "}
        {/* Add fade-up animation to the copyright section */}
        <p>
          &copy; {`${new Date().getFullYear()}`} Pepe Layer2 Campaign. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
