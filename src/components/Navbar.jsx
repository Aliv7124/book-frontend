import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const change = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <div className={`navbar flex-wrap shadow-sm ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
        {/* Navbar Start */}
        <div className="navbar-start w-full lg:w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-50 ${
                theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
              }`}
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/course">Course</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <h1 className="px-4 text-2xl font-semibold">Bookstore</h1>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex flex-col sm:flex-row gap-2 items-start sm:items-center w-full lg:w-auto mt-3 lg:mt-0 px-2">
          {/* Search Box */}
          <label className="input hidden lg:flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 bg-white text-black shadow-sm w-72">
            <svg
              className="h-5 w-5 opacity-50 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="bg-white outline-none text-black placeholder-gray-500 w-full"
            />
          </label>

          {/* Theme Toggle */}
          <label
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-black cursor-pointer"
            onClick={change}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              className="toggle theme-controller bg-gray-300 checked:bg-blue-600 border-gray-400"
              checked={theme === "dark"}
              readOnly
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>

          {/* Login / Logout Button */}
          {localStorage.getItem('token') ? (
            <button onClick={handleLogout} className="btn btn-outline btn-error w-full sm:w-auto">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline w-full sm:w-auto">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;


