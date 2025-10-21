import { Link } from "react-router-dom";
import AboutHero from "../ui/AboutHero";
import ServicesOverview from "../ui/ServicesOverview";
import TrustedClients from "../ui/TrustedClients";
import TeamMembers from "../ui/TeamMembers";
import TestimonialSection from "../ui/TestimonialSection";
import FooterCta from "../ui/FooterCta";

function AboutUs() {
  return (
    <div>
      <div
        className="relative top-0 h-64 bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-r after:from-[#16171A] after:to-[rgba(22,23,26,0.2)] after:content-[''] sm:h-80"
        style={{
          backgroundImage: 'url("/contact-breadcrumb.jpg")', // Corrected image path
        }}
      >
        <div className="relative z-20 flex h-full items-center justify-between px-8 text-white md:px-16">
          <h2 className="text-3xl font-bold sm:text-5xl">About</h2>

          <ul className="flex gap-3 text-lg font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <p>-</p>
            </li>

            <li>
              <Link to="/about-us">About</Link>
            </li>
          </ul>
        </div>
      </div>

      <AboutHero />
      <ServicesOverview />
      <TrustedClients />
      <TeamMembers />
      <TestimonialSection />
      <FooterCta />
    </div>
  );
}

export default AboutUs;
