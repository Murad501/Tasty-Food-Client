import React, { createContext, useState } from "react";

export const dashboardProvider = createContext();
const DashboardContext = ({ children }) => {
  const [showDashboard, setShowDashboard] = useState(false);
  const value = { showDashboard, setShowDashboard };
  return (
    <dashboardProvider.Provider value={value}>
      {children}
    </dashboardProvider.Provider>
  );
};

export default DashboardContext;
