import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { authContext } from "../../Context/UserContext";

const Signup = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { googleLogin, signUp } = useContext(authContext);
  const imgbbApi = process.env.REACT_APP_imgbbApi;
  console.log(imgbbApi);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user.displayName);
        toast.success("user sign up successfully");
      })
      .catch((err) => console.error(err));
  };

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleImageChange(event) {
    const image = event.target.files[0];
    setFormValue({ image: image });
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    const image = event.dataTransfer.files[0];
    setFormValue({ image: image });
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
    }
  }

  function handleRemoveClick(e) {
    setSelectedImage(null);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formValue);
      if (formValue.image) {
        const formData = new FormData();
        formData.append("image", formValue.image);
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.data.url) {
              const imgUrl = result.data.url;
              signUp(formValue.email, formValue.password)
                .then((result) => {
                  toast.success("user sign up successfully");
                  const currentUser = result.user;
                  updateProfile(currentUser, {
                    displayName: formValue.name,
                    photoURL: imgUrl,
                  })
                    .then(() => {
                      setFormValue({
                        name: "",
                        email: "",
                        password: "",
                      });
                    })
                    .catch((err) => console.error(err));
                })
                .catch((err) => console.error(err));
            }
          });
      }
    }
  };

  const validateForm = () => {
    let errors = {
      name: "",
      email: "",
      password: "",
    };
    let isValid = true;

    // Name validation - only letters and spaces
    const nameRegex = /^[a-zA-Z ]+$/;
    if (!formValue.name.match(nameRegex)) {
      errors.name = "Please enter a valid name";
      isValid = false;
    }

    // Email validation - using email regex pattern
    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (!formValue.email.match(emailRegex)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation - at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formValue.password.match(passwordRegex)) {
      errors.password = "Please enter a valid password";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto min-h-screen px-2">
        <div>
          <h2 className="text-3xl font-semibold mb-5">Get Started Now</h2>
          <p className="text-lg">
            Enter your credentials to access your account
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
          <button
            onClick={handleGoogleLogin}
            className="border-2 py-2 flex justify-center items-center gap-2 font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-white"
          >
            <FaGoogle></FaGoogle> Google
          </button>
          <button className="border-2 py-2 flex justify-center items-center gap-2 font-semibold hover:bg-sky-500  hover:border-sky-500 hover:text-white">
            <FaFacebookF></FaFacebookF> Facebook
          </button>
        </div>
        <div className="divider w-1/3 mx-auto">or</div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formValue.name}
                onChange={handleInputChange}
                className={`border-2 border-gray-300 p-2 w-full  rounded-sm focus:outline-none focus:border-blue-500 ${
                  formErrors.name ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.name && (
                <span className="text-red-500 text-sm">{formErrors.name}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValue.email}
                onChange={handleInputChange}
                className={`border-2 border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:border-blue-500 ${
                  formErrors.email ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.email && (
                <span className="text-red-500 text-sm">{formErrors.email}</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValue.password}
              onChange={handleInputChange}
              className={`border-2 border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:border-blue-500 ${
                formErrors.password ? "border-red-500" : ""
              }`}
              required
            />
            {formErrors.password && (
              <span className="text-red-500 text-sm">
                {formErrors.password}
              </span>
            )}
          </div>
          <label className="block text-gray-700 font-medium mb-2">
            Profile Picture
          </label>
          <div className="relative w-full h-72 bg-gray-100 border-2 border-gray-300">
            {selectedImage && (
              <div className="absolute top-0 right-0 p-2 z-20">
                <button
                  type="button"
                  className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={handleRemoveClick}
                >
                  X
                </button>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className=" opacity-0 absolute w-full h-full rounded-sm"
              onChange={handleImageChange}
              onDrop={handleDrop}
              onDragOver={(event) => event.preventDefault()}
            />
            {selectedImage ? (
              <div className="h-full w-full bg-white">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="h-full mx-auto"
                />
              </div>
            ) : (
              <label
                htmlFor="image-input"
                className="h-full w-full flex flex-col items-center justify-center cursor-pointer"
              >
                <p className="text-gray-500 px-2 bg-white w-full h-full  flex justify-center items-center gap-1 flex-nowrap">
                  Drag and drop an image or select one
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className=" bg-white opacity-0 absolute w-full h-full rounded-sm"
                  onChange={handleImageChange}
                  onDrop={handleDrop}
                  onDragOver={(event) => event.preventDefault()}
                  id="image-input"
                />
              </label>
            )}
          </div>
          <div className="mb-6 flex justify-end items-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-sm mt-5"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
