import { serialize } from "cookie";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { referralCode } = req.body; // Get the referral code from the request body

    if (!referralCode) {
      return res.status(400).json({ message: "Referral code is required" });
    }

    const cookie = serialize("referralCode", referralCode, {
      httpOnly: true, // Helps prevent XSS attacks
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 60 * 60 * 24, // Expires in 1 day
      path: "/", // Cookie is accessible site-wide
    });

    res.setHeader("Set-Cookie", cookie);
    return res.status(200).json({ message: "Referral code set successfully!" });
  } else {
    // If the request method is not POST
    return res.status(405).json({ message: "Method not allowed" });
  }
}
