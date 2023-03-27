import React, { useContext, useRef, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import logo from "../Assets/logo.png";
import { darkProvider } from "../Context/DarkContext";
import { dashboardProvider } from "../Context/DashboardContext";
import { authContext } from "../Context/UserContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logOut, user } = useContext(authContext);
  const { setShowDashboard } = useContext(dashboardProvider);
  const { darkMode, setDarkMode } = useContext(darkProvider);

  const handleLogOut = () => {
    localStorage.removeItem("access-token");
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  console.log(darkMode)

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
          className={`font-semibold bg-transparent ${darkMode? 'hover:' : 'hover:text-orange-500'} px-3 w-full h-10 `}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`font-semibold bg-transparent ${darkMode? 'hover:' : 'hover:text-orange-500'} px-3 w-full h-10 `}
          to="/blog"
        >
          Blog
        </Link>
      </li>
      {user && (
        <li>
          <Link
            onClick={() => setShowDashboard(true)}
            className={`font-semibold bg-transparent ${darkMode? 'hover:' : 'hover:text-orange-500'} px-3 w-full h-10 `}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}
      <div
        
        className="font-semibold px-3 py-2 flex items-center justify-between gap-3"
      >
        <p >Dark</p>
        <input onChange={() => setDarkMode(!darkMode)} type="checkbox" className="toggle" checked={darkMode} />
      </div>

      {!user ? (
        <li>
          <Link
            style={{ borderRadius: "0px" }}
            className={`font-semibold text-white bg-orange-500 px-3 py-2 flex justify-center items-center text-center`}
            to="/signin"
          >
            Sign In
          </Link>
        </li>
      ) : (
        <button
          onClick={handleLogOut}
          className={`font-semibold text-white bg-orange-500 px-1 md:px-3 w-full md:w-auto h-10 mx-auto`}
        >
          Sign Out
        </button>
      )}
    </>
  );
  return (
    <div className="navbar px-0 relative">
      <div className="flex-1">
      <Link to="/" className="flex flex-col justify-center items-center">
        <img className="w-20" src={logo} alt="" />

        <p className="font-bold text-2xl text-orange-500">Tasty Food</p>
      </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex items-center gap-4">
          {menus}
        </ul>

        <div
          ref={ref}
          onClick={() => handleClick()}
          className="dropdown dropdown-end"
        >
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar md:hidden"
          >
            {user ? (
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            ) : (
              <span className="text-xl">
                <FaAlignJustify></FaAlignJustify>
              </span>
            )}
          </label>
          {open && (
            <ul
              tabIndex={0}
              className={`absolute top-16 right-0 menu menu-compact border  dropdown-content ${darkMode ? 'bg-black border-gray-800': 'bg-white'} w-52 flex-col justify-center gap-2 px-2 py-3 md:hidden`}
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
