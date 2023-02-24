import React from "react";
import FoodCard from "../../../Components/FoodCard";

const TopFoods = () => {
  return (
    <div className="mt-20">
      <h1 className="text-orange-500 font-bold text-4xl text-center mb-10">
        Top Foods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </div>
    </div>
  );
};

export default TopFoods;
