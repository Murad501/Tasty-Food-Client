import React from "react";
import { Link } from "react-router-dom";
import { FaComment, FaStar } from "react-icons/fa";
import { PhotoView } from "react-photo-view";
import { useDark } from "../Context/DarkContext";

const FoodCard = ({ food }) => {
  const { picture, price, ratings, reviews, name, description, _id } = food;
  const darkMode = useDark();
  return (
    <div
      className={`card card-compact md:w-full border ${
        darkMode && "border-gray-800"
      } rounded-sm mx-auto p-1`}
    >
      <PhotoView src={picture}>
        <img
          src={picture}
          className="h-72 w-full object-cover"
          alt="foodImage"
        />
      </PhotoView>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm font-medium">
          {description?.length > 250 ? description.slice(0, 250) : description}
          {description.length > 250 && (
            <Link
              to={`/foods/${_id}`}
              className="hover:text-orange-500 font-bold"
            >
              ...See More
            </Link>
          )}
        </p>
        <div className="grid grid-cols-3 justify-center items-center mb-4">
          <p className="font-semibold">${price}</p>
          <div className="flex items-center font-semibold">
            <span>
              <FaStar></FaStar>
            </span>
            <p className="ml-2">{ratings} Stars</p>
          </div>
          <div className="flex items-center font-semibold">
            <span>
              <FaComment></FaComment>
            </span>
            <p className="ml-2">{reviews}</p>
          </div>
        </div>

        <Link
          to={`/foods/${_id}`}
          className={`border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold py-3 px-10 text-center mx-auto`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
