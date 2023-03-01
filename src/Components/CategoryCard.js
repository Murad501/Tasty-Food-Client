import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/categories/${category._id}`}
      className="mx-auto hover:text-orange-500"
    >
      <img src={category?.picture} alt="categoryImage" />
      <h2 className="text-center font-bold text-2xl mt-2">{category?.name}</h2>
    </Link>
  );
};

export default CategoryCard;
