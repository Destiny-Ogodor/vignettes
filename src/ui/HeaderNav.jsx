import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function HeaderNav() {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleServicesDropdown = () => {
    setIsServicesOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="hidden lg:block">
        <ul className="relative flex flex-row gap-10 text-[15px] font-medium tracking-wide text-[#000]">
          {/* Regular Nav Items */}
          {[
            { name: "Home", path: "/home" },
            { name: "About Us", path: "/about-us" },
            { name: "Partner Institution", path: "/partner-institution" },
            { name: "Enquiry Form", path: "/enquiry-form" },
            { name: "Contact Us", path: "/contact-us" },
          ].map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={`group relative ${
                  isActive(path) ? "text-siteRed" : "text-black"
                } transition-all duration-300 hover:-mt-[2px] hover:text-siteRed`}
              >
                {name}
              </NavLink>
            </li>
          ))}

          {/* SERVICES with Dropdown Toggle */}
          <li className="relative">
            <button
              onClick={toggleServicesDropdown}
              className={`group relative flex items-center gap-1 ${
                isActive("/services") ? "text-siteRed" : "text-black"
              } transition-all duration-300 hover:-mt-[2px] hover:text-siteRed`}
            >
              <span>Services</span>
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <ul
                className="absolute left-0 top-[calc(100%+4px)] z-50 w-56 rounded-md border border-gray-100 bg-white shadow-md"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <li>
                  <NavLink
                    to="/services/uk-global-talent-visa"
                    className={`block px-4 py-2 text-[15px] text-gray-700 transition-all hover:bg-gray-50 hover:text-siteRed ${
                      isActive("/services/uk-global-talent-visa")
                        ? "text-siteRed"
                        : ""
                    }`}
                    onClick={() => setIsServicesOpen(false)} // Close dropdown on click
                  >
                    UK Global Talent Visa
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNav;
