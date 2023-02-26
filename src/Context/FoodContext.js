import React, { createContext, useContext, useEffect, useState } from 'react';

const foodProvider = createContext()
const FoodContext = ({children}) => {
    const [foods, setFoods] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return (
        <foodProvider.Provider value={foods}>
            {children}
        </foodProvider.Provider>
    );
};

export const useFoods = () => {
    const foods = useContext(foodProvider)
    return foods
}

export default FoodContext;