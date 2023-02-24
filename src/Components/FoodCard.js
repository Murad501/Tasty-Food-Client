import React from "react";
import { Link } from "react-router-dom";
import { FaComment, FaStar } from "react-icons/fa";

const FoodCard = () => {
  return (
    <div className="card card-compact md:w-full border rounded-sm mx-auto p-1">
      <figure>
        <img
          src="https://www.islamicity.org/food/catalog/241.1200.jpg?&v=03132021"
          className="h-72 w-full object-cover"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Finnish Salmon Soup</h2>
        <p className="text-sm font-medium">
          In times past, Finnish food was seasonal; in winter there were no
          easily available green vegetables, etc., as there are now – and the
          primary purpose for food was to provide energy in the harsh...{" "}
          <Link to="/" className="hover:text-orange-500 font-bold">
            See More
          </Link>
        </p>
        <div className="grid grid-cols-3 justify-center items-center mb-4">
          <p className="text-orange-500 font-bold text-lg">$19.99</p>
          <div className="flex items-center">
            <span className="text-orange-500">
              <FaStar></FaStar>
            </span>
            <p className="ml-2">4.5 Stars</p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">
              <FaComment></FaComment>
            </span>
            <p className="ml-2">21</p>
          </div>
        </div>

        <Link
          to="/"
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-10 text-center mx-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
