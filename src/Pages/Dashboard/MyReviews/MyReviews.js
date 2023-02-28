import React, { useContext } from "react";
import { useQuery } from "react-query";
import { loadingProvider } from "../../../Context/LoadingContext";
import { authContext } from "../../../Context/UserContext";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const { setIsLoading } = useContext(loadingProvider);

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/reviews?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  if (!reviews.length) {
    return setIsLoading(true);
  } else {
    setIsLoading(false);
  }

  return (
    <div>
      {
        reviews.map(review => <MyReviewCard key={review._id} review={review}></MyReviewCard>)
      }
    </div>
  );
};

export default MyReviews;
