import React from 'react';
import Carousel from './Carousel/Carousel';
import FoodCategories from './FoodCategories/FoodCategories';
import TopFoods from './TopFoods/TopFoods';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <TopFoods></TopFoods>
            <FoodCategories></FoodCategories>
        </div>
    );
};

export default Home;