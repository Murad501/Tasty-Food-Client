import { format, parseISO } from "date-fns";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDark } from "../Context/DarkContext";

const ReviewCard = ({ review }) => {
  const { userName, reviewText, userPhoto, time, liked } = review;
  const dateObj = parseISO(time) 
  const formateDate = format(dateObj, 'MMMM dd, yyyy')
  const darkMode = useDark()
  return (
    <div className={`border ${darkMode && 'border-gray-800'} mx-auto px-10 py-6 rounded-sm hover:shadow-md mb-10`}>
      <div className=" flex justify-between mb-5">
        <div className="flex justify-start items-center gap-2">
        <img src={userPhoto} className="avatar w-10 rounded-full" alt="" />
        <h2 className="font-semibold text-lg">{userName}</h2>
        </div>
        <p className="text-md flex items-center justify-center gap-2">
          <FaRegHeart></FaRegHeart> {liked}
        </p>
      </div>
      <p>
        <span className="font-semibold text-3xl">&ldquo;</span> {reviewText}
      </p>
      <p className="text-end mt-5"> - {formateDate}</p>
    </div>
  );
};

export default ReviewCard;
