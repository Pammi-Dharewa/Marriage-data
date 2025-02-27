import React, { useEffect, useState } from 'react';
import BarChart from './Dashboard/charts/Barchart';
import PieChart from './Dashboard/charts/PieChart';
import LineGradient from './Dashboard/charts/LineGradient';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../api';

const DashBoard = () => {

 
  const [goldR, setGoldR] = useState(0)
  const [goldG, setGoldG] = useState(0)
  const [silverR, setSilverR] = useState(0)
  const [silverG, setSilverG] = useState(0)
  const [topgold, setTopGold] = useState([])
  const [topsilver, setTopSilver] = useState([])


  const endPoints = [
    { name: '/total_gold_rec', setter: setGoldR  },
    { name: "/total_gold_pre", setter: setGoldG },
    { name: "/total_silver_rec", setter: setSilverR },
    { name: "/total_silver_pre", setter: setSilverG },
    { name: "/topfiveRecGold", setter: setTopGold },
    { name: "/topfiveRecSilver", setter: setTopSilver},

  ]


  const fetchData = async()=>{
    try{
      const data = endPoints.map(async (endpoints)=>{
        const response = await axiosInstance.get(endpoints.name)
        console.log(endpoints.name, response.data)
        endpoints.setter(response.data)
      })
      await Promise.all(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className="h-full w-full p-6 bg-gray-100">
      <div className="flex flex-col sm:flex-row mb-6 justify-between items-center text-center bg-gradient-to-l from-teal-700 to-blue-900 text-white p-6 shadow-lg">
        <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
          Welcome to your Dashboard
        </h1>

        <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
          <Link to='/dashboard/support'>
            <button className="transition-all duration-300 hover:bg-blue-600 border-2 border-blue-500 hover:text-white px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg rounded-2xl bg-white text-black shadow-md">
              Support Team
            </button>
          </Link>
          <button className="transition-all duration-300 hover:bg-blue-600 border-2 border-blue-500 hover:text-white px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg rounded-2xl bg-white text-black shadow-md">
            Logout
          </button>
        </div>
      </div>


      {/* Top Section: Stats & Line Chart */}
      <div className="grid md:grid-cols-5 gap-6">

        {/* Stats Section */}
        <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div className="rounded-2xl shadow-md p-6 bg-blue-500 text-white flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <p className="text-lg font-medium">Total Gold Gifted</p>
            <span className="text-3xl font-bold text-white">{`${goldG} grams`}</span>
          </div>

          <div className="rounded-2xl shadow-md p-6 bg-teal-500 text-white flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <p className="text-lg font-medium">Total Gold Received</p>
            <span className="text-3xl font-bold text-white">{`${goldR} grams`}</span>
          </div>

          <div className="rounded-2xl shadow-md p-6 bg-yellow-500 text-gray-900 flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <p className="text-lg font-medium">Total Silver Gifted</p>
            <span className="text-3xl font-bold">{`${silverG} grams`}</span>
          </div>

          <div className="rounded-2xl shadow-md p-6 bg-purple-500 text-white flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <p className="text-lg font-medium">Total Silver Received</p>
            <span className="text-3xl font-bold">{`${silverR} grams`}</span>
          </div>

        </div>

        {/* Line Chart */}
        <div className="sm:col-span-3 lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
          <LineGradient />
        </div>
      </div>

      {/* Bottom Section: Bar Charts & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">

        {/* Bar Charts - Left Side */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <BarChart data = {topgold} title="Top 5 Gold Recipients" yAxisLabel="Gold Received" />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <BarChart data = {topsilver} title="Top 5 Silver Recipients" yAxisLabel="Silver Received" />
          </div>
        </div>

        {/* Pie Chart - Right Side */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-md">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
