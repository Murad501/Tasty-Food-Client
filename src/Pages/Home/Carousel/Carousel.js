import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { foodProvider } from "../../../Context/FoodContext";
import "./Carousel.css";

const Carousel = () => {
  const {foods} = useContext(foodProvider);
  const [active, setActive] = useState(0);
  return (
    <div className="h-[600px] carousel-section relative">
      <div className="carousel w-full h-full">
        {foods.slice(0, 4).map((food, id) => (
          <Link to={`/foods/${food._id}`}
            key={food._id}
            id={`item${id + 1}`}
            className="carousel-item w-full relative sndHeader"
            style={{
              "--img": `url(${food.picture}), 
      linear-gradient(#e66465, #9198e5)`,
            }}
          >
            <div className="absolute bottom-24 m-auto left-0 right-0 max-w-5xl text-white px-2 xl:px-0">
              <h1>
                {food.description.length > 200
                  ? food.description.slice(0, 200)
                  : food.description}
                {food.description.length > 200 && (
                  <Link className="font-semibold text-orange-500">
                    See More
                  </Link>
                )}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-10">
        {foods.slice(0, 4).map((food, id) => (
          <a
            onClick={() => setActive(id)}
            key={food._id}
            href={`#item${id + 1}`}
            className={`w-4 h-4 rounded-full ${
              active === id ? "bg-orange-500" : "bg-white"
            }`}
          >
            {" "}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
