import React, { useContext } from "react";
import { useQuery } from "react-query";
import { loadingProvider } from "../../../Context/LoadingContext";
import { authContext } from "../../../Context/UserContext";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const { setIsLoading } = useContext(loadingProvider);

  const { data: reviews = [], isLoading  } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: () =>
      fetch(`https://tasty-food-server.vercel.app/my-reviews?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
      .then((res) => res.json())
  });

  if (isLoading) {
    return setIsLoading(true);
  } else {
    setIsLoading(false);
  }
  // if(error){
  //   setIsLoading(false)
  // }

  return (
    <div>
      {reviews.length
        ? reviews.map((review) => (
            <MyReviewCard key={review._id} review={review}></MyReviewCard>
          ))
        : <h2 className="font-semibold text-center text-3xl">You haven't added any food yet.</h2>}
    </div>
  );
};

export default MyReviews;
