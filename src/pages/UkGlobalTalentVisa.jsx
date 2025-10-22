import SinglePageHeader from "../ui/SinglePageHeader";

function UkGlobalTalentVisa() {
  return (
    <div>
      <SinglePageHeader
        title="Services"
        backgroundImage="/contact-breadcrumb.jpg"
        breadcrumbLinks={[
          { label: "Home", to: "/" },
          { label: "UK Global Talent Visa", to: "/services" },
        ]}
      />
    </div>
  );
}

export default UkGlobalTalentVisa;
