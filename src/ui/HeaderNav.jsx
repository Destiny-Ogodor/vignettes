import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function HeaderNav() {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleServicesDropdown = () => {
    setIsServicesOpen((prev) => !prev);
    setIsAssessmentsOpen(false);
  };

  const toggleAssessmentsDropdown = () => {
    setIsAssessmentsOpen((prev) => !prev);
    setIsServicesOpen(false);
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

          {/* SERVICES DROPDOWN */}
          <li className="relative">
            <button
              onClick={toggleServicesDropdown}
              className={`group relative flex items-center gap-1 ${
                location.pathname.startsWith("/services")
                  ? "text-siteRed"
                  : "text-black"
              } transition-all duration-300 hover:-mt-[2px] hover:text-siteRed`}
            >
              <span>Services</span>
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isServicesOpen && (
              <ul
                className="absolute left-0 top-[calc(100%+4px)] z-50 w-64 rounded-md border border-gray-100 bg-white shadow-md"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {[
                  {
                    name: "UK Global Talent Visa",
                    path: "/services/uk-global-talent-visa",
                  },
                  {
                    name: "Study Abroad - International Study",
                    path: "/services/study-abroad",
                  },
                  { name: "US EB1A", path: "/services/us-eb1a" },
                  {
                    name: "Canada Permanent Residence",
                    path: "/services/canada-permanent-residence",
                  },
                  {
                    name: "Canada PR - Start-up Visa Program",
                    path: "/services/canada-pr-startup-visa-program",
                  },
                  {
                    name: "Education & Medical Tourism",
                    path: "/services/education-and-medical-tourism",
                  },
                ].map(({ name, path }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={`block px-4 py-2 text-[15px] text-gray-700 transition-all hover:bg-gray-50 hover:text-siteRed ${
                        isActive(path) ? "text-siteRed" : ""
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* ASSESSMENTS DROPDOWN */}
          <li className="relative">
            <button
              onClick={toggleAssessmentsDropdown}
              className={`group relative flex items-center gap-1 ${
                location.pathname.startsWith("/assessments") ||
                location.pathname.startsWith("/assessments-for")
                  ? "text-siteRed"
                  : "text-black"
              } transition-all duration-300 hover:-mt-[2px] hover:text-siteRed`}
            >
              <span>Assessments</span>
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  isAssessmentsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isAssessmentsOpen && (
              <ul
                className="absolute left-0 top-[calc(100%+4px)] z-50 w-72 rounded-md border border-gray-100 bg-white shadow-md"
                onMouseLeave={() => setIsAssessmentsOpen(false)}
              >
                {[
                  { name: "All Assessments", path: "/assessments" },
                  {
                    name: "Assessments for UK Global Talent Visa",
                    path: "/assessments-for-uk-global-talent-visa",
                  },
                  {
                    name: "Assessments for US EB1A",
                    path: "/assessments-for-us-eb1a",
                  },
                  {
                    name: "Assessments for US EB2-NIW",
                    path: "/assessments-for-us-eb2-niw",
                  },
                ].map(({ name, path }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={`block px-4 py-2 text-[15px] text-gray-700 transition-all hover:bg-gray-50 hover:text-siteRed ${
                        isActive(path) ? "text-siteRed" : ""
                      }`}
                      onClick={() => setIsAssessmentsOpen(false)}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNav;
