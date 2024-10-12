import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();
    const { ethereumId } = params;
    const body = await req.json();

    const {
      totalBalance,
      todayClaim,
      totalEarnDay,
      referEarn,
      socialLinks,
      referredUsers,
    } = body;

    const updatedUser = await User.findOneAndUpdate(
      ethereumId,
      {
        totalBalance,
        todayClaim,
        totalEarnDay,
        referEarn,
        socialLinks,
        referredUsers,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to update user", { status: 5000 });
  }
};
