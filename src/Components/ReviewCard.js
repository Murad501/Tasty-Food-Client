import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="max-w-6xl border mx-auto px-10 py-6 rounded-sm hover:shadow-md mb-10">
      <div className=" flex justify-between mb-5">
        <h2 className="font-semibold text-lg">Apex Wipe</h2>
        <p className="text-md flex items-center justify-center gap-2">
          <FaRegHeart></FaRegHeart> 23
        </p>
      </div>
      <p>
        <span className="font-semibold text-3xl">&ldquo;</span> Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Est sapiente dolore harum
        ab voluptas autem perspiciatis nam velit a illo voluptatum quisquam rem
        illum earum minus, amet eaque, neque, laudantium praesentium reiciendis
        consequuntur ullam libero animi nihil. Delectus recusandae consequuntur
        ab placeat perferendis sit amet eos eius dolore minima reprehenderit
        dolorum.
      </p>
    </div>
  );
};

export default ReviewCard;
