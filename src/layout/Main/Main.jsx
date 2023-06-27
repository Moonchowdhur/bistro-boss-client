import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  console.log(noHeaderFooter);
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      <ScrollRestoration />
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
