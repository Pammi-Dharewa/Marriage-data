import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center text-center px-6 py-12">
      
      {/* Hero Section with Image and Text */}
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl">
        
        {/* Left - Large Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src="simpleimg.webp" 
            alt="Marriage Celebration" 
            className="w-1/2 md:w-full max-h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Main Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Effortless Gift Tracking Solutions
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Keep track of all the gifts received at your wedding or special event. 
            Easily manage guest contributions and ensure everyone gets the appreciation they deserve.
          </p>

          {/* Call to Action */}
          <Link to="/presentation">
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl mt-16">
        <h3 className="text-3xl font-semibold text-center text-gray-800">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-6 px-4">
          <div className="p-6 bg-gray-200 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-500">
            <h4 className="text-xl font-semibold text-gray-900">📌 Easy Tracking</h4>
            <p className="text-gray-700 mt-2">
              Keep a digital record of all gifts and contributors effortlessly.
            </p>
          </div>
          <div className="p-6 bg-gray-300 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-500">
            <h4 className="text-xl font-semibold text-gray-900">🎉 Stress-Free Events</h4>
            <p className="text-gray-700 mt-2">
              Enjoy your big day without worrying about tracking gifts manually.
            </p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-500">
            <h4 className="text-xl font-semibold text-gray-900">📊 Instant Reports</h4>
            <p className="text-gray-700 mt-2">
              No more missing names or duplicate records. Get a detailed report in one click.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
