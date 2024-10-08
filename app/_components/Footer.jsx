import "@/app/_styles/style.css";

function Footer() {
  return (
    <footer className="footer mt-24">
      <div className="container-div grid grid-cols-3 justify-items-center">
        <div className =''>
          <ul className="footer-main-list">
            <li>
              <a href className="text-white text-base cursor-pointer">
                $PEPE Whitepaper
              </a>
            </li>
            <li>
              <a href className="text-white text-base cursor-pointer">
                Solidproof Certification
              </a>
            </li>
            <li>
              <a href className="text-white text-base cursor-pointer">
                Coinsult Certification
              </a>
            </li>
            <li>
              <a href className="text-white text-base cursor-pointer">
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div className>
          <ul className="footer-main-list">
            <li>
              <a href className="text-white text-base cursor-pointer">
                User Agreement
              </a>
            </li>
            <li>
              <a href className="text-white text-base cursor-pointer">
                Privacy &amp; Cookies
              </a>
            </li>
            <li>
              <a href className="text-white text-base cursor-pointer">
                Risk Advisory
              </a>
            </li>
            <li>
              <a href className="text-white text-base cursor-pointer">
                Disclaimer
              </a>
            </li>
            <li>
              <a href className="text-white text-base cursor-pointer">
                User Commitments
              </a>
            </li>
          </ul>
        </div>
        <div className>
          <ul className="footer-main-list">
            <li>
              <a href className="text-white text-base cursor-pointer">
                Twitter
              </a>
            </li>
            <li>
              <a href className="text-white text-base cursor-pointer">
                Telegram
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="footer-logo-box">
          <img src='/logo.png' alt className="footer-logo" />
        </div> */}
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Pepe Layer2 Campaign. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
