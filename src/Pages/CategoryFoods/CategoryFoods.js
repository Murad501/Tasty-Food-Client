import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../../Components/FoodCard";

const CategoryFoods = () => {
  const { id } = useParams();
  const [categoryFoods, setCategoryFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category-food/${id}`)
      .then((res) => res.json())
      .then((data) => setCategoryFoods(data));
  }, [id]);

  return (
    <div className="mb-20">
      <h1 className="text-orange-500 font-bold text-4xl mb-10">Top Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {categoryFoods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryFoods;