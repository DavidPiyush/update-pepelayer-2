"use client";
import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={` ${className} z-50 relative transition-all duration-300`}
      id="header-el"
    >
      <div className="flex justify-between items-center max-w-md md:max-w-2xl lg:max-w-7xl mx-auto px-8 py-5">
        <Logo />
        <button
          className="lg:hidden p-2 rounded focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {/* Icon for mobile menu (you can use an icon library here) */}
          <svg
            className="w-6 h-6 stroke-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* <nav className={`lg:block ${isOpen ? "block" : "hidden"}`}> */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {/* </nav> */}
    </header>
  );
}

export default Header;
