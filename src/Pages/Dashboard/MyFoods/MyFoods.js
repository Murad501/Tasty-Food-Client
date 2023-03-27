import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { foodProvider } from "../../../Context/FoodContext";
import { authContext } from "../../../Context/UserContext";
import MyFoodCard from "./MyFoodCard";

const MyFoods = () => {
  const { foods } = useContext(foodProvider);
  const { user } = useContext(authContext);
  const myFoods = foods.filter((food) => food.postedBy === user?.email);

  return (
    <div>
      {myFoods.length ? (
        <div className={`grid grid-cols-1 lg:grid-cols-2 justify-center gap-5`}>
          {myFoods.map((food) => (
            <MyFoodCard key={food._id} food={food}></MyFoodCard>
          ))}
        </div>
      ) : (
        <h2 className="font-semibold text-center text-3xl">
          <span>
            You haven't added any food yet.{" "}
            <Link to="/dashboard/add-food" className="text-orange-500">
              Add Now
            </Link>
          </span>
        </h2>
      )}
    </div>
  );
};

export default MyFoods;
