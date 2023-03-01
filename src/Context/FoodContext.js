import React, { createContext } from "react";
import { useQuery } from "react-query";

export const foodProvider = createContext();
const FoodContext = ({ children }) => {
  const {
    data: foods = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["foods"],
    queryFn: () =>
      fetch("https://tasty-food-server.vercel.app/foods").then((res) => res.json()),
  });

  const value = {
    foods,
    refetch,
    isLoading,
  };

  return (
    <foodProvider.Provider value={value}>{children}</foodProvider.Provider>
  );
};

export default FoodContext;
