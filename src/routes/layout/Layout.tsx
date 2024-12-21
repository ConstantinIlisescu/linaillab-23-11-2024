import { Outlet } from "react-router-dom";
import Navigation from "@/routes/navigation/Navigation";
import Footer from "@/routes/footer/Footer";
import useScrollToEffect from "@/utils/hooks/useScrollToEffect";

const Layout = () => {
  useScrollToEffect();
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
