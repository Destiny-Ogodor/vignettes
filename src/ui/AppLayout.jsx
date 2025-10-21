import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div>
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
