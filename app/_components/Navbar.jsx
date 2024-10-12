"use client";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import Button from "./Button";
import { signIn, signOut } from "next-auth/react";
import { createUser, userData } from "../_data/FetchAPI";
import tokenGenerator from "../_utlis/tokenGenerator";
import { useEffect, useState } from "react";
import MiniSpinner from "./MiniSpinner";

const token = tokenGenerator();
function Navbar({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const { address, isConnected } = useAccount();
  const [isSignIn, setIsSignIn] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  // address of wallet
  const ethereumId = address?.toLowerCase();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(address);

  // THIS FOR SIGIN
  const handleSignIn = async () => {
    if (isConnected && address) {
      try {
        // Pass address and setIsLoading to userData

        const existingUser = await userData(ethereumId, setIsSignIn);

        if (existingUser) {
          const res = await signIn("credentials", {
            address,
            redirect: false,
          });

          if (res?.error) {
            toast.error("Signed in Failed!⛔⛔⛔");
          } else {
            toast.success("Signed in successfully! 🚀🚀🚀");
          }
        } else {
          toast.error("User does not exist. Please create an account.");
        }
      } catch (error) {
        toast.error("An error occurred during sign in.");
      }
    }
  };

  useEffect(() => {
    if (isConnected && address) {
      handleSignIn();
    }
    // setIsUserChecked(true); // Set user check to true after effect runs
  }, [isConnected, address]);

  // THIS FOR LOGOUT
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    toast.success("signed out sucessfully!");
  };

  if (!isConnected && !address) {
    handleSignOut();
  }

  // THIS FOR CREATING ACCOUNT

    const handleCreateUser = async () => {
      const userDetails = {
        ethereumId: address.toLowerCase(),
        referralCode: token,
      };

      try {
        // Pass address and setIsLoading to userData
        const existingUser = await userData(
          address.toLowerCase(),
          setIsCreatingUser
        );

        if (existingUser) {
          toast.error("User already exists. Please log in.");
        } else {
          const result = await createUser(userDetails, setIsCreatingUser);
          if (result) {
            toast.success("User created successfully!");
            await handleSignIn();
          } else {
            toast.error("Failed to create user.");
          }
        }
      } catch (error) {
        toast.error("An error occurred while creating the user.");
        console.log(error)
      }
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
            <ConnectButton />
            {isConnected &&
              address && ( // Check if user status is verified
                <>
                  <Button
                    onClick={handleSignIn}
                    disabled={isSignIn.signIn}
                    className="bg-[#1a1b1f] hover:bg-[#2d2f36] create-btn text-base"
                  >
                    {isSignIn.signIn ? <MiniSpinner /> : "Login"}
                  </Button>
                  <Button
                    onClick={handleCreateUser}
                    disabled={isCreatingUser.createUser}
                    className="bg-[#1a1b1f] hover:bg-[#2d2f36] create-btn text-base"
                  >
                    {isCreatingUser.createUser ? (
                      <MiniSpinner />
                    ) : (
                      "Create User"
                    )}
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

// "use client";
// import Link from "next/link";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useAccount, useDisconnect } from "wagmi";
// import { usePathname } from "next/navigation";
// import { toast } from "react-hot-toast";
// import Button from "./Button";
// import { signIn, signOut } from "next-auth/react";
// import { useState, useEffect } from "react";
// import { createUser, userData } from "../_data/FetchAPI";
// import tokenGenerator from "../_utlis/tokenGenerator";
// import MiniSpinner from "./MiniSpinner";

// const token = tokenGenerator();

// function Navbar({ isOpen, setIsOpen }) {
//   const pathname = usePathname();
//   // const [isLoading, setIsLoading] = useState({
//   //   signIn: false,
//   //   createUser: false,
//   // });
//   const [isSignIn, setIsSignIn] = useState(false);
//   const [isCreatingUser, setIsCreatingUser] = useState(false);
//   const { address, isConnected } = useAccount();
//   const { disconnect } = useDisconnect();
//   const [isUserChecked, setIsUserChecked] = useState(false); // New state to track user check

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     if (isConnected && address) {
//       handleSignIn();
//     }
//     setIsUserChecked(true);
//   }, [isConnected, address]);

//   const handleSignIn = async () => {
//     if (isConnected && address) {
//       try {
//         // Pass address and setIsLoading to userData
//         const existingUser = await userData(address.toLowerCase(), setIsSignIn);

//         if (existingUser) {
//           const res = await signIn("credentials", { address, redirect: false });

//           if (res?.error) {
//             toast.error("Signed in Failed!⛔⛔⛔");
//           } else {
//             toast.success("Signed in successfully! 🚀🚀🚀");
//           }
//         } else {
//           toast.error("User does not exist. Please create an account.");
//         }
//       } catch (error) {
//         toast.error("An error occurred during sign in.");
//       }
//     }
//   };

//   const handleSignOut = async () => {
//     await signOut({ redirect: false });
//     toast.success("Signed out successfully!");
//   };

//   const handleDisconnect = () => {
//     disconnect();
//     handleSignOut();
//   };

//   const handleCreateUser = async () => {
//     const userDetails = {
//       ethereumId: address.toLowerCase(),
//       referralCode: token,
//     };

//     try {
//       // Pass address and setIsLoading to userData
//       const existingUser = await userData(
//         address.toLowerCase(),
//         setIsCreatingUser
//       );

//       if (existingUser) {
//         toast.error("User already exists. Please log in.");
//       } else {
//         const result = await createUser(userDetails, setIsLoading);
//         if (result) {
//           toast.success("User created successfully!");
//           await handleSignIn();
//         } else {
//           toast.error("Failed to create user.");
//         }
//       }
//     } catch (error) {
//       toast.error("An error occurred while creating the user.");
//     }
//   };

//   useEffect(() => {
//     if (isConnected && address) {
//       handleSignIn();
//     }
//     setIsUserChecked(true); // Set user check to true after effect runs
//   }, [isConnected, address]);

//   return (
//     <nav
//       className={`lg:flex ${
//         isOpen ? "block" : "hidden"
//       } lg:block transition-all duration-300`}
//     >
//       <ul className="flex gap-12 items-center lg:flex-row flex-col">
//         {pathname === "/" && (
//           <>
//             <li>
//               <Link
//                 href="#tokenomics"
//                 className="nav-link"
//                 onClick={toggleMenu}
//               >
//                 TOKENOMICS
//               </Link>
//             </li>
//             <li>
//               <Link href="#roadmap" className="nav-link" onClick={toggleMenu}>
//                 Roadmap
//               </Link>
//             </li>
//             <li>
//               <Link href="#how" className="nav-link">
//                 How to Buy
//               </Link>
//             </li>
//             <Button className={"px-10 bg-primary-btn-color"}>
//               <Link href="/buy" onClick={toggleMenu}>
//                 Buy Now
//               </Link>
//             </Button>
//           </>
//         )}

//         {pathname === "/airDrop" && (
//           <>
//             <ConnectButton />
//             {isUserChecked &&
//               isConnected &&
//               address && ( // Check if user status is verified
//                 <>
//                   <Button
//                     onClick={handleSignIn}
//                     disabled={isSignIn.signIn}
//                     className="bg-[#1a1b1f] hover:bg-[#2d2f36] create-btn text-base"
//                   >
//                     {isSignIn.signIn ? <MiniSpinner /> : "Login"}
//                   </Button>
//                   <Button
//                     onClick={handleCreateUser}
//                     disabled={isCreatingUser.createUser}
//                     className="bg-[#1a1b1f] hover:bg-[#2d2f36] create-btn text-base"
//                   >
//                     {isCreatingUser.createUser ? (
//                       <MiniSpinner />
//                     ) : (
//                       "Create User"
//                     )}
//                   </Button>
//                 </>
//               )}
//           </>
//         )}

//         {pathname === "/buy" && (
//           <>
//             <li>
//               <Link href="/" className="nav-link" onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="#roadmap" className="nav-link" onClick={toggleMenu}>
//                 Roadmap
//               </Link>
//             </li>
//             <ConnectButton />
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

export default Navbar;
