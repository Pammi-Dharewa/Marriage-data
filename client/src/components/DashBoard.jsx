import React, { useEffect, useState } from 'react';
import BarChart from './Dashboard/charts/Barchart';
import LineGradient from './Dashboard/charts/LineGradient';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../api';
import ChatBot from './ChatBot';

const DashBoard = () => {
  const [goldR, setGoldR] = useState(0);
  const [goldG, setGoldG] = useState(0);
  const [silverR, setSilverR] = useState(0);
  const [silverG, setSilverG] = useState(0);
  const [topgold, setTopGold] = useState([]);
  const [topsilver, setTopSilver] = useState([]);
  const [loading, setLoading] = useState(true);

  const endPoints = [
    { name: '/total_gold_rec', setter: setGoldR },
    { name: "/total_gold_pre", setter: setGoldG },
    { name: "/total_silver_rec", setter: setSilverR },
    { name: "/total_silver_pre", setter: setSilverG },
    { name: "/topfiveRecGold", setter: setTopGold },
    { name: "/topfiveRecSilver", setter: setTopSilver },
  ];

  const fetchData = async () => {
    try {
      const data = endPoints.map(async (endpoints) => {
        const response = await axiosInstance.get(endpoints.name);
        console.log(endpoints.name, response.data);
        endpoints.setter(response.data);
      });
      await Promise.all(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/99 z-50">
        <div className="text-center">
          <img src="/Loop-Motion-GIF.gif" alt="Loading..." className="w-60 h-60 mb-4" />
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-950 p-5">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row mb-6 justify-between items-center text-center bg-gradient-to-l from-teal-700/20 to-blue-900/20 backdrop-blur-sm text-white p-6 rounded-2xl shadow-lg border border-gray-800/50">
        <h1
          className="text-lg sm:text-xl lg:text-2xl font-bold animate-gradient bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent"
          style={{ fontFamily: "cursive" }}
        >
          Welcome to your Dashboard
        </h1>

        <div className="flex gap-3 mt-4 sm:mt-0">
          <Link to='/dashboard/support'>
            <button className="transition-all duration-300 hover:bg-blue-600/50 border-2 border-blue-500/50 hover:border-blue-600/70 hover:text-white px-4 py-2 text-sm sm:text-lg rounded-2xl bg-white/10 text-white shadow-md backdrop-blur-sm">
              Support Team
            </button>
          </Link>
          <button className="transition-all duration-300 hover:bg-blue-600/50 border-2 border-blue-500/50 hover:border-blue-600/70 hover:text-white px-4 py-2 text-sm sm:text-lg rounded-2xl bg-white/10 text-white shadow-md backdrop-blur-sm">
            Logout
          </button>
        </div>
      </div>

      {/* Top Section: Stats & Line Chart */}
      <div className="grid md:grid-cols-5 gap-6">
        {/* Stats Section */}
        <div className="sm:col-span-5 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-2xl shadow-md p-5 bg-gray-100/10 backdrop-blur-sm text-white flex flex-col justify-center items-center transition-transform transform hover:scale-105 border border-gray-800/50">
            <p className="text-lg font-medium">Total Gold Gifted</p>
            <span className="text-3xl font-bold text-blue-500">{`${goldG} grams`}</span>
          </div>
          <div className="rounded-2xl shadow-md p-5 bg-gray-100/10 backdrop-blur-sm text-white flex flex-col justify-center items-center transition-transform transform hover:scale-105 border border-gray-800/50">
            <p className="text-lg font-medium">Total Gold Received</p>
            <span className="text-3xl font-bold text-teal-500">{`${goldR} grams`}</span>
          </div>
          <div className="rounded-2xl shadow-md p-5 bg-gray-100/10 backdrop-blur-sm text-white flex flex-col justify-center items-center transition-transform transform hover:scale-105 border border-gray-800/50">
            <p className="text-lg font-medium">Total Silver Gifted</p>
            <span className="text-3xl font-bold text-pink-400">{`${silverG} grams`}</span>
          </div>
          <div className="rounded-2xl shadow-md p-5 bg-gray-100/10 backdrop-blur-sm text-white flex flex-col justify-center items-center transition-transform transform hover:scale-105 border border-gray-800/50">
            <p className="text-lg font-medium">Total Silver Received</p>
            <span className="text-3xl font-bold text-purple-500">{`${silverR} grams`}</span>
          </div>
        </div>

        {/* Line Chart */}
        <div className="sm:col-span-5 lg:col-span-3 bg-gray-100/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-800/50">
          <LineGradient />
        </div>
      </div>

      {/* Bottom Section: Bar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-100/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-800/50">
          <BarChart data={topgold} title="Top 5 Gold Recipients" yAxisLabel="Gold Received" />
        </div>
        <div className="bg-gray-100/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-800/50">
          <BarChart data={topsilver} title="Top 5 Silver Recipients" yAxisLabel="Silver Received" />
        </div>
      </div>

      {/* ChatBot */}
      <div>
        <ChatBot />
      </div>
    </div>
  );
};

export default DashBoard;