import "./globals.css";
import { Poppins } from "next/font/google";

//Rainbowkit
import Providers from "@/app/_context/Provider";
import "@rainbow-me/rainbowkit/styles.css";

import Header from "./_components/Header";
import ToasterContext from "./_context/ToasterContext";


// font family
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Pepe Coin - A Meme Coin",
    default: "Welcome / The Pepe Coin - A Meme Coin",
  },
  description:
    "It is meme coin based on pepe meme frog . in this pepe is exchanged from ether,btc etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <ToasterContext />
          {children}
        </Providers>
      </body>
    </html>
  );
}
