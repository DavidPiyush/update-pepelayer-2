"use client";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi"; // Use Wagmi's useAccount to get connected user
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast"; // Import toast for notifications
import Button from "./Button";

function Navbar({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const { address, isConnected } = useAccount(); // Get user's address and connection status

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = async () => {
    if (isConnected && address) {
      // Initiate the sign-in process
      const result = await signIn("credentials", {
        address,
        redirect: false, // Avoid redirect after sign-in
      });

      console.log(result);
      if (result?.error) {
        toast.error("Sign-in failed!");
      } else {
        toast.success("Signed in successfully!");
      }
    } else {
      toast.error("Please connect your wallet first!");
    }
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    toast.success("Signed out successfully!");
  };

  return (
    <nav
      className={`lg:flex ${
        isOpen ? "block" : "hidden"
      } lg:block transition-all duration-300`}
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
            <ConnectButton /> {/* RainbowKit's ConnectButton */}
            {/* Show Sign In/Sign Out based on connection status */}
            {isConnected && (
              <>
                <Button
                  className={"px-10 bg-secondary-btn-color"}
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <Button
                  className={"px-10 bg-secondary-btn-color"}
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            )}
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
