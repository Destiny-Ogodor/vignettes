import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import EnquiryForm from "./pages/EnquiryForm";
import Services from "./pages/Services";
import PartnerInstitution from "./pages/PartnerInstitution";
import UkGlobalTalentVisa from "./pages/UkGlobalTalentVisa";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/enquiry-form",
        element: <EnquiryForm />,
      },
      {
        path: "/services",
        children: [
          { index: true, element: <Services /> }, // <-- when /services is visited
          {
            path: "uk-global-talent-visa",
            element: <UkGlobalTalentVisa />,
          },
        ],
      },
      {
        path: "/partner-institution",
        element: <PartnerInstitution />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
