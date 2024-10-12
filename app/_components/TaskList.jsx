// "use client";
// import Link from "next/link";
// import { referDataLink } from "../_data/ReferData";
// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { updateUser, userData } from "../_data/FetchAPI";

// function TaskList() {
//   const [loading, setLoading] = useState(true); // State for loading
//   const { data: session, status } = useSession();
//   const ethereumId = session?.user?.ethereumId?.toLowerCase(); // Make sure ethereumId is lowercase

//   const [isDisabled, setIsDisabled] = useState([]);

//   console.log(isDisabled, "this is disabled links");

//   async function getSocialLinkDetails(ethereumId, setLoading, setIsDisabled) {
//     try {
//       const socialRes = await userData(ethereumId, setLoading);
//       setIsDisabled(socialRes.socialLinks || []);
//     } catch (error) {
//       console.error("Error fetching social link details:", error);
//     }
//   }

//   useEffect(() => {
//     if (ethereumId) {
//       getSocialLinkDetails(ethereumId, setLoading, setIsDisabled);
//     }
//   }, [ethereumId]);

//   async function handleClick(e) {
//     e.preventDefault(); // Prevent the default link behavior

//     try {
//       const reward = e.target.dataset.reward;
//       const href = e.target.href;

//       if (!reward || !href) {
//         console.log("Missing reward or link data.");
//         return;
//       }

//       // Prepare the update data for the user
//       const updateData = {
//         socialLinks: [href], // Add the clicked link to socialLinks
//         totalEarnDay: reward, // Update totalEarnDay with the dataset reward
//       };

//       // console.log(updateData, "Update data being sent");

//       // Call the function to update the user
//       const res = await updateUser(ethereumId, updateData, setLoading);

//       if (res) {
//         console.log("User updated successfully:", res);
//       } else {
//         console.log("Failed to update user.");
//       }
//     } catch (error) {
//       console.log(error, "Error updating user");
//     }
//   }

//   return referDataLink.map((data) => (
//     <div
//       class="flex items-center justify-between p-4 rounded-xl shadow-lg transition-all duration-300  ease-in hover:translate-y-[-5px] hover:bg-[#f1f8ff]"
//       key={data.title}
//     >
//       <Link
//         href={data.link.includes(isDisabled) ? "" : data.link}
//         class={`bg-[#ff5722] text-white border-2 py-4 px-4
//               rounded-lg cursor-pointer text-lg w-[75%] font-bold inline-block transition-all duration-300 ease-in text-center hover:bg-[#f4511e] border-[#f45113]
//               shadow-lg-[#0000004d] hover:scale-105
//               ${
//                 data.link.includes(isDisabled)
//                   ? " opacity-[.5] pointer-events-none"
//                   : ""
//               }
//                `}
//         aria-disabled={data.link.includes(isDisabled)}
//         data-reward={data.points}
//         target="_blank"
//         onClick={handleClick}
//       >
//         {data.title}
//       </Link>
//       <span class="text-lg font-bold bg-[#fff3e0] rounded-lg shadow-lg-[#0000001a] p-4 text-[#ff9800]">
//         +{data.points} Points
//       </span>
//     </div>
//   ));
// }

// export default TaskList;

// "use client";
// import Link from "next/link";
// import { referDataLink } from "../_data/ReferData";
// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { updateUser, userData } from "../_data/FetchAPI";

// function TaskList() {
//   const [loading, setLoading] = useState(true); // State for loading
//   const { data: session, status } = useSession();
//   const ethereumId = session?.user?.ethereumId?.toLowerCase(); // Make sure ethereumId is lowercase

//   const [isDisabled, setIsDisabled] = useState([]);

//   // console.log(isDisabled, "this is disabled links");

//   async function getSocialLinkDetails(ethereumId) {
//     try {
//       const socialRes = await userData(ethereumId, setLoading);
//       setIsDisabled(socialRes.socialLinks || []);
//     } catch (error) {
//       console.error("Error fetching social link details:", error);
//     }
//   }

//   useEffect(() => {
//     if (ethereumId) {
//       getSocialLinkDetails(ethereumId);
//     }
//   }, [ethereumId]);

//   async function handleClick(e) {
//     e.preventDefault(); // Prevent the default link behavior

//     try {
//       const reward = e.target.dataset.reward;
//       const href = e.target.href;

//       if (!reward || !href) {
//         // console.log("Missing reward or link data.");
//         return;
//       }

//       // Prepare the update data for the user
//       const updateData = {
//         socialLinks: [href], // Add the clicked link to socialLinks
//         totalEarnDay: reward, // Update totalEarnDay with the dataset reward
//       };

//       // Call the function to update the user
//       const res = await updateUser(ethereumId, updateData, setLoading);

//       if (res) {
//         console.log("Socilal link updated successfully:", res);
//       } else {
//         console.log("Failed to update Social link.");
//       }
//     } catch (error) {
//       console.log(error, "Error updating social links");
//     }
//   }

//   return referDataLink.map((data) => {
//     // Check if the current link is disabled
//     const isLinkDisabled = isDisabled.includes(data.link);

//     return (
//       <div
//         className="flex items-center justify-between p-4 rounded-xl shadow-lg transition-all duration-300 ease-in hover:translate-y-[-5px] hover:bg-[#f1f8ff]"
//         key={data.title}
//       >
//         <Link
//           href={isLinkDisabled ? "#" : data.link} // Disable link if it's in isDisabled
//           className={`bg-[#ff5722] text-white border-2 py-4 px-4 rounded-lg cursor-pointer text-lg w-[75%] font-bold inline-block transition-all duration-300 ease-in text-center hover:bg-[#f4511e] border-[#f45113] shadow-lg-[#0000004d] hover:scale-105 ${
//             isLinkDisabled ? "opacity-[.5] pointer-events-none" : ""
//           }`}
//           aria-disabled={isLinkDisabled} // Indicate that the link is disabled
//           data-reward={data.points}
//           target="_blank"
//           onClick={(e) => {
//             if (isLinkDisabled) {
//               e.preventDefault(); // Prevent default action if link is disabled
//               console.log("Link is disabled."); // Optional: log message
//             } else {
//               handleClick(e); // Call your click handler
//             }
//           }}
//         >
//           {data.title}
//         </Link>
//         <span className="text-lg font-bold bg-[#fff3e0] rounded-lg shadow-lg-[#0000001a] p-4 text-[#ff9800]">
//           +{data.points} Points
//         </span>
//       </div>
//     );
//   });
// }

// export default TaskList;

"use client";
import Link from "next/link";
import { referDataLink } from "../_data/ReferData";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { updateUser, userData } from "../_data/FetchAPI";

function TaskList() {
  const [loading, setLoading] = useState(true); // State for loading
  const { data: session, status } = useSession();
  const ethereumId = session?.user?.ethereumId?.toLowerCase(); // Make sure ethereumId is lowercase
  const [isDisabled, setIsDisabled] = useState([]); // State to hold disabled links

  // Fetch social link details for the authenticated user
  async function getSocialLinkDetails(ethereumId) {
    try {
      const socialRes = await userData(ethereumId, setLoading);
      setIsDisabled(socialRes.socialLinks || []);
    } catch (error) {
      console.error("Error fetching social link details:", error);
    }
  }

  useEffect(() => {
    if (ethereumId) {
      getSocialLinkDetails(ethereumId);
    }
  }, [ethereumId]);

  async function handleClick(e) {
    e.preventDefault(); // Prevent the default link behavior

    try {
      const reward = e.target.dataset.reward;
      const href = e.target.href;

      if (!reward || !href) {
        // Handle missing reward or link data
        return;
      }

      // Prepare the update data for the user
      const updateData = {
        socialLinks: [href], // Add the clicked link to socialLinks
        totalEarnDay: reward, // Update totalEarnDay with the dataset reward
      };

      // Call the function to update the user
      const res = await updateUser(ethereumId, updateData, setLoading);

      if (res) {
        console.log("Social link updated successfully:", res);
      } else {
        console.log("Failed to update Social link.");
      }
    } catch (error) {
      console.log(error, "Error updating social links");
    }
  }

  // If the user is not authenticated, show a prompt to log in
  if (status !== "authenticated") {
    return (
      <div className="text-center p-4">
        <p className="text-lg font-bold text-[#ff5722]">
          Please sign in to access tasks.
        </p>
      </div>
    );
  }

  return referDataLink.map((data) => {
    // Check if the current link is disabled for the authenticated user
    const isLinkDisabled = isDisabled.includes(data.link);

    return (
      <div
        className="flex items-center justify-between p-4 rounded-xl shadow-lg transition-all duration-300 ease-in hover:translate-y-[-5px] hover:bg-[#f1f8ff]"
        key={data.title}
      >
        <Link
          href={isLinkDisabled ? "#" : data.link} // Disable link if it's in isDisabled
          className={`bg-[#ff5722] text-white border-2 py-4 px-4 rounded-lg cursor-pointer text-lg w-[75%] font-bold inline-block transition-all duration-300 ease-in text-center hover:bg-[#f4511e] border-[#f45113] shadow-lg-[#0000004d] hover:scale-105 ${
            isLinkDisabled ? "opacity-[.5] pointer-events-none" : ""
          }`}
          aria-disabled={isLinkDisabled} // Indicate that the link is disabled
          data-reward={data.points}
          target="_blank"
          onClick={(e) => {
            if (isLinkDisabled) {
              e.preventDefault(); // Prevent default action if link is disabled
              console.log("Link is disabled."); // Optional: log message
            } else {
              handleClick(e); // Call your click handler
            }
          }}
        >
          {data.title}
        </Link>
        <span className="text-lg font-bold bg-[#fff3e0] rounded-lg shadow-lg-[#0000001a] p-4 text-[#ff9800]">
          +{data.points} Points
        </span>
      </div>
    );
  });
}

export default TaskList;
