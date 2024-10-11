import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb/index";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Connect to the database
    await connectToDB();

    // Parse the incoming JSON data
    const body = await req.json();
    const { ethereumId, referralCode } = body;

    // Check if ethereumId is provided
    if (!ethereumId) {
      return NextResponse.json(
        { error: "Ethereum ID is required" },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ ethereumId });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 } // Conflict status code for "already exists"
      );
    }

    // Create a new user
    const newUser = await User.create({
      ethereumId,
      referralCode, // Include referral code if provided
    });

    console.log("New user created:", newUser);

    // Return the newly created user
    return NextResponse.json(newUser, { status: 201 }); // 201 for "Created"
  } catch (err) {
    console.error("Error creating user:", err);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
