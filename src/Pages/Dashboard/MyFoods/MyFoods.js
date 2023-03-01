import React, { useContext } from "react";
import { foodProvider } from "../../../Context/FoodContext";
import { authContext } from "../../../Context/UserContext";
import MyFoodCard from "./MyFoodCard";

const MyFoods = () => {
  const { foods } = useContext(foodProvider);
  const { user } = useContext(authContext);
  const myFoods = foods.filter((food) => food.postedBy === user?.email);
  console.log(myFoods);


  return (
    <div className={`grid grid-cols-1 ${myFoods.length && 'lg:grid-cols-2'} justify-center  gap-5`}>
      {myFoods.length ? (
        myFoods.map((food) => (
          <MyFoodCard key={food._id} food={food}></MyFoodCard>
        ))
      ) : (
        <h2 className="font-semibold text-center text-3xl">
          <span>You haven't added any food yet.</span>
        </h2>
      )}
    </div>
  );
};

export default MyFoods;
