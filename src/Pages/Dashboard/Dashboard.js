import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const menus = (
    <div className="flex flex-col gap-3 p-3">
      <span className="text-center">
        <Link
          className="font-medium bg-transparent hover:text-orange-500"
          to="/dashboard"
        >
          My Reviews
        </Link>
      </span>
      <span className="text-center">
        <Link
          className="font-medium bg-transparent hover:text-orange-500"
          to="/dashboard/my-foods"
        >
          My Foods
        </Link>
      </span>
      <span className="text-center">
        <Link
          className="font-medium bg-transparent hover:text-orange-500"
          to="/dashboard/add-food"
        >
          Add Food
        </Link>
      </span>
    </div>
  );
  return <div>{menus}</div>;
};

export default Dashboard;
