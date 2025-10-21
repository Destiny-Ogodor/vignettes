import HeroSlider from "../ui/HeroSlider";
import AboutHero from "../ui/AboutHero";
import ServicesOverview from "../ui/ServicesOverview";
import CountryFlags from "../ui/CountryFlags";
import VisaProcess from "../ui/VisaProcess";
import WhyChooseUs from "../ui/WhyChooseUs";
import ServicesCta from "../ui/ServicesCta";
import TestimonialSection from "../ui/TestimonialSection";

function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutHero />
      <ServicesOverview />

      <div className="bg-gray-100 pt-24">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h5 className="-mb-2 text-sm font-semibold uppercase tracking-wider text-siteRed sm:text-lg">
            Countries we offer
          </h5>
          <h2 className="w-full text-3xl font-bold tracking-wide sm:text-4xl md:w-2/5 md:text-5xl">
            Countries We Support for Immigration{" "}
          </h2>
        </div>

        <CountryFlags />
      </div>

      <VisaProcess />
      <WhyChooseUs />
      <ServicesCta />

      <div className="relative -mb-60">
        <div
          className="absolute inset-0 bg-cover bg-left-top opacity-70"
          style={{
            backgroundImage: 'url("/bg-images/pattern-8.png")',
          }}
        ></div>
      </div>
      <TestimonialSection />
    </div>
  );
}

export default Home;
