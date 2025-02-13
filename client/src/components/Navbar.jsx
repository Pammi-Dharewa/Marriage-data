import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          
          {/* Left Section - Logo and Navigation Links */}
          <div className="flex items-center text-[17px] space-x-9">
            <Link to="/" className="text-xl font-bold flex  bg-gray-700 p-1 border border-dotted hover:text-gray-300 transition duration-300">
              Gift
              <span>Tracker</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="hover:text-gray-300 transition duration-300 hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/presentation"
                className="hover:text-gray-300 transition duration-300 hover:scale-105"
              >
                Form
              </Link>
              <Link
                to="/query"
                className="hover:text-gray-300 transition duration-300 hover:scale-105"
              >
                Query
              </Link>
            </div>
          </div>

          {/* Right Section - Dropdown and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block w-48">
              <select
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-100 transition duration-300"
              >
                <option value="">Get your Data</option>
                <option value="/pdata">Gifted</option>
                <option value="/tdata">Taken</option>
              </select>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-700">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="hover:text-gray-300 transition duration-300 hover:scale-105"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/presentation"
                className="hover:text-gray-300 transition duration-300 hover:scale-105"
                onClick={toggleMobileMenu}
              >
                Form
              </Link>
              {/* <Link
                to="/taken"
                className="hover:text-gray-300 transition duration-300 hover:scale-105"
                onClick={toggleMobileMenu}
              >
                Taken Form
              </Link> */}
              <div className="relative w-full">
                <select
                  onClick={(e)=>{
                    if(e.target.value == '/pdata' || e.target.value == '/tdata'){
                      toggleMobileMenu();
                    }
                  }}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-100 transition duration-300"
                >
                  <option value="/">Get your Data</option>
                  <option value="/pdata" onClick={toggleMobileMenu}>Gifted</option>
                  <option value="/tdata" onClick={toggleMobileMenu}>Taken</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;