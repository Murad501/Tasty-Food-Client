import React, { useState } from "react";
import { FaComment, FaEdit, FaStar, FaTrash } from "react-icons/fa";
import { PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { useDark } from "../../../Context/DarkContext";

const MyFoodCard = ({ food }) => {
  const { picture, price, ratings, reviews, name, description, _id } = food;
  const darkMode = useDark()

  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <div className={`card card-compact md:w-full border ${darkMode && 'border-gray-700'} rounded-sm mx-auto p-1`}>
      {overlayVisible ? (
        <div
          onMouseEnter={() => setOverlayVisible(true)}
          onMouseLeave={() => setOverlayVisible(false)}
          className="absolute top-3 right-3 flex justify-center items-center gap-5 z-10"
        >
          <button className="text-white text-xl">
            <FaEdit></FaEdit>
          </button>
          <button className="text-white text-xl">
            <FaTrash></FaTrash>
          </button>
        </div>
      ) : (
        ""
      )}
      <div>
        <PhotoView src={picture}>
          <div className="relative">
            <img
              src={picture}
              onMouseEnter={() => setOverlayVisible(true)}
              onMouseLeave={() => setOverlayVisible(false)}
              className="h-72 w-full object-cover"
              alt="foodImage"
            />

            <div
              onMouseEnter={() => setOverlayVisible(true)}
              onMouseLeave={() => setOverlayVisible(false)}
              className={`absolute inset-0 bg-black opacity-50 ${
                overlayVisible ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </PhotoView>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm font-medium">
            {description?.length > 250
              ? description.slice(0, 250)
              : description}
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
        </div>
      </div>
    </div>
  );
};

export default MyFoodCard;
