import ServicesCta from "../ui/ServicesCta";
import ServicesHero from "../ui/ServicesHero";
import ServicesOffered from "../ui/ServicesOffered";
import ServicesOverview from "../ui/ServicesOverview";
import SinglePageHeader from "../ui/SinglePageHeader";

function Services() {
  return (
    <div>
      <SinglePageHeader
        title="Services"
        backgroundImage="/contact-breadcrumb.jpg"
        breadcrumbLinks={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
        ]}
      />

      <ServicesHero />
      <ServicesOffered />
      <ServicesCta />
      <ServicesOverview />
    </div>
  );
}

export default Services;
