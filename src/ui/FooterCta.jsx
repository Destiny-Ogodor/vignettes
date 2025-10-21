import Button from "./Button";
import { FOOTER_INFO } from "../../constants";

function FooterCta() {
  return (
    <div className="relative z-20 bg-gradient-to-b from-gray-700 to-gray-900 px-6 pt-6 sm:px-16 sm:pt-24">
      {/* Background image section */}
      <div
        className="relative z-0 -mt-48 flex flex-col items-center gap-10 px-8 py-14 text-center sm:-mt-64 sm:flex-row sm:gap-0 sm:px-24 sm:py-24 sm:text-start"
        style={{
          backgroundImage: 'url("public/contact-breadcrumb.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-siteRed/90"></div>

        {/* Content */}
        <div className="relative z-20 w-full space-y-8 text-white">
          <h5 className="-mb-4 text-sm font-semibold uppercase tracking-wider sm:text-lg">
            Lorem ipsum dolor sit amet
          </h5>

          <h2 className="w-full text-3xl font-bold tracking-wide sm:text-4xl md:w-2/3 md:text-5xl">
            Let’s Discuss & Start Visa <br /> Consultations
          </h2>
        </div>

        {/* Button */}
        <div className="relative z-20 w-3/4 sm:w-4/12">
          <Button variant="white" size="md" to="/contact-us">
            Free Consulting
          </Button>
        </div>
      </div>

      {/* Footer Info Section */}
      <div className="flex flex-col items-start gap-12 border-b-2 border-stone-600 border-opacity-30 pb-16 pt-24 sm:flex-row">
        {FOOTER_INFO.map((info, i) => (
          <div
            className="flex w-full items-center gap-8 sm:w-1/3 sm:flex-row"
            key={i}
          >
            <span className="rounded-full border border-siteRed p-5 text-2xl font-thin text-siteRed md:text-3xl">
              <info.icon />
            </span>
            <div className="space-y-1 md:space-y-2">
              <h5 className="text-sm font-light tracking-wider text-white md:text-lg">
                {info.title}
              </h5>
              <h3 className="text-lg font-semibold text-white md:text-xl">
                {info.info}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterCta;
