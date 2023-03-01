import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import { dashboardProvider } from "../Context/DashboardContext";
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  const {showDashboard, setShowDashboard} = useContext(dashboardProvider)
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-8 lg:grid-cols-9 min-h-screen">
        <div className={`md:col-span-2 border-r h-auto border-t relative ${!showDashboard && 'hidden'} md:block`}>
          <Dashboard></Dashboard>
          <span onClick={()=>setShowDashboard(false)} className="absolute top-2 right-2  p-1 md:hidden border rounded-full cursor-pointer hover:text-orange-500 hover:border-orange-500"><FaTimes className="w-4 h-4"></FaTimes></span>
        </div>
        <div className="md:col-span-6 lg:col-span-7 border-t p-1 md:p-5">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
