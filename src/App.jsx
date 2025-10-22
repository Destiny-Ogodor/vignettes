import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

// Main pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import EnquiryForm from "./pages/EnquiryForm";
import Services from "./pages/Services";
import PartnerInstitution from "./pages/PartnerInstitution";

// Service subpages
import UkGlobalTalentVisa from "./pages/UkGlobalTalentVisa";
import StudyAbroad from "./pages/StudyAbroad";
import UsEb1a from "./pages/USEB1A";
import CanadaPermanentResidence from "./pages/CanadaPermanentResidence";
import CanadaPrStartup from "./pages/CanadaPrStartup";
import EducationAndMedicalTourism from "./pages/EducationAndMedicalTourism";

// Assessment pages
import Assessments from "./pages/Assessments";
import AssessmentsForUkGlobal from "./pages/AssessmentsForUkGlobal";
import AssessmentsForUsEB1A from "./pages/AssessmentsForUsEB1A";
import AssessmentsForUsEB2NIW from "./pages/AssessmentsForUsEB2NIW";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/enquiry-form", element: <EnquiryForm /> },
      { path: "/partner-institution", element: <PartnerInstitution /> },

      // SERVICES SECTION
      {
        path: "/services",
        children: [
          { index: true, element: <Services /> },
          { path: "uk-global-talent-visa", element: <UkGlobalTalentVisa /> },
          { path: "study-abroad", element: <StudyAbroad /> },
          { path: "us-eb1a", element: <UsEb1a /> },
          {
            path: "canada-permanent-residence",
            element: <CanadaPermanentResidence />,
          },
          {
            path: "canada-pr-startup-visa-program",
            element: <CanadaPrStartup />,
          },
          {
            path: "education-and-medical-tourism",
            element: <EducationAndMedicalTourism />,
          },
        ],
      },

      // ASSESSMENTS SECTION
      { path: "/assessments", element: <Assessments /> },
      {
        path: "/assessments-for-uk-global-talent-visa",
        element: <AssessmentsForUkGlobal />,
      },
      {
        path: "/assessments-for-us-eb1a",
        element: <AssessmentsForUsEB1A />,
      },
      {
        path: "/assessments-for-us-eb2-niw",
        element: <AssessmentsForUsEB2NIW />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
