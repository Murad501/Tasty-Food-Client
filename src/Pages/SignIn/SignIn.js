import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadingProvider } from "../../Context/LoadingContext";
import { authContext } from "../../Context/UserContext";

const SignIn = () => {
  const { googleLogin, signIn } = useContext(authContext);
  const { setIsLoading } = useContext(loadingProvider);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("user sign up successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        setIsLoading(false);
        toast.success("user sign up successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  return (
    <div className="max-w-2xl mx-auto min-h-screen px-2">
      <div>
        <h2 className="text-3xl font-semibold mb-5">Get Started Now</h2>
        <p className="text-lg">Enter your credentials to access your account</p>
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
      <form onSubmit={handleSignIn} className="max-w-2xl mx-auto">
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
            className={`border-2 border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:border-blue-500`}
            required
          />
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
            className={`border-2 border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:border-blue-500`}
            required
          />
        </div>
        <div className="mb-6 flex justify-start items-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-sm mt-5"
          >
            SignIn
          </button>
        </div>
      </form>
      <p>
        New here?{" "}
        <Link className="text-orange-500" to="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
