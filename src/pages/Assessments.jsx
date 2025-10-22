import SinglePageHeader from "../ui/SinglePageHeader";

function Assessments() {
  return (
    <div>
      <SinglePageHeader
        title="All Assessments"
        backgroundImage="/contact-breadcrumb.jpg"
        breadcrumbLinks={[
          { label: "Home", to: "/" },
          { label: "All Assessments", to: "/services" },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold">Free Assessments</h1>
        <p>
          Free Assessments At Insights and Vignettes Limited, we have designed
          systems that provide talents with the right information, materials and
          tools. We offer free preliminary assessments to help individuals
          determine their eligibility for distinguished visa categories,
          including the UK Global Talent Visa, EB-2 NIW (National Interest
          Waiver), and EB-1A (Extraordinary Ability Green Card).
        </p>
        <p className="text-lg text-gray-700">
          Our assessments are designed to evaluate your background,
          accomplishments, and qualifications to guide you toward the most
          strategic and achievable immigration pathway. Our firm is committed to
          providing clear, honest insight into your options before you begin the
          application process.
        </p>

        <p>
          Should we find your profile viable, we will schedule you for a
          complimentary call.
        </p>
      </div>
    </div>
  );
}

export default Assessments;
