function Footer() {
  const serviceItems = [
    { title: "Canada Visa", to: "/services" },
    { title: "UK Visa", to: "/services" },
    { title: "Germany Visa", to: "/services" },
    { title: "Scotland Visa", to: "/services" },
    { title: "Japan Visa", to: "/services" },
  ];

  const explorePages = [
    { title: "Home", to: "/home" },
    { title: "About Us", to: "/about-us" },
    { title: "Services", to: "/services" },
    { title: "Partner Institutions", to: "/partner-institution" },
    { title: "Enquiry Form", to: "/enquiry-form" },
  ];

  const socialIcons = [
    { title: "facebook", icon: "/icons/icons8-facebook-150-white1.png" },
    { title: "twitter", icon: "/icons/icons8-twitter-100-white.png" },
    { title: "instagram", icon: "/icons/icons8-instagram-100-white.png" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <div className="px-8 pt-20 md:px-16">
        <main className="flex flex-col flex-wrap gap-16 pb-16 md:flex-row md:gap-20">
          {/* Logo and Social Icons */}
          <div className="w-full sm:w-[40%] lg:w-[25%]">
            <img src="/I&V no bg.png" alt="logo" className="w-44" />
            <div className="mt-6">
              <p className="w-2/3 leading-relaxed tracking-wide text-stone-400 md:w-full">
                Quis autem veumure repreh volu tate velit esse niholestiae
                conseua veillum dolorem eum fugiat voluta.
              </p>
              <div className="mt-6 flex flex-row gap-4">
                {socialIcons.map((icon) => (
                  <span
                    key={icon.title}
                    className="cursor-pointer rounded-full bg-gradient-to-b from-gray-900 to-black p-3 shadow-lg transition-all duration-300 hover:bg-siteRed"
                  >
                    <img
                      src={icon.icon}
                      alt={icon.title}
                      className="w-[20px]"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="w-full sm:w-[50%] lg:w-[15%]">
            <h3 className="mb-6 text-lg font-bold tracking-wide text-white md:text-xl">
              Services
            </h3>
            <nav>
              <ul className="flex flex-col gap-6">
                {serviceItems.map((service) => (
                  <li
                    key={service.title}
                    className="text-stone-400 hover:text-siteRed"
                  >
                    <a
                      href={service.to}
                      className="group flex flex-row items-center gap-1 transition-all duration-700 ease-out"
                    >
                      <span className="material-icons text-md block font-thin group-hover:hidden">
                        <span className="material-icons">
                          keyboard_double_arrow_right
                        </span>
                      </span>
                      <span className="material-icons hidden text-[10px] group-hover:block">
                        circle
                      </span>
                      <span className="text-[16px] tracking-wide group-hover:ml-4">
                        {service.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Explore Section */}
          <div className="w-full sm:w-[50%] lg:w-[15%]">
            <h3 className="mb-6 text-lg font-bold tracking-wide text-white md:text-xl">
              Explore
            </h3>
            <nav>
              <ul className="flex flex-col gap-6">
                {explorePages.map((page) => (
                  <li
                    key={page.title}
                    className="text-stone-400 hover:text-siteRed"
                  >
                    <a
                      href={page.to}
                      className="group flex flex-row items-center gap-1 transition-all duration-700 ease-out"
                    >
                      <span className="material-icons text-md block font-thin group-hover:hidden">
                        <span className="material-icons">
                          keyboard_double_arrow_right
                        </span>
                      </span>
                      <span className="material-icons hidden text-[10px] group-hover:block">
                        circle
                      </span>
                      <span className="text-[16px] tracking-wide group-hover:ml-4">
                        {page.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Addresses Section */}
          <div className="w-full sm:w-[50%] md:w-[20%]">
            <h3 className="mb-6 text-lg font-bold tracking-wide text-white md:text-xl">
              Addresses
            </h3>
            <div className="text-stone-400">
              <h5>TheBunker, 279 Hebert Marcaulay way, Alagomeji, Yaba</h5>
              <div>
                <h3 className="text-md mb-2 mt-8 font-bold tracking-wide text-white">
                  🇨🇦 Canada
                </h3>
                <div className="flex flex-col gap-4 text-[16px]">
                  <h5>570 8th Ave, New York, NY 10018 United States</h5>
                </div>
              </div>
              <div>
                <h3 className="text-md md:text-md mb-2 mt-8 font-bold tracking-wide text-white">
                  🇬🇧 United Kingdom
                </h3>
                <div className="flex flex-col gap-4 text-[16px]">
                  <h5>570 8th Ave, New York, NY 10018 United States</h5>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Copyright Section */}
        <div className="border-t-2 border-stone-600 border-opacity-30 p-8">
          <h6 className="text-center text-[12px] tracking-wide text-white md:text-[14px]">
            Copyright © 2024 Insights and Vignettes All Rights Reserved.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
