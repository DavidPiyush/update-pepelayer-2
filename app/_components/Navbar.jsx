"use client";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast"; // Import toast for notifications

import Button from "./Button";

function Navbar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`lg:flex ${
        isOpen ? "block" : "hidden"
      } lg:block  transition-all duration-300`}
    >
      <ul className="flex gap-12 items-center lg:flex-row flex-col">
        {pathname === "/" && (
          <>
            <li>
              <Link
                href="#tokenomics"
                className="nav-link"
                onClick={toggleMenu}
              >
                TOKENOMICS
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link" onClick={toggleMenu}>
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="#how" className="nav-link">
                How to Buy
              </Link>
            </li>
            <Button className={"px-10 bg-primary-btn-color"}>
              <Link href="/buy" onClick={toggleMenu}>
                Buy Now
              </Link>
            </Button>
          </>
        )}

        {pathname === "/airDrop" && (
          <>
            <li>
              <Link href="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link" onClick={toggleMenu}>
                Roadmap
              </Link>
            </li>
          </>
        )}

        {pathname === "/buy" && (
          <>
            <li>
              <Link href="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link" onClick={toggleMenu}>
                Roadmap
              </Link>
            </li>
            <ConnectButton />
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
