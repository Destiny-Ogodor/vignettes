import SinglePageHeader from "../ui/SinglePageHeader";

function AssessmentsForUsEB1A() {
  return (
    <div>
      <SinglePageHeader
        title="Assessments for US EB1A"
        backgroundImage="/contact-breadcrumb.jpg"
        breadcrumbLinks={[
          { label: "Home", to: "/" },
          { label: "Assessments for US EB1A", to: "/services" },
        ]}
      />
    </div>
  );
}

export default AssessmentsForUsEB1A;
