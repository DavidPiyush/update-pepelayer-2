import Logo from "./Logo";
import Navbar from "./Navbar";

function Header({ className }) {
  return (
    <header
      className={` ${className}  z-50 relative transition-all duration-300 `} id="header-el"
    >
      <div className="flex justify-between items-center max-w-md md:max-w-2xl lg:max-w-7xl mx-auto px-8 py-5">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
