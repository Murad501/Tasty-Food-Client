import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { useDark } from "../../Context/DarkContext";

const Footer = () => {
  const darkMode = useDark()
  const menus = (
    <>
      <Link className="hover:text-orange-500 text-gray-500" to="/">
        Home
      </Link>

      <Link className="hover:text-orange-500 text-gray-500" to="/blog">
        Blog
      </Link>
    </>
  );
  return (
    <footer className={`footer p-1 pb-5 md:p-10 border-t ${darkMode && 'border-gray-700'}`}>
      <Link to="/" className="flex flex-col justify-center items-center">
        <img className="w-20" src={logo} alt="" />

        <p className="font-bold text-2xl text-orange-500">Tasty Food</p>
      </Link>
      <div>
        <span className="footer-title">Menus</span>
        {menus}
      </div>
      <div className="form-control w-80">
        <span className="footer-title">Newsletter</span>
        <div className="flex md:gap-0 h-12 w-11/12">
          <input
            type="text"
            placeholder="example@gmail.com"
            className={`border-2 border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:text-orange-500 ${
              darkMode && "bg-black border-gray-700"
            }`}
          />
          <button className="bg-orange-500 h-full text-white font-semibold px-4 rounded-r-sm">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
