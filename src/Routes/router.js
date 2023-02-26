import { createBrowserRouter } from "react-router-dom";
import Page404 from "../Components/Page404";
import Main from "../Layout/Main";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Blog from "../Pages/Blog/Blog";
import CategoryFoods from "../Pages/CategoryFoods/CategoryFoods";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Page404></Page404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/all-foods',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/categories/:id',
                element: <CategoryFoods></CategoryFoods>
            },
            {
                path: '/foods/:id',
                element: <FoodDetails></FoodDetails>
            }
            
        ]
    }
])