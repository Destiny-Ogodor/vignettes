import SinglePageHeader from "../ui/SinglePageHeader";

function AssessmentsForUsEB2NIW() {
  return (
    <div>
      <SinglePageHeader
        title="Assessments for US EB2 NIW"
        backgroundImage="/contact-breadcrumb.jpg"
        breadcrumbLinks={[
          { label: "Home", to: "/" },
          { label: "Assessments for US EB2 NIW", to: "/services" },
        ]}
      />
    </div>
  );
}

export default AssessmentsForUsEB2NIW;
