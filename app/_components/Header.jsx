import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className=" px-8 py-5 relative z-10">
      <div className="flex justify-between items-center max-w-md md:max-w-2xl lg:max-w-7xl mx-auto">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
//bg-primary-bg-1 shadow-2xl