import { useForm } from "react-hook-form";
import { useState } from "react";

function TestSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.profileImage[0])
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Signup Form</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Email</label>
        <input
          {...register("email", { required: true, pattern: emailRegex })}
          type="email"
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.email?.type === "required" && (
          <span className="text-red-500">Email is required</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="text-red-500">Email is not valid</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Password</label>
        <input
          {...register("password", { required: true, pattern: passwordRegex })}
          type="password"
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.password?.type === "required" && (
          <span className="text-red-500">Password is required</span>
        )}
        {errors.password?.type === "pattern" && (
          <span className="text-red-500">
            Password must be at least 8 characters, contain at least one digit,
            one lowercase and one uppercase letter
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
          <div className="border border-gray-300 p-2 rounded w-full h-32 flex items-center justify-center">
            {selectedImage ? (
              <div className="relative w-full h-full">
                <img
                  src={selectedImage}
                  alt="Selected Profile"
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                  onClick={handleRemoveImage}
                >
                  X
                </button>
              </div>
            ) : (
              <div className="text-gray-400 text-sm">
                Drag and drop your profile image here or click to select
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default TestSignUp;
