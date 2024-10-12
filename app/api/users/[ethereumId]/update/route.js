// import User from "@/models/UserModel";
// import { connectToDB } from "@/mongodb";
// import { NextResponse } from "next/server";

// export const PATCH = async (req, { params }) => {
//   try {
//     await connectToDB();
//     const { ethereumId } = params;
//     const body = await req.json();

//     console.log(ethereumId, body, "this line 🧍‍♂️🧍‍♂️🧍‍♂️");
//     const {
//       totalBalance,
//       todayClaim,
//       totalEarnDay,
//       referEarn,
//       socialLinks,
//       referredUsers,
//     } = body;

//     const updatedUser = await User.findOneAndUpdate(
//       { ethereumId: ethereumId },
//       {
//         totalBalance,
//         todayClaim,
//         totalEarnDay,
//         referEarn,
//         socialLinks,
//         referredUsers,
//       },
//       { new: true }
//     );

//     console.log(updatedUser, "this updated data");

//     return new Response(JSON.stringify(updatedUser), { status: 200 });
//   } catch (error) {
//     return new NextResponse("Failed to update user", { status: 500 });
//   }
// };

// import User from "@/models/UserModel";
// import { connectToDB } from "@/mongodb";
// import { NextResponse } from "next/server";

// export const PATCH = async (req, { params }) => {
//   try {
//     await connectToDB();
//     const { ethereumId } = params;
//     const body = await req.json();

//     console.log(ethereumId, body, "this line 🧍‍♂️🧍‍♂️🧍‍♂️");

//     const {
//       totalBalance,
//       todayClaim,
//       totalEarnDay,
//       referEarn,
//       socialLinks, // Array to be updated without duplicates
//       referredUsers,
//       timerStart,
//       timerExpired
//     } = body;

//     // Create update object
//     const updateData = {
//       totalBalance,
//       referEarn,
//       referredUsers,
//     };

//     // If `socialLinks` is provided and contains new data
//     if (socialLinks && socialLinks.length > 0) {
//       // Add `socialLinks` without duplicates using `$addToSet`
//       updateData.$addToSet = { socialLinks: { $each: socialLinks } };

//       updateData.$inc = { totalEarnDay }; // Increment `totalEarnDay`
//     }

//     // updating daily claim and start timer
//     updateData.$inc = { todayClaim };
//     // Set timer fields when starting the timer
//     const currentTime = new Date();
//     updateData.timerStart = currentTime; // Start the timer
//     updateData.timerExpired = false; // Set timer not expired

//     // Update the user document
//     const updatedUser = await User.findOneAndUpdate(
//       { ethereumId: ethereumId },
//       updateData,
//       { new: true }
//     );

//     console.log(updatedUser, "this updated data");

//     return new Response(JSON.stringify(updatedUser), { status: 200 });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return new NextResponse("Failed to update user", { status: 500 });
//   }
// };

// Add `socialLinks` only if provided in the request
// if (socialLinks && socialLinks.length > 0) {
//   updateData.$addToSet = { socialLinks: { $each: socialLinks } };
// }


import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();
    const { ethereumId } = params;
    const body = await req.json();

    console.log(ethereumId, body, "this line 🧍‍♂️🧍‍♂️🧍‍♂️");

    const {
      totalBalance,
      todayClaim,
      totalEarnDay,
      referEarn,
      socialLinks, // Array to be updated without duplicates
      referredUsers,
      // Remove timerStart and timerExpired from destructuring since we are managing them in the update
    } = body;

    const updateData = {
      $inc: {
        todayClaim: todayClaim || 0, // Default to 0 if not provided
        totalEarnDay: totalEarnDay || 0, // Default to 0 if not provided
      },
      $set: {
        totalBalance: todayClaim + totalEarnDay + referEarn, // Manually set totalBalance by summing
      },
      // Timer fields
      timerStart: new Date(), // Start the timer
      timerExpired: false, // Set timer not expired
    };

    // If `socialLinks` is provided and contains new data
    if (socialLinks && socialLinks.length > 0) {
      // Add `socialLinks` without duplicates using `$addToSet`
      updateData.$addToSet = { socialLinks: { $each: socialLinks } };
    }

    // Update the user document
    const updatedUser = await User.findOneAndUpdate(
      { ethereumId: ethereumId },
      updateData,
      { new: true }
    );

    console.log(updatedUser, "this updated data");

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse("Failed to update user", { status: 500 });
  }
};
