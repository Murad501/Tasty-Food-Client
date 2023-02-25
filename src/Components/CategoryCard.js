import React from "react";

const CategoryCard = ({ category }) => {
  console.log();
  return (
    <div className="mx-auto hover:text-orange-500">
      <img src={category?.picture} alt="categoryImage" />
      <h2 className="text-center font-bold text-2xl mt-2">{category?.name}</h2>
    </div>
  );
};

export default CategoryCard;
