import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-8 lg:grid-cols-9 min-h-screen">
        <div className="md:col-span-2 border-r border-t">
          <Dashboard></Dashboard>
        </div>
        <div className="md:col-span-6 lg:col-span-7 border-t p-5">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
