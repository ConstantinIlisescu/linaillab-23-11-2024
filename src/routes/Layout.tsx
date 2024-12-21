import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
