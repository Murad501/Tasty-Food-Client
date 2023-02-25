import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import FoodCard from "../../Components/FoodCard";

const AllFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/foods")
        .then((res) => res.json())
        .then((data) => setFoods(data));
    }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
       {
        foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
       }
      </div>
      <div className="flex justify-center items-center mb-10">
        <Link
          to="/"
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-4 w-40 text-center flex justify-center items-center gap-3"
        >
          <span>
            <FaHome></FaHome>
          </span>
          Home
        </Link>
      </div>
    </div>
  );
};

export default AllFoods;
