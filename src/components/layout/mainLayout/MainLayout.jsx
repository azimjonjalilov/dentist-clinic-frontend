import { Outlet } from "react-router-dom";
import Header from "../../ui/header/Header";
import Footer from "../../ui/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
