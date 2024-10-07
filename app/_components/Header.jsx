import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className=" px-8 py-5 bg-primary-bg-1 shadow-2xl  ">
      <div className="flex justify-between items-center max-w-md md:max-w-2xl lg:max-w-7xl mx-auto">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
