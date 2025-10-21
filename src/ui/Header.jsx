import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import Button from "./Button";

function Header() {
  return (
    <div className="border-b-2 border-stone-100 bg-white px-3 pb-3 pt-4 sm:px-10">
      <div></div>

      <div className="flex flex-row items-center justify-between">
        <Link to="/" className="">
          <img
            src="/I&V-no-bg.png"
            alt="logo"
            className="w-24 sm:w-24 md:w-32"
          />
        </Link>

        <HeaderNav />

        {/* <button className="hidden rounded-full border-2 border-siteRed bg-siteRed px-8 py-2 text-[14px] font-medium tracking-wide text-white shadow-2xl transition-all duration-300 hover:border-siteNavyBlue hover:bg-siteNavyBlue lg:block">
          Login/Sign Up
        </button> */}

        <div className="hidden w-[15%] lg:block">
          <Button variant="red" size="sm" to="/contact-us">
            Get in Touch
          </Button>
        </div>

        <MobileMenu />
      </div>
    </div>
  );
}

export default Header;
