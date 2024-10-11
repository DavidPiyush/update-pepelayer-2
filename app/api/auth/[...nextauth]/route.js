// pages/api/auth/[...nextauth].js
import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "MetaMask",
      credentials: {
        address: { type: "text" }, // Specify that `address` is expected
      },
      async authorize(credentials, req) {
        const { address } = credentials;

        if (!address) {
          throw new Error("Wallet address is missing.");
        }

          await connectToDB();
        console.log("Received MetaMask address:", address);

        // Check if user exists in MongoDB
        const user = await User.findOne({ ethereumId: address });

        // If user doesn't exist, consider creating one here
        if (!user) {
          console.log("User not found, creating a new one.");
          const newUser = await User.create({
            ethereumId: address
          });
          return newUser; // Return the newly created user
        }

        // If user exists, return the user object to NextAuth.js
        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in your .env.local file

  callbacks: {
    async session({ session, token }) {
      console.log(session, token, "this from callbacks ❌❌ ");
      // Extend the session object with the user from the database

      const mongodbUser = await User.findOne({
        ethereumId: session?.user.ethereumId,
      });

      if (!mongodbUser) {
        throw new Error("User not found in session callback!");
      }

      // Merge MongoDB user with session
      session.user.id = mongodbUser._id.toString();
      session.user = { ...session.user, ...mongodbUser._doc }; // Assuming _doc has the right structure

      return session;
    },
  },
});

export { handler as GET, handler as POST };
