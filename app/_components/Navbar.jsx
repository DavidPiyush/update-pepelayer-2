"use client";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast"; // Import toast for notifications

import Button from "./Button";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="">
      <ul className="flex gap-12 items-center">
        {pathname === "/" && (
          <>
            <li>
              <Link href="#" className="nav-link">
                TOKENOMICS
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link">
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="#how" className="nav-link">
                How to Buy
              </Link>
            </li>
            <Button className={"px-10"}>
              <Link href="/buy">Buy Now</Link>
            </Button>
          </>
        )}

        {pathname === "/airDrop" && (
          <>
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link">
                Roadmap
              </Link>
            </li>
          </>
        )}

        {pathname === "/buy" && (
          <>
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link">
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
