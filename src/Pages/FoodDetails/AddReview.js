import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import AnimationButton from "../../Components/AnimationButton";
import { authContext } from "../../Context/UserContext";

const AddReview = ({ food, refetch }) => {
  const { user } = useContext(authContext);
  const [isPosting, setIsPosting] = useState(false);
  const [reviewText, setReviewText] = useState("");


  const handleSubmitReview = (event) => {
    event.preventDefault();
    const review = {
      reviewText: event.target.review_text.value,
      foodId: food._id,
      time: new Date(),
      foodName: food.name,
      foodImage: food.picture,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL
    };
    console.log(review)
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setIsPosting(false);
          toast.success("Review added successfully");
          event.target.reset();
          refetch()
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto">
      <form onSubmit={handleSubmitReview}>
        <div className="mb-4">
          <label
            htmlFor="review_text"
            className="text-xl block text-gray-700 font-medium mb-2"
          >
            Your Review
          </label>
          <textarea
            onChange={(e) => setReviewText(e.target.value)}
            id="review_text"
            name="review_text"
            placeholder="type here..."
            className={`textarea textarea-bordered border-2 border-gray-300 p-2 w-full h-36  rounded-sm focus:outline-none focus:border-orange-500 focus:text-orange-500`}
            required
          />
        </div>
        <div
          className={`flex justify-end items-center ${isPosting && "hidden"}`}
        >
          <button
            disabled={!reviewText}
            onClick={() => setIsPosting(true)}
            type="submit"
            className={`bg-orange-500 text-white px-4 py-2 rounded-sm ${
              !reviewText && "bg-orange-300"
            }`}
          >
            Add Review
          </button>
        </div>
      </form>
      <div className="flex justify-end items-center">
        {isPosting ? (
          <AnimationButton text={"Posting Review"}></AnimationButton>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AddReview;
