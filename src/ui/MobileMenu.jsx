import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MobileIconBox from "./MobileIconBox";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to check if a path is active
  const isActive = (path) => location.pathname === path;

  function toggleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <main className="block lg:hidden">
        <div className="relative mr-2">
          <button
            className="block text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="red"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`fixed right-0 top-0 z-50 h-full w-96 transform bg-stone-900 shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-full w-full flex-col items-start gap-y-8 px-10 py-12">
            <button onClick={toggleMenu}>
              <span
                className={`material-icons text-stone-400 hover:text-white`}
              >
                {" "}
                {isOpen ? "close" : "menu"}{" "}
              </span>
            </button>

            <ul className="flex w-full flex-col gap-5 text-[12px] font-medium uppercase tracking-wide">
              {[
                "Home",
                "About Us",
                "Services",
                "Partner Institution",
                "Enquiry Form",
                "Contact Us",
              ].map((item) => {
                const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <li
                    key={item}
                    className="border-b-[1px] border-stone-600 pb-5"
                  >
                    <NavLink
                      to={path}
                      className={`group relative ${isActive(path) ? "text-white" : "text-stone-400"} flex flex-col gap-y-96 transition-all duration-300 hover:text-white`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="flex w-full flex-col gap-4">
              <h3 className="mt-5 text-[14px] font-semibold uppercase text-white">
                Contact Info
              </h3>

              <MobileIconBox />

              <button className="group mt-2 w-full bg-siteRed py-2 text-sm text-stone-50 transition-all duration-300 hover:bg-[#D4AF37]">
                <span className="group-hover:text-black">Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MobileMenu;
