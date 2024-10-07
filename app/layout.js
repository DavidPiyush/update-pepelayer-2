import "./globals.css";
import {Poppins} from 'next/font/google'

import Header from "./_components/Header";


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
        <Header />
        {children}
      </body>
    </html>
  );
}
