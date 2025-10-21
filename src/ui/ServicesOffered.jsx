import { SERVICES_PAGE_SERVICES } from "../../constants";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function ServicesOffered() {
  return (
    <div>
      <div className="flex flex-col gap-10 overflow-hidden px-6 py-28 sm:flex-row sm:flex-wrap sm:justify-center">
        {SERVICES_PAGE_SERVICES.map((service, i) => (
          <div
            className="group w-full bg-[#F5F5F7] ease-in-out sm:w-5/12 md:w-[28%]"
            key={i}
          >
            <div className="space-y-6 p-8 py-12 transition-all duration-500 group-hover:bg-siteRed group-hover:text-white">
              <h3 className="text-2xl font-semibold">{service.service}</h3>
              <h4 className="text-lg text-gray-600 transition-all duration-500 group-hover:text-white">
                {service.description}
              </h4>
              <div className="w-full overflow-hidden">
                <img
                  src={service.img}
                  alt="service-img"
                  className="w-full transition-all duration-500 ease-in-out group-hover:scale-[1.2]"
                />
              </div>
              <Link className="mt-2 flex flex-row items-center gap-5 text-xl font-semibold">
                <span>Read More</span>
                <span className="rounded-full bg-siteRed p-2 text-sm text-white transition-all duration-500 ease-in-out group-hover:bg-white group-hover:text-siteRed">
                  <FaAngleRight />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesOffered;
