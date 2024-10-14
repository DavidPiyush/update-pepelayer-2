// // "use client";
// // import { useState } from "react";

// // import "@/app/_styles/style.css";
// // import { handleCopy } from "../_utlis/CopyToClipboard";
// // import { Toaster } from "react-hot-toast";


// // function ReferInfo({ referCode, referUserCount, referBalance }) {
// //   // const [token ,setToken] = useState([0])

// //   const baseUrl = window?.location.origin;
// //   //token.length>0 ? token: ""

// //   const referLink = referCode ? `${baseUrl}/referral?code=${referCode}` : "";

// //   return (
// //     <section id="referralInfo" class="section-el ">
// //       <div class="infoBox ">
// //         <h3>Your Referral Link</h3>
// //         <input
// //           type="text"
// //           id="referralLink"
// //           class="input"
// //           readOnly=""
// //           defaultValue={referLink}
// //         />
// //         <button
// //           id="copyLinkButton button"
// //           onClick={() => handleCopy(referLink)}
// //         >
// //           Copy Link
// //         </button>
// //       </div>
// //       <div class="infoBox">
// //         <h3>Your Referrals</h3>
// //         <p>
// //           <span id="referralCount">{referUserCount || 0}</span> Friends Referred
// //         </p>
// //       </div>
// //       <div class="infoBox">
// //         <h3>Earnings From Referrals</h3>
// //         <p>
// //           <span id="referralEarnings">{referBalance || 0}</span> Points Earned
// //         </p>
// //       </div>
// //       <Toaster />
// //     </section>
// //   );
// // }

// // export default ReferInfo;


// "use client";
// import { useEffect, useState } from "react";

// import "@/app/_styles/style.css";
// import { handleCopy } from "../_utlis/CopyToClipboard";
// import { Toaster } from "react-hot-toast";
// import { useSession } from "next-auth/react";

// function ReferInfo() {
//   const [baseUrl, setBaseUrl] = useState("");
//   const [referLink, setReferLink] = useState("");
//   const [referCode, setReferCode] = useState(null);
//   const [referBalance, setReferBalance] = useState(null);
//   const [referUserCount, setReferUserCount] = useState(null);
//   const {data:session,status} = useSession()
//   const ethereumId = session?.user?.ethereumId?.toLowerCase();
//    const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     // Set baseUrl only in the client environment
//     const url = window.location.origin;
//     setBaseUrl(url);

//     if (referCode) {
//       setReferLink(`${url}/referral?code=${referCode}`);
//     }
//   }, [referCode]);


//   const fetchUserData = async()=>{
//     try{
//       setLoading(true)
//       const user = await userData(ethereumId,setLoading)
//       if (user) {
//         setReferCode(user.referralCode);
//         setReferBalance(user.referEarn);
//         setReferUserCount(user.referredUsers.length);
//         setTotalEarnDay(user.totalEarnDay);
//         setTotalBalance(user.totalBalance);
//       }
//     }catch(error){
//       console.error("Error fetching user data:", error);
//       setLoading(false);
//     }
//   }
  
//   useEffect(()=>{
//     fetchUserData()
//   },[fetchUserData])

//   return (
//     <section id="referralInfo" className="section-el">
//       <div className="infoBox">
//         <h3>Your Referral Link</h3>
//         <input
//           type="text"
//           id="referralLink"
//           className="input"
//           readOnly
//           value={referLink} // Use value instead of defaultValue
//         />
//         <button id="copyLinkButton" onClick={() => handleCopy(referLink)}>
//           Copy Link
//         </button>
//       </div>
//       <div className="infoBox">
//         <h3>Your Referrals</h3>
//         <p>
//           <span id="referralCount">{referUserCount || 0}</span> Friends Referred
//         </p>
//       </div>
//       <div className="infoBox">
//         <h3>Earnings From Referrals</h3>
//         <p>
//           <span id="referralEarnings">{referBalance || 0}</span> Points Earned
//         </p>
//       </div>
//       <Toaster />
//     </section>
//   );
// }

// export default ReferInfo;


"use client";
import { useEffect, useState } from "react";
import "@/app/_styles/style.css";
import { handleCopy } from "../_utlis/CopyToClipboard";
import { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { userData } from "../_data/FetchAPI"; // Ensure to import the userData function

function ReferInfo() {
  const [baseUrl, setBaseUrl] = useState("");
  const [referLink, setReferLink] = useState("");
  const [referCode, setReferCode] = useState(null);
  const [referBalance, setReferBalance] = useState(null);
  const [referUserCount, setReferUserCount] = useState(null);
  const { data: session, status } = useSession();
  const ethereumId = session?.user?.ethereumId?.toLowerCase();
  const [loading, setLoading] = useState(true);

  // State to store previous values
  const [prevReferCode, setPrevReferCode] = useState(null);
  const [prevReferBalance, setPrevReferBalance] = useState(null);
  const [prevReferUserCount, setPrevReferUserCount] = useState(null);

  // Fetch user data whenever session changes
  useEffect(() => {
    if (status === "authenticated" && ethereumId) {
      fetchUserData();
    } else {
      resetState(); // Reset state if not authenticated
    }
  }, [status, ethereumId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const user = await userData(ethereumId, setLoading); // Fetch user data
      if (user) {
        // Store previous values
        setPrevReferCode(referCode);
        setPrevReferBalance(referBalance);
        setPrevReferUserCount(referUserCount);

        // Update current values
        setReferCode(user.referralCode);
        setReferBalance(user.referEarn);
        setReferUserCount(user.referredUsers.length);

        // Compare with previous values and log changes
        if (referCode !== user.referralCode) {
          console.log(
            "Referral Code changed:",
            referCode,
            "→",
            user.referralCode
          );
        }
        if (referBalance !== user.referEarn) {
          console.log(
            "Referral Balance changed:",
            referBalance,
            "→",
            user.referEarn
          );
        }
        if (referUserCount !== user.referredUsers.length) {
          console.log(
            "Referral User Count changed:",
            referUserCount,
            "→",
            user.referredUsers.length
          );
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Reset the state if the user is not authenticated
  const resetState = () => {
    setReferCode(null);
    setReferBalance(null);
    setReferUserCount(null);
    setReferLink("");
  };

  // Update the base URL and referral link whenever referCode changes
  useEffect(() => {
    const url = window.location.origin; // Get base URL
    setBaseUrl(url);

    if (referCode) {
      setReferLink(`${url}/referral?code=${referCode}`); // Create referral link
    }
  }, [referCode]);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center bg-[#333] gap-5">
        <p className="text-base text-white">Loading data...</p>
      </div>
    );
  }

  return (
    <section id="referralInfo" className="section-el">
      <div className="infoBox">
        <h3>Your Referral Link</h3>
        <input
          type="text"
          id="referralLink"
          className="input"
          readOnly
          value={referLink} // Use value instead of defaultValue
        />
        <button id="copyLinkButton" onClick={() => handleCopy(referLink)}>
          Copy Link
        </button>
      </div>
      <div className="infoBox">
        <h3>Your Referrals</h3>
        <p>
          <span id="referralCount">{referUserCount || 0}</span> Friends Referred
        </p>
      </div>
      <div className="infoBox">
        <h3>Earnings From Referrals</h3>
        <p>
          <span id="referralEarnings">{referBalance || 0}</span> Points Earned
        </p>
      </div>
      <Toaster />
    </section>
  );
}

export default ReferInfo;
