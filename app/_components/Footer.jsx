import "@/app/_styles/style.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer mt-24">
      <div className="container-div grid grid-cols-3 justify-items-center">
        <div>
          <ul className="footer-main-list">
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                $PEPE Whitepaper
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                Solidproof Certification
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                Coinsult Certification
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                Help Center
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-main-list">
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                User Agreement
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                Privacy &amp; Cookies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                Risk Advisory
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                User Commitments
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer-main-list">
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-base cursor-pointer">
                Telegram
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="footer-logo-box">
      <img src='/logo.png' alt className="footer-logo" />
    </div> */}
      </div>
      <div className="copyright">
        <p>
          &copy; {`${new Date().getFullYear()}`} Pepe Layer2 Campaign. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
