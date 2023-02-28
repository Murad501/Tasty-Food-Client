import React, { createContext, useContext, useEffect, useState } from "react";
import { loadingProvider } from "./LoadingContext";

const foodProvider = createContext();
const FoodContext = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const { setIsLoading } = useContext(loadingProvider);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setIsLoading(false);
      });
  }, [setIsLoading]);
  return (
    <foodProvider.Provider value={foods}>{children}</foodProvider.Provider>
  );
};

export const useFoods = () => {
  const foods = useContext(foodProvider);
  return foods;
};

export default FoodContext;
