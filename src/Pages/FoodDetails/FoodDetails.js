import React, { useState } from "react";
import { PhotoView } from "react-photo-view";
import { useParams } from "react-router-dom";
import ReviewCard from "../../Components/ReviewCard";
import { useFoods } from "../../Context/FoodContext";

const FoodDetails = () => {
  const [showReview, setShowReview] = useState(false);
  const { id } = useParams();
  const foods = useFoods();
  const food = foods.find((food) => food._id === id);
  const { picture, name, description, ingredients, preparation } = food;
  console.log(food);
  return (
    <div className="mb-20">
      <div className="text-center max-w-5xl mx-auto mb-3">
        <h1 className="font-bold  text-3xl my-5">{name}</h1>
        <PhotoView src={picture}>
          <img src={picture} alt="" />
        </PhotoView>
        <p className="my-5">{description}</p>
      </div>
      <div className="my-10 flex justify-center items-center gap-10">
        <button
          onClick={() => setShowReview(false)}
          className={`border-b-2 px-5 py-3 font-semibold text-lg ${!showReview && 'text-orange-500 border-orange-500'}`}
        >
          Recipe
        </button>
        <button
          onClick={() => setShowReview(true)}
          className={`border-b-2 px-5 py-3 font-semibold text-lg ${showReview && 'text-orange-500 border-orange-500'}`}
        >
          Reviews
        </button>
      </div>
      {showReview ? (
        <div>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </div>
      ) : (
        <div className="border m-2 p-2">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 mb-5">
            <h2 className="font-semibold text-2xl mb-3">Ingredients</h2>
            {ingredients.map((text, idx) => (
              <p key={idx} className="">
                * {text}
              </p>
            ))}
          </div>
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h2 className="font-semibold text-2xl mb-3">Preparation</h2>
            {preparation.map((text, idx) => (
              <p key={idx} className="">
                * {text}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
