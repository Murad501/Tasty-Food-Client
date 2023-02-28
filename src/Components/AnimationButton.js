import React from "react";
import { FaRadiation } from "react-icons/fa";

const AnimationButton = ({text}) => {
  return (
    <button
      type="button"
      className="bg-orange-500 flex items-center justify-center text-white px-4 py-2 rounded-sm cursor-wait"
      disabled
    >
      <FaRadiation className="animate-spin h-5 w-5 mr-3"></FaRadiation>
      {text}...
    </button>
  );
};

export default AnimationButton;
