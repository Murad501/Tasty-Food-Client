import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaFacebookF, FaGoogle, FaRegTimesCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDark } from "../../Context/DarkContext";
import { loadingProvider } from "../../Context/LoadingContext";
import { authContext } from "../../Context/UserContext";

const Signup = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { googleLogin, signUp } = useContext(authContext);
  const { setIsLoading } = useContext(loadingProvider);
  const darkMode = useDark();
  const imgbbApi = process.env.REACT_APP_imgbbApi;
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("user sign up successfully");
      })
      .catch((err) => console.error(err));
  };

  const onSubmit = (data) => {
    setIsLoading(true);
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
          signUp(data.email, data.password)
            .then((result) => {
              const currentUser = result.user;
              updateProfile(currentUser, {
                displayName: data.name,
                photoURL: imgUrl,
              })
                .then(() => {
                  setIsLoading(false);
                  navigate(from, { replace: true });
                  toast.success("user sign up successfully");
                })
                .catch((err) => {
                  setIsLoading(false);
                  console.error(err);
                });
            })
            .catch((err) => {
              setIsLoading(false);
              console.error(err);
            });
        }
      });
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

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

  return (
    <div>
      <div className="max-w-2xl mx-auto px-2 py-5 md:py-10">
        <div>
          <h2 className="text-3xl font-semibold mb-5">Get Started Now</h2>
          <p className="text-lg">
            Enter your credentials to access your account
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
          <button
            onClick={handleGoogleLogin}
            className={`border-2 py-2 flex justify-center items-center gap-2 font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-white ${
              darkMode && "border-gray-700"
            }`}
          >
            <FaGoogle></FaGoogle> Google
          </button>
          <button
            className={`border-2 py-2 flex justify-center items-center gap-2 font-semibold hover:bg-sky-500 hover:border-sky-500 hover:text-white ${
              darkMode && "border-gray-700"
            }`}
          >
            <FaFacebookF></FaFacebookF> Facebook
          </button>
        </div>
        <div className="divider w-1/3 mx-auto">or</div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className={`border-2 border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:text-orange-500 ${
                  darkMode && "bg-black border-gray-700"
                }`}
                required
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true, pattern: emailRegex })}
                className={`border-2 border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:text-orange-500 ${
                  darkMode && "bg-black border-gray-700"
                }`}
                required
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500">Email is required</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500">Email is not valid</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                pattern: passwordRegex,
              })}
              className={`border-2 border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:text-orange-500 ${
                darkMode && "bg-black border-gray-700"
              }`}
              required
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-500">
                Password must be at least 8 characters, contain at least one
                digit, one lowercase and one uppercase letter
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Profile Image</label>
            <div className="relative">
              <input
                {...register("profileImage")}
                type="file"
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                onChange={handleImageChange}
              />
              <div
                className={`border-2 border-gray-300 p-2 rounded-sm w-full h-60 flex items-center justify-center ${
                  darkMode && "border-gray-700"
                }`}
              >
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
          <div className="mb-6 flex justify-start items-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-sm mt-5"
            >
              Signup
            </button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-orange-500" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
