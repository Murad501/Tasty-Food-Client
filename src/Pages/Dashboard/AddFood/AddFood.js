import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaCheck, FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { categoryProvider } from "../../../Context/CategoryContext";
import { foodProvider } from "../../../Context/FoodContext";
import { loadingProvider } from "../../../Context/LoadingContext";
import { authContext } from "../../../Context/UserContext";
import ArrayMap from "./ArrayMap";

const AddFood = () => {
  const [ingredientValue, setIngredientValue] = useState("");
  const [ingredientArray, setIngredientArray] = useState([]);
  const [preparationValue, setPreparationValue] = useState("");
  const [preparationArray, setPreparationArray] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const {setIsLoading} = useContext(loadingProvider)
  const {categories} = useContext(categoryProvider)
  const {user} = useContext(authContext)
  const imgbbApi = process.env.REACT_APP_imgbbApi;
  const { refetch } = useContext(foodProvider);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true)
    const image = data.profileImage[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data.url) {
          const imgUrl = result.data.url;
          const food = {
            postedBy: user.email,
            categoryId: data.category,
            picture: imgUrl,
            price: data.price,
            rating: 0,
            reviews: 0,
            name: data.name,
            description: data.description,
            registered: new Date(),
            ingredients: ingredientArray,
            preparation: preparationArray
          }
          fetch('https://tasty-food-server.vercel.app/foods', {
            method: 'POST', 
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(food)
          })
          .then(res => res.json())
          .then(data => {
          })
          setIsLoading(false)
          refetch()
          navigate('/dashboard/my-foods')
          toast.success("image upload successfully");
        }
      });
  };

  function handleImageChange(event) {
    const image = event.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
    }
  }

  function handleRemoveImage(e) {
    setSelectedImage(null);
  }

  const handleButtonClick = () => {
    if (ingredientValue) {
      setIngredientArray([...ingredientArray, ingredientValue]);
      setIngredientValue("");
    } else {
      setPreparationArray([...preparationArray, preparationValue]);
      setPreparationValue("");
    }
  };

  return (
    <div>
      <h1 className="text-orange-500 font-bold text-2xl md:text-4xl my-10 text-center">
        Add a Food Recipe
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
      <div className="mb-4 md:col-span-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className={`border-2 border-gray-300 p-2 w-full  rounded-sm focus:outline-none focus:border-orange-500 focus:text-orange-500`}
              required
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Category
            </label>
            <select
              type="text"
              id="category"
              {...register("category", { required: true })}
              className={`border-2 border-gray-300 p-2 w-full  rounded-sm focus:outline-none focus:border-orange-500 focus:text-orange-500`}
              required
            >
              {
                categories.map((category, idx) => <option value={category._id} key={category._id}>{category.name}</option>)
              }
            </select>
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price $
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              className={`border-2 border-gray-300 p-2 w-full  rounded-sm focus:outline-none focus:border-orange-500 focus:text-orange-500`}
              required
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className={`textarea textarea-bordered border-2 border-gray-300 p-2 w-full  rounded-sm focus:outline-none focus:border-orange-500 focus:text-orange-500`}
            required
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>
        {/* Ingredients */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2"
          >
            Ingredients
          </label>
          <div className="relative">
            <textarea
              value={ingredientValue}
              onChange={(e) => setIngredientValue(e.target.value)}
              className="textarea textarea-bordered border-2 border-gray-300 p-2 w-full  rounded-sm focus:outline-none focus:border-orange-500 focus:text-orange-500"
            />
            {ingredientValue && (
              <button
                className="absolute right-5 border border-orange-500 bg-white  p-1 rounded-full mt-[10px]"
                onClick={handleButtonClick}
              >
                <FaCheck className="text-orange-500 "></FaCheck>
              </button>
            )}
          </div>
          <ArrayMap
            item={{
              arrayItem: ingredientArray,
              setArrayItem: setIngredientArray,
              name: "Ingredient",
            }}
          ></ArrayMap>
        </div>
        {/* Preparation */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2"
          >
            Preparation
          </label>
          <div className="relative">
            <textarea
              value={preparationValue}
              onChange={(e) => {
                setPreparationValue(e.target.value);
              }}
              className="textarea textarea-bordered border-2 border-gray-300 p-2 w-full  rounded-sm focus:outline-none focus:border-orange-500 focus:text-orange-500"
            />
            {preparationValue && (
              <button
                className="absolute right-5 border border-orange-500 bg-white  p-1 rounded-full mt-[10px]"
                onClick={handleButtonClick}
              >
                <FaCheck className="text-orange-500 "></FaCheck>
              </button>
            )}
          </div>
          <ArrayMap
            item={{
              arrayItem: preparationArray,
              setArrayItem: setPreparationArray,
              name: "Preparation",
            }}
          ></ArrayMap>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Food Image</label>
          <div className="relative">
            <input
              {...register("profileImage")}
              type="file"
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
              onChange={handleImageChange}
            />
            <div className="border-2 border-gray-300 p-2 rounded-sm w-full h-60 flex items-center justify-center">
              {selectedImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={selectedImage}
                    alt="Selected Profile"
                    className="h-full mx-auto"
                  />
                  <FaRegTimesCircle
                    className="absolute top-0 right-0  w-6 h-6 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                    onClick={handleRemoveImage}
                  ></FaRegTimesCircle>
                </div>
              ) : (
                <div className="text-gray-400 text-sm">
                  Drag and drop your profile image here or click to select
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-6 flex justify-end items-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-sm mt-5"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
