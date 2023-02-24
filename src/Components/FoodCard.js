import React from "react";
import { Link } from "react-router-dom";

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
          primary purpose for food was to provide energy in the harsh... <Link to='/' className="text-orange-500 font-semibold">See More</Link>
        </p>
        <div className="flex justify-center items-center">
        <p className="text-orange-500 font-bold text-lg mb-2">$19.99</p>
        <div className="flex items-center mb-4">
          <div className="text-orange-500">
            <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 12.585L3.828 16.73 5.44 10.416.88 6.27l6.716-.98L10 0l2.404 5.29 6.716.98-4.56 4.145 1.613 6.314L10 12.585z"/>
            </svg>
          </div>
          <div className=" ml-2">4.5 Stars</div>
        </div>
        </div>
        
        <Link to='/' className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-4 w-40 text-center mx-auto">View Details</Link>
      </div>
    </div>
  );
};

export default FoodCard;
