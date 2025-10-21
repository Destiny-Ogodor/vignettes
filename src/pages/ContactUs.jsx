import ContactForm from "../ui/ContactForm";
import ContactUsHeader from "../ui/ContactUsHeader";
import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";

function ContactUs() {
  const infoBox = [
    {
      icon: FaPhone,
      title: "Call For Inquiry",
      info: "+236 (456) 896 22",
    },
    {
      icon: FaEnvelope,
      title: "Send Us Email",
      info: "info@example.com",
    },
    {
      icon: FaMapLocation,
      title: "Location",
      info: "TheBunker, 279 Hebert Marcaulay Way, Alagomeji, Yaba",
    },
  ];

  return (
    <div>
      <ContactUsHeader />

      <main className="flex h-full w-screen flex-col gap-20 bg-stone-100 px-8 py-16 md:flex-row md:gap-10 md:px-24 md:py-28">
        <div className="w-full px-10 pt-14 sm:w-1/2 md:pr-10">
          <div className="flex flex-col gap-8">
            <h5 className="font-bold uppercase tracking-widest text-siteRed">
              Get In Touch
            </h5>
            <h3 className="-mt-4 text-4xl font-bold md:text-6xl">Contact Us</h3>
            <p className="text-sm text-gray-600 md:text-lg">
              We denounce with righteous indignation and like men beguiled and
              demoralized by the charms
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {infoBox.map((info, i) => (
              <div className="flex items-center gap-8" key={i}>
                <span className="text-2xl font-thin text-siteRed md:text-3xl">
                  {<info.icon />}
                </span>
                <div className="space-y-1 md:space-y-2">
                  <h5 className="text-sm font-light tracking-wider text-siteRed md:text-lg">
                    {info.title}
                  </h5>
                  <h3 className="text-base font-semibold text-gray-600 md:text-xl">
                    {info.info}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-full w-full md:w-1/2">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

export default ContactUs;
