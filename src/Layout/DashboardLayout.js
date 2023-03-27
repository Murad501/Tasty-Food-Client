import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import { useDark } from "../Context/DarkContext";
import { dashboardProvider } from "../Context/DashboardContext";
import Dashboard from "../Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  const { showDashboard, setShowDashboard } = useContext(dashboardProvider);
  const darkMode = useDark();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 grid md:grid-cols-8 lg:grid-cols-9">
        <div
          className={`md:col-span-2  border md:border-r md:border-t md:border-l-0 md:border-b-0 relative mx-1 md:mx-0 ${
            !showDashboard && "hidden"
          } md:block ${darkMode && "border-gray-700"}`}
        >
          <Dashboard></Dashboard>
          <span
            onClick={() => setShowDashboard(false)}
            className="absolute top-2 right-2  p-1 md:hidden border border-gray-800 rounded-full cursor-pointer hover:text-orange-500 hover:border-orange-500"
          >
            <FaTimes className="w-4 h-4"></FaTimes>
          </span>
        </div>
        <div
          className={`flex justify-center items-center py-5 md:col-span-6 lg:col-span-7 md:border-t p-1 md:p-5 ${
            darkMode && "border-gray-700"
          }`}
        >
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
