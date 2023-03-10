import React, { useContext } from "react";
import CategoryCard from "../../../Components/CategoryCard";
import { categoryProvider } from "../../../Context/CategoryContext";

const FoodCategories = () => {
  const { categories } = useContext(categoryProvider);

  return (
    <div className="my-20">
      <h1 className="text-orange-500 font-bold text-center text-4xl mb-10">
        Food Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center max-w-5xl mx-auto">
        {categories.map((category, id) => (
          <CategoryCard key={id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
