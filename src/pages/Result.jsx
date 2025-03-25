import React from "react";
import paji from "../home_assets/result main image.jpeg";
import logo from "../home_assets/punjabi logo.png";
import menu from "../home_assets/Menu Logo.png";
import search_icon from '../home_assets/search icon.png'
import bus from '../result_assets/bus.png'
import cap from '../result_assets/cap.png'
import church from '../result_assets/church.png'
import map from '../result_assets/map_clothing-store.png'
import dining from '../result_assets/material-symbols-light_ramen-dining.png'
import more_icon from '../result_assets/more_icon.png'
import health from '../result_assets/solar_health-bold.png'
import spa from '../result_assets/material-symbols-light_spa-rounded.png'


import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="relative h-screen z-[10]">
      {/* Navbar */}
      <div className=" relative flex items-center justify-between px-10 py-4 bg-transparent w-full z-[50]">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Punjabi Logo"
            className="w-16 rounded-full ml-20"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10">
          <button className="text-white font-semibold hover:text-gray-900">
            Add a Business
          </button>
          <Link
            to="/services"
            className="text-white font-semibold hover:text-gray-900"
          >
            Our Services
          </Link>
          <Link
            to="/blogs"
            className="text-white font-semibold hover:text-gray-900"
          >
            Blogs
          </Link>
        </div>

        {/* Menu Icon */}
        <img src={menu} alt="Menu Logo" className="w-10 rounded-full mr-15" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-[-50]">
        <div className="absolute inset-0 bg-black opacity-15 "></div>
        <img
          src={paji}
          alt="Home Background"
          className="w-full h-full object-cover"
        />
        {/* .. */}
      </div>

      {/* Main Content */}
      <div className="flex items-start relative bottom-[5rem] z-10 flex flex-col justify-center items-center text-white text-center h-full px-6  mr-160 ml-20">
        <h1 className="text-5xl font-bold">
          Discover <span className="text-[#FCE130]">Punjabi</span>
          <br />
        </h1>
        <h1 className="text-5xl font-bold mt-4">Businesses And Pages!</h1>
        <br />
        <h4 className="mb-4 text-2xl">
          From restaurants to real estate,find trusted
        </h4>
        <h4 className="mb-20 text-2xl">businesses in your community.</h4>

        {/* Search Bar */}

        <div className="bg-white w-320 h-18 flex items-center p-2 rounded-2xl shadow-lg mt-10">
          {/* Search Business Input */}
          <input
            type="text"
            placeholder="Search the business"
            className="w-1/2 p-3 rounded-l-2xl focus:outline-none text-black border-r border-gray-300"
          />

          {/* Location Input */}
          <input
            type="text"
            placeholder="Location"
            className="w-1/4 p-3 focus:outline-none text-black ml-10"
          />

          {/* Search Button */}
          <button className="bg-yellow-400 text-white px-5 py-3 h-18 ml-70  rounded-r-2xl">
             <img src={search_icon} alt="" />
          </button>
        </div>
 </div>



      {/* 8 options */}


      <div class="flex flex-wrap justify-center gap-6 p-6">
  <div class="flex flex-col items-center">
    <div class="w-24 h-24 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
      <img src={dining} alt="Food & Beverages" class="w-16 h-16 object-contain rounded-full hidden" />
    </div>
    <p class="text-center mt-2 text-gray-700 font-medium">Food & Beverages</p>
  </div>
  
  <div class="flex flex-col items-center">
    <div class="w-24 h-24 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
      <img src={spa} alt="Beauty & wellness" class="w-16 h-16 object-contain rounded-full hidden" />
    </div>
    <p class="text-center mt-2 text-gray-700 font-medium">Beauty & wellness</p>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-24 h-24 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
      <img src={map} alt="Apparels & Accessories" class="w-16 h-16 object-contain rounded-full hidden" />
    </div>
    <p class="text-center mt-2 text-gray-700 font-medium">Apparels & Accessories</p>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-24 h-24 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
      <img src={cap} alt="Education" class="w-16 h-16 object-contain rounded-full hidden" />
    </div>
    <p class="text-center mt-2 text-gray-700 font-medium">Education</p>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-24 h-24 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
      <img src={health} alt="Health" class="w-16 h-16 object-contain rounded-full hidden" />
    </div>
    <p class="text-center mt-2 text-gray-700 font-medium">Health</p>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-24 h-24 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
      <img src={church} alt="Wedding & Events" class="w-16 h-16 object-contain rounded-full hidden" />
    </div>
    <p class="text-center mt-2 text-gray-700 font-medium">Wedding & Events</p>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-24 h-24 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
      <img src={bus} alt="Logistic Services" class="w-16 h-16 object-contain rounded-full hidden" />
    </div>
    <p class="text-center mt-2 text-gray-700 font-medium">Logistic Services</p>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-24 h-24 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
      <img src={more_icon} alt="More" class="w-16 h-16 object-contain rounded-full hidden" />
    </div>
    <p class="text-center mt-2 text-gray-700 font-medium">More</p>
  </div>
</div>


    </div>
  );
};

export default Result;
