import React, { useContext, useState } from "react";
import { PhotoView } from "react-photo-view";
import { Link, useLocation, useParams } from "react-router-dom";
import ReviewCard from "../../Components/ReviewCard";
import { foodProvider } from "../../Context/FoodContext";
import { loadingProvider } from "../../Context/LoadingContext";
import AddReview from "./AddReview";
import { useQuery } from "react-query";
import { authContext } from "../../Context/UserContext";

const FoodDetails = () => {
  const [showReview, setShowReview] = useState(false);
  const { setIsLoading } = useContext(loadingProvider);
  const { id } = useParams();
  const { foods } = useContext(foodProvider);
  const { user } = useContext(authContext);
  const location = useLocation();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["food-reviews", id],
    queryFn: () =>
      fetch(`https://tasty-food-server.vercel.app/food-reviews?id=${id}`).then((res) =>
        res.json()
      ),
  });

  if (!foods.length) {
    return setIsLoading(true);
  } else {
    setIsLoading(false);
  }

  const food = foods.find((food) => food._id === id);

  const { picture, name, description, ingredients, preparation } = food;

  return (
    <div className="mb-20">
      <div className="text-center max-w-5xl mx-auto mb-3">
        <h1 className="font-bold  text-3xl my-5">{name}</h1>
        <PhotoView src={picture}>
          <img className="mx-auto max-h-96" src={picture} alt="" />
        </PhotoView>
        <p className="my-5">{description}</p>
      </div>
      <div className="my-10 flex justify-center items-center gap-10">
        <button
          onClick={() => setShowReview(false)}
          className={`border-b-2 px-5 py-3 font-semibold text-lg ${
            !showReview && "text-orange-500 border-orange-500"
          }`}
        >
          Recipe
        </button>
        <button
          onClick={() => setShowReview(true)}
          className={`border-b-2 px-5 py-3 font-semibold text-lg ${
            showReview && "text-orange-500 border-orange-500"
          }`}
        >
          Reviews
        </button>
      </div>
      {showReview ? (
        <div className="max-w-6xl mx-auto">
          {reviews.length ? (
            reviews.map((review) => (
              <ReviewCard key={review._id} review={review}></ReviewCard>
            ))
          ) : (
            <p className="text-center font-semibold text-3xl">
              No review found for this food
            </p>
          )}
        </div>
      ) : (
        <div className="border m-2 p-2 max-w-6xl mx-auto">
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
      {showReview && user ? (
        <AddReview food={food} refetch={refetch}></AddReview>
      ) : (
        ""
      )}
      {!user && showReview ? (
        <h3 className="flex justify-center items-center text-center my-10 gap-1 text-lg font-semibold">
          Want to give a Review?{" "}
          <Link
            to="/signin"
            state={{ from: location }}
            replace
            className="text-orange-500"
          >
            Login
          </Link>
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default FoodDetails;
