// "use client";
// import { useState } from "react";

// import "@/app/_styles/style.css";
// import { handleCopy } from "../_utlis/CopyToClipboard";
// import { Toaster } from "react-hot-toast";


// function ReferInfo({ referCode, referUserCount, referBalance }) {
//   // const [token ,setToken] = useState([0])

//   const baseUrl = window?.location.origin;
//   //token.length>0 ? token: ""

//   const referLink = referCode ? `${baseUrl}/referral?code=${referCode}` : "";

//   return (
//     <section id="referralInfo" class="section-el ">
//       <div class="infoBox ">
//         <h3>Your Referral Link</h3>
//         <input
//           type="text"
//           id="referralLink"
//           class="input"
//           readOnly=""
//           defaultValue={referLink}
//         />
//         <button
//           id="copyLinkButton button"
//           onClick={() => handleCopy(referLink)}
//         >
//           Copy Link
//         </button>
//       </div>
//       <div class="infoBox">
//         <h3>Your Referrals</h3>
//         <p>
//           <span id="referralCount">{referUserCount || 0}</span> Friends Referred
//         </p>
//       </div>
//       <div class="infoBox">
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

function ReferInfo({ referCode, referUserCount, referBalance }) {
  const [baseUrl, setBaseUrl] = useState("");
  const [referLink, setReferLink] = useState("");

  useEffect(() => {
    // Set baseUrl only in the client environment
    const url = window.location.origin;
    setBaseUrl(url);

    if (referCode) {
      setReferLink(`${url}/referral?code=${referCode}`);
    }
  }, [referCode]);

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
