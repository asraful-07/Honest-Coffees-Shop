import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="container mx-auto ">
      <Toaster />
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
