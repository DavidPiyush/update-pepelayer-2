import Link from "next/link";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="">
      <ul className="flex gap-12 items-center">
        <li>
          <Link href="#" className="nav-link">
            TOKENOMICS
          </Link>
        </li>
        <li>
          <Link href="#" className="nav-link">
            Roadmap
          </Link>
        </li>
        <li>
          <Link href="#" className="nav-link">
            How to Join
          </Link>
        </li>
        <Button className={'px-10'}>JOIN AIRDROP</Button>
      </ul>
    </nav>
  );
}

export default Navbar;
