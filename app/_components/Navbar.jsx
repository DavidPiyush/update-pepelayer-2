"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  console.log(pathname);

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
                How to Join
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
            <Button className={"px-10"}>
              <Link href="/buy">connect to metamask</Link>
            </Button>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
