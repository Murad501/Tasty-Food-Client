import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import FoodCard from "../../../Components/FoodCard";
import { useFoods } from "../../../Context/FoodContext";

const TopFoods = () => {
  const foods = useFoods();
  const topFoods = foods.sort((a, b) => b.reviews - a.reviews).slice(0, 3);

  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h1 className="text-orange-500 font-bold text-4xl mb-5">Top Foods</h1>
        <p className="text-md font-medium text-gray-600">
          Good food nourishes our bodies with essential nutrients and energy{" "}
          <br /> needed for optimal health and wellness.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {topFoods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="/all-foods"
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-4 w-40 text-center flex justify-center items-center gap-3"
        >
          All Foods{" "}
          <span>
            <FaArrowRight></FaArrowRight>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
