// 
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Setting up the constant layout we want on the page.
const Layout = () => {
  return (
      // Returning the components
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default Layout;
