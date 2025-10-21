import { BsPassport } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const visaStats = [
  {
    icon: <BsPassport />,
    title: "Visa Process",
    details: "Sed perspiciatis undm nise este natus sit volutate",
  },
  {
    icon: <BsPassport />,
    title: "99% Visa Approvals",
    details: "Sed perspiciatis undm nise este natus sit volutate",
  },
  {
    icon: <BsPassport />,
    title: "Immigration",
    details: "Sed perspiciatis undm nise este natus sit volutate",
  },
];

function VisaProcess() {
  return (
    <div
      className="relative mb-40 h-[100vh] w-full bg-cover bg-center after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/40 after:to-black/80 after:content-[''] sm:h-[85vh]"
      style={{
        backgroundImage: 'url("/01.jpg")',
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-30 flex h-full w-full flex-col items-center justify-center">
        <div className="justify-centertext-center flex cursor-pointer rounded-full bg-white p-12 text-2xl text-siteRed">
          <FaPlay />
        </div>

        <div className="absolute bottom-0 -mb-48 hidden w-11/12 flex-col gap-6 bg-white px-12 py-12 shadow-lg sm:-mb-28 sm:flex-row md:flex">
          {visaStats.map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="rounded-full bg-gray-100 p-10 text-4xl text-siteRed">
                {stat.icon}
              </span>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{stat.title}</h3>
                <p className="text-gray-600">{stat.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisaProcess;
