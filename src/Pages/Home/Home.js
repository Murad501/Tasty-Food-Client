import React from 'react';
import Carousel from './Carousel/Carousel';
import FoodCategories from './FoodCategories/FoodCategories';
import Testimonials from './Testimonials/Testimonials';
import TopFoods from './TopFoods/TopFoods';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <TopFoods></TopFoods>
            <FoodCategories></FoodCategories>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;