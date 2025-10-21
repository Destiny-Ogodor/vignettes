import CountryFlags from "../ui/CountryFlags";
import FooterCta from "../ui/FooterCta";
import PartnerInstitutionList from "../ui/PartnerInstitutionList";
import SinglePageHeader from "../ui/SinglePageHeader";

function PartnerInstitution() {
  return (
    <div>
      <SinglePageHeader
        title="Partner Institutions"
        backgroundImage="/contact-breadcrumb.jpg"
        breadcrumbLinks={[
          { label: "Home", to: "/" },
          { label: "Partners", to: "/partner-institution" },
        ]}
      />

      <CountryFlags />

      <div className="w-full space-y-6 px-6 py-28 text-center sm:px-16">
        <h5 className="-mb-4 text-sm font-semibold uppercase tracking-wider text-siteRed sm:text-sm">
          About Company
        </h5>
        <h2 className="mx-auto w-full text-3xl font-bold leading-tight sm:w-2/3 sm:text-4xl md:text-5xl">
          Welcome to Insights and Vignettes Consulting Firm
        </h2>
        <p className="mx-auto w-full text-[16px] leading-relaxed text-gray-600 sm:w-4/5 sm:text-lg sm:tracking-wide">
          We are in Partnership with over 300 Global Institutions in the UK,
          USA, Canada, Ireland, UAE, Germany, France and Switzerland. We keep
          this list updated as we grow in operations and also in partnership
          with institutions abroad. Please contact us if you can not find a
          preferred institution on this list. Insights and Vignettes Limited
          (IVL) is Nigeria’s leading operates in Lagos, Nigeria, with
          Representatives in some African Countries, including Ghana and Kenya.
          Plans are underway to open offices in other African Countries.
        </p>
      </div>

      <PartnerInstitutionList />
      <FooterCta />
    </div>
  );
}

export default PartnerInstitution;
