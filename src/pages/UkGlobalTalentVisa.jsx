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

      <div className="px-4">
        <h2>UK Global Talent Visa</h2>
        <p>
          The UK Global Talent Visa is designed for individuals who are
          recognized as leaders or potential leaders in their field. This
          includes those in academia, research, arts and culture, and digital
          technology.
        </p>
      </div>
    </div>
  );
}

export default UkGlobalTalentVisa;
