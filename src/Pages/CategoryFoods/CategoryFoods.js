import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../../Components/FoodCard";
import { foodProvider } from "../../Context/FoodContext";

const CategoryFoods = () => {
  const { id } = useParams();
  const {foods} = useContext(foodProvider);
  const categoryFoods = foods.filter((food) => food.categoryId === id);

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {categoryFoods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryFoods;
