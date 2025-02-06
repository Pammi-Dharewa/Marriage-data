import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-teal-50 text-gray-900 px-6 py-12 text-center">

      {/* Hero Section */}
      <div className="w-full max-w-4xl mt-16">
        <h1 className="text-5xl font-extrabold leading-tight">
          Effortless Gift Tracking Solutions 🎁
        </h1>
        <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-700 leading-relaxed">
          Keep track of all the gifts received at your wedding or special event. 
          Easily manage guest contributions and ensure everyone gets the appreciation they deserve.
        </p>
      </div>

      {/* Large Image Section */}
      <div className="mt-8 w-full max-w-xl">
        <img 
          src="backgroundimg.jpg" 
          alt="Marriage Celebration" 
          className="w-full h-96 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
        />
      </div>

      {/* Features Section */}
      <div className="mt-16 w-full max-w-4xl">
        <h3 className="text-3xl font-semibold">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
            <h4 className="text-xl font-semibold">📌 Easy Tracking</h4>
            <p className="text-gray-700 mt-2">Keep a digital record of all gifts and contributors effortlessly.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
            <h4 className="text-xl font-semibold">🎉 Stress-Free Events</h4>
            <p className="text-gray-700 mt-2">Enjoy your big day without worrying about tracking gifts manually.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
            <h4 className="text-xl font-semibold">📊 See Your Data Anytime</h4>
            <p className="text-gray-700 mt-2">No more missing names or duplicate records.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <Link to="/presentation">
        <button className="mt-12 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Get Started Now 
        </button>
      </Link>
    </div>
  );
};

export default Home;
