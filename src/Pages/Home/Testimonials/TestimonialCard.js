import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TestimonialCard = ({review}) => {
    const{foodId, foodImage, foodName, reviewText, userPhoto, userName,liked} = review
    return (
        <Link
      to={`/foods/${foodId}`}
      className="border mx-auto px-2 py-4 md:p-5 rounded-sm hover:shadow-md mb-10 grid grid-cols-1 lg:grid-cols-4 items-center gap-5"
    >
      <img
        src={foodImage}
        className="h-full w-60 object-cover mx-auto lg:col-span-1"
        alt=""
      />

      <div className="lg:col-span-3">
        <div className=" flex justify-between mb-5">
          <div className="flex justify-start items-center gap-2">
            <h2 className="font-semibold text-lg">{foodName}</h2>
          </div>
          <p className="text-md flex items-center justify-center gap-2">
            <FaRegHeart></FaRegHeart> {liked}
          </p>
        </div>
        <p>
          <span className="font-semibold text-3xl">&ldquo;</span>
          {reviewText}
        </p>
        <div className='flex justify-end items-center gap-2 mt-5'>
        <img src={userPhoto} className='w-10 h-10 rounded-full' alt="" />
        <p className=""> - {userName}</p>
        </div>
      </div>
    </Link>
    );
};

export default TestimonialCard;