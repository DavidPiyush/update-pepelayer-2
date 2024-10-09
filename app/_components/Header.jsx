import Logo from "./Logo";
import Navbar from "./Navbar";

function Header({ className }) {
  return (
    <header className={`sticky top-0 z-50 bg-[#000000af] shadow-md ${className} relative`}>
      <div className="flex justify-between items-center max-w-md md:max-w-2xl lg:max-w-7xl mx-auto px-8 py-5">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
