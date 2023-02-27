import { createBrowserRouter } from "react-router-dom";
import Page404 from "../Components/Page404";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Blog from "../Pages/Blog/Blog";
import CategoryFoods from "../Pages/CategoryFoods/CategoryFoods";
import AddFood from "../Pages/Dashboard/AddFood/AddFood";
import MyReviews from "../Pages/Dashboard/MyReviews/MyReviews";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/all-foods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/categories/:id",
        element: <CategoryFoods></CategoryFoods>,
      },

      {
        path: "/foods/:id",
        element: <FoodDetails></FoodDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/dashboard/add-food",
        element: <AddFood></AddFood>,
      },
    ],
  },
]);
