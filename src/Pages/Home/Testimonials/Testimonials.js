import React from "react";
import { useQuery } from "react-query";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const { data: testimonials = [] } = useQuery({
    queryKey: ["top-reviews"],
    queryFn: () =>
      fetch("https://tasty-food-server.vercel.app/top-reviews").then((res) => res.json()),
  });
  return (
    <div className="p-1">
      <h1 className="text-orange-500 font-bold text-2xl md:text-4xl my-10 text-center">Top Reviews</h1>
      <div className="max-w-5xl mx-auto">
        {testimonials.map((review) => (
          <TestimonialCard review={review} key={review._id}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
