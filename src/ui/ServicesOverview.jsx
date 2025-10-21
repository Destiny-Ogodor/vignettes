import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function ServicesOverview() {
  const servicesList = [
    {
      service: "Business Visa",
      description:
        " Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
      img: "/01-8.jpg",
    },
    {
      service: "Student Visa",
      description:
        "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
      img: "/02-7.jpg",
    },
    {
      service: "Work visa",
      description:
        "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
      img: "/03-6.jpg",
    },
    {
      service: "Tourist visa",
      description:
        "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum",
      img: "/04-4.jpg",
    },
  ];
  return (
    <div
      className="bg-opacity-60 bg-cover bg-center px-6 py-28 md:px-16"
      style={{
        backgroundImage: 'url("/bg-images/icon-wide-map.png")',
      }}
    >
      <div className="flex flex-col items-center space-y-6 text-center">
        <h5 className="-mb-2 text-sm font-semibold uppercase tracking-wider text-siteRed sm:text-lg">
          Services We Provide
        </h5>
        <h2 className="w-full text-3xl font-bold tracking-wide sm:text-4xl md:w-2/3 md:text-5xl">
          Explore Our Visa Citizenship & Immigration Services
        </h2>
      </div>

      <div>
        <div className="flex flex-col gap-10 overflow-hidden pt-20 sm:flex-row sm:flex-wrap sm:justify-center md:flex-nowrap">
          {servicesList.map((service, i) => (
            <div
              className="group w-full bg-[#F5F5F7] ease-in-out sm:w-5/12 md:w-1/4"
              key={i}
            >
              <div className="space-y-8 p-8 py-12 transition-all duration-500 group-hover:bg-siteRed group-hover:text-white">
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
    </div>
  );
}

export default ServicesOverview;
