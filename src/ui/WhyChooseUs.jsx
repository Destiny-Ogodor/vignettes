import { BsPassport } from "react-icons/bs";

const whyUs = [
  {
    icon: <BsPassport />,
    title:
      "Insights and tools on talent visa (UK Global Talent Visa, US EB2-NIW, US EB1A)",
  },
  {
    icon: <BsPassport />,
    title: "Guaranteed admission",
  },
  {
    icon: <BsPassport />,
    title:
      "We promote only post-graduation work permit eligible study programs",
  },
  {
    icon: <BsPassport />,
    title:
      "Access to crucial information like program tuition fees payment plan",
  },
  {
    icon: <BsPassport />,
    title: "Visa application support",
  },
  {
    icon: <BsPassport />,
    title: "Work-Study Option Available",
  },
  {
    icon: <BsPassport />,
    title: "No IELTS/TOEFL Needed",
  },
  {
    icon: <BsPassport />,
    title:
      "Year-round intakes include January, May, September, October & November",
  },
  {
    icon: <BsPassport />,
    title:
      "Scholarships in form of tuition fees discount are available in some cases",
  },
];
function WhyChooseUs() {
  return (
    <div className="px-6 pb-16 sm:px-16 md:py-28">
      <div className="flex flex-col gap-12 sm:flex-row">
        <div className="w-full space-y-3 sm:space-y-8 md:w-[45%]">
          <h5 className="-mb-3 text-xs font-semibold uppercase tracking-wider text-siteRed sm:text-sm">
            Why Choose Us
          </h5>
          <h2 className="text-2xl font-bold leading-tight md:text-3xl">
            Benefits of working with Insights and Vignettes Limited (IVL)
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:tracking-wide">
            Here are some of the benefits of working with Insights and Vignettes
            Limited to achieve your moving abroad and study abroad goal.
          </p>

          <div>
            <div className="flex flex-col gap-7 bg-white py-6">
              {whyUs.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-5 sm:text-start"
                >
                  <span className="rounded-full text-xl text-siteRed">
                    {stat.icon}
                  </span>
                  <div className="">
                    <h3 className="text-lg font-semibold sm:text-sm">
                      {stat.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-0">
          <div className="flex w-full flex-col items-center md:w-[60%]">
            <img src="/01-2.jpg" alt="" />

            <div className="-mt-24 w-64 space-y-6 bg-siteRed px-8 py-12 text-start text-white">
              <h3 className="text-2xl font-bold"> 10M+ Trusted Customers</h3>
              <img src="/client-1.png" alt="clients" />
            </div>
          </div>
          <div className="hidden w-[40%] space-y-6 md:block">
            <img src="/02-1.jpg" alt="" className="h-2/5 w-full" />
            <img src="/03-1.jpg" alt="" className="h-3/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
