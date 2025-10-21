import { FaCheck } from "react-icons/fa6";
import Button from "./Button";
import CircularProgress from "./circularProgress";

function AboutHero() {
  const serviceList = [
    {
      icon: FaCheck,
      service: "Immigration & Visa Consulting",
    },
    {
      icon: FaCheck,
      service: "Direct Online Interview",
    },
    {
      icon: FaCheck,
      service: "99% Visa Approvals",
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-6 py-16 sm:flex-row sm:gap-24 md:px-16 md:py-28">
      {/* Image Section */}
      <div className="relative w-full sm:w-1/2">
        {/* Primary image with border */}
        <div className="relative w-full">
          <img
            src="/insights-about-new.jpg"
            alt="about"
            className="relative z-10 w-full object-contain p-6 sm:p-14"
          />
          <div className="absolute -left-2 top-2 z-0 h-5/6 w-4/5 border-2 border-siteRed sm:-left-4 sm:top-0 sm:w-3/4"></div>
        </div>

        {/* Secondary image */}
        <img
          src="/insights-about-2.jpg"
          alt="about-2"
          className="absolute bottom-2 right-2 z-30 w-2/4 sm:bottom-0 sm:right-0 sm:w-1/3"
        />
      </div>

      {/* Content Section */}
      <div className="w-full space-y-8 sm:w-1/2 sm:space-y-10">
        {/* Introductory Content */}
        <div className="space-y-6 sm:space-y-8">
          <h5 className="-mb-4 text-xs font-semibold uppercase tracking-wider text-siteRed">
            About Company
          </h5>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Insights and Vignettes Limited (IVL)
          </h2>
          <div className="space-y-4 text-[14px] leading-relaxed text-gray-600 sm:tracking-wide">
            <p>
              Nigeria’s leading global talent mobility and international student
              recruitment agency. IVL offers global talented and promising
              individuals the Insights, materials, tools and assistance to
              navigate and form strategies and initiatives required to apply for
              family settlement routes and move abroad. Insights for global
              talents is aimed to facilitate mobility of talents and promising
              individuals around the globe.
            </p>

            <p>
              We also help students who have WAEC/NECO/GCE, National Diploma
              (ND), Higher National Diploma (HND), B.Sc./BA and Master Degrees
              to secure and process applications to further their education
              abroad.
            </p>

            <p>
              We offer a wide range of services and commitments to prospecting
              international students and parents whose children/wards seek
              higher education abroad including the United Kingdom (UK), United
              States of America (USA), Canada, The Republic of Ireland, United
              Arab Emirate (UAE), Germany, France, and Switzerland.
            </p>
          </div>

          <div className="hidden items-start justify-start">
            <div className="flex justify-center gap-2">
              <CircularProgress percentage={68} label="Business Strategy" />
              <CircularProgress
                percentage={93}
                label="Real Technology Solutions"
              />
            </div>
          </div>
        </div>

        {/* Service List */}
        <ul className="space-y-3 sm:space-y-4">
          {serviceList.map(({ icon: Icon, service }, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-base font-bold text-gray-600 sm:gap-4 sm:text-xl"
            >
              <span className="text-lg font-extrabold text-siteRed sm:text-xl">
                <Icon />
              </span>
              <span>{service}</span>
            </li>
          ))}
        </ul>

        <div className="w-2/3 sm:w-1/2">
          <Button variant="red" size="md" to="/contact-us">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
