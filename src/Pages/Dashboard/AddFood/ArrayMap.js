import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const ArrayMap = ({ item }) => {
  const { arrayItem, setArrayItem, name } = item;
  const [showAll, setShowAll] = useState(false);

  const handleRemoveItem = (value) => {
    const index = arrayItem.indexOf(value);
    if (index > -1) {
      arrayItem.splice(index, 1);
    }
    setArrayItem(arrayItem);
  };
  return (
    <>
      {arrayItem.length ? (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold mb-2">{name}</h2>
            {showAll ? (
              <span
                onClick={() => {
                  setShowAll(!showAll);
                }}
              >
                <FaMinus></FaMinus>
              </span>
            ) : (
              <span
                onClick={() => {
                  setShowAll(!showAll);
                }}
              >
                <FaPlus></FaPlus>
              </span>
            )}
          </div>
          {showAll && (
            <ul>
              {arrayItem.map((value, index) => (
                <span key={index} className="flex items-center gap-2">
                  {" "}
                  <FaTrash
                    onClick={() => handleRemoveItem(value)}
                    className="hover:text-red-500"
                  ></FaTrash>{" "}
                  <li>{value}</li>
                </span>
              ))}
            </ul>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ArrayMap;
