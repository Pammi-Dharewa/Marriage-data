import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <nav className="flex justify-between items-center h-14 px-6 bg-slate-600 text-white shadow-md">
      
      {/* Left Section - Navigation Links */}
      <div className="flex items-center space-x-6 text-lg font-medium">
        <Link to={"/"} className="hover:text-gray-300 transition duration-300">
          Home
        </Link>
        <Link to={"/presentaion"} className="hover:text-gray-300 transition duration-300">
          Presentation Form
        </Link>
        <Link to={"/taken"} className="hover:text-gray-300 transition duration-300">
          Taken Form
        </Link>
      </div>

      {/* Right Section - Dropdown */}
      <div className="relative w-56">
        <select
          onChange={handleChange}
          className="w-full px-4 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Get your Data</option>
          <option value="/pdata">Presentation</option>
          <option value="/tdata">Taken</option>
        </select>
      </div>
      
    </nav>
  );
};

export default Navbar;
