import Logo from "./Logo";
import Navbar from "./Navbar";

function Header({className}) {
  return (
    <header className={` px-8 py-5 relative z-10 ${className}`}>
      <div className="flex justify-between items-center max-w-md md:max-w-2xl lg:max-w-7xl mx-auto">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
//bg-primary-bg-1 shadow-2xl