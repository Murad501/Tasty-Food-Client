import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  useOnClickOutside();

  const handleClick = () => {
    setOpen(!open);
  };

  const menus = (
    <>
      <li>
        <Link
          className="font-semibold bg-transparent hover:text-orange-500"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="font-semibold bg-transparent hover:text-orange-500"
          to="/blog"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          className="font-semibold bg-transparent hover:text-orange-500"
          to="/signin"
        >
          Sign In
        </Link>
      </li>
      {/* <li><Link className="font-semibold">Sign Out</Link></li> */}
    </>
  );
  return (
    <div className="navbar px-0 relative">
      <div className="flex-1">
        <Link to="/">
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">{menus}</ul>
        <div ref={ref}
      onClick={()=>handleClick()} className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/332902300_6067613799990055_7532404620724800054_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFex6Cf3ASRV5eTBRDelWbIC7YC30svc9ALtgLfSy9z0KpaMG0D1D6tUHRi8_wgp5EqQc4pLGEdrri9VWMP8iK3&_nc_ohc=MCprq9uDnmkAX-rRZjK&_nc_ht=scontent.fcgp28-1.fna&oh=00_AfD2ry2I2N3fOlw3qBKQTeUhPfO73v3sGXUYqdUhpxb6Ow&oe=63FC1F56"
                alt=""
              />
            </div>
          </label>
          {open && (
            <ul
              tabIndex={0}
              className=" absolute top-16 right-0 menu menu-compact border dropdown-content bg-white w-52 block md:hidden"
            >
              {menus}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
