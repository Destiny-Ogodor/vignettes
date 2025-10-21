import { VISA_LIST } from "../../constants";

function ServicesHero() {
  return (
    <div className="space-y-20 bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-20 sm:px-16 sm:py-28">
      <div className="flex flex-col items-center gap-y-6 md:flex-row">
        <div className="w-full space-y-3 text-center sm:text-start md:w-1/2">
          <h5 className="text- font-semibold uppercase tracking-wider text-siteRed sm:text-sm">
            Visa Categories
          </h5>
          <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
            Insights and Vignettes Outstanding Immigration Visa Services
          </h2>
        </div>

        <p className="w-full text-center text-[16px] text-gray-600 sm:text-start md:w-1/2">
          We offer study abroad application and processing services to help
          students who want to Study Abroad. We assist and support our clients
          to secure admission into institutions abroad including the United
          Kingdom (UK), United States of America (USA), Canada, Australia,
          Ireland, United Arab Emirate (UAE), Ukraine, Germany, Cyprus, Spain,
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-8">
        {VISA_LIST.map((visa, i) => (
          <div
            key={i}
            className="group relative z-10 flex w-[45%] flex-col items-center gap-8 bg-white p-12 shadow-sm sm:w-[29%] md:w-[18%]"
          >
            <span className="z-20 text-5xl text-siteRed transition-all duration-500 group-hover:scale-x-[-1] group-hover:text-white">
              {visa.icon}
            </span>
            <h3 className="z-20 text-center text-xl font-bold capitalize transition-all duration-500 group-hover:text-white">
              {visa.type}
            </h3>

            <div className="absolute inset-0 bottom-full z-0 transition-all duration-500 group-hover:bottom-0 group-hover:bg-siteRed"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesHero;
