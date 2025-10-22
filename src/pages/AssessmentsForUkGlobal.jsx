import SinglePageHeader from "../ui/SinglePageHeader";

function AssessmentsForUkGlobal() {
  return (
    <div>
      <SinglePageHeader
        title="UK Global Talent Visa"
        backgroundImage="/contact-breadcrumb.jpg"
        breadcrumbLinks={[
          { label: "Home", to: "/" },
          { label: "Assessments for UK Global Visa", to: "/services" },
        ]}
      />
    </div>
  );
}

export default AssessmentsForUkGlobal;
