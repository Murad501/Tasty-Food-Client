import React, { createContext, useContext, useEffect, useState } from "react";
import { loadingProvider } from "./LoadingContext";

export const categoryProvider = createContext();
const CategoryContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const { setIsLoading } = useContext(loadingProvider);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      });
  }, [setIsLoading]);
  return (
    <categoryProvider.Provider value={categories}>
      {children}
    </categoryProvider.Provider>
  );
};

export const useCategories = () => {
  const categories = useContext(categoryProvider);
  return categories;
};

export default CategoryContext;
