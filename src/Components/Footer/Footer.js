import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Footer = () => {
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
    <footer className="footer p-10 border-t">
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
        <div className="relative">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="input input-bordered w-full pr-16 rounded-l-sm focus:outline-none"
          />
          <button className=" absolute top-0 right-0 bg-orange-500 h-full text-white font-semibold px-4 rounded-r-sm">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
