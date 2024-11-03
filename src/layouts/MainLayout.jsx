import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto ">
      {/* Navbar section code*/}
      <Navbar />
      {/* Outlet section code */}
      <div className="min-h-[calc(100vh-232px)]">
        <Outlet />
      </div>
      {/* Footer section code */}
      <Footer />
    </div>
  );
};

export default MainLayout;
