import React from 'react'
import people from '../home_assets/people.png'
import location from '../home_assets/location icon.png'
import arcti from '../home_assets/arcticons_boost.png'
import email from '../home_assets/formkit_email.png'
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="bg-[#0D261A] text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mr-40">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 ">
          <h2 className="text-4xl font-semibold mb-4 mt-20">Get Yourself Discovered !</h2>
          <div className="grid grid-cols-3 gap-8 mt-25">
            {/* Pages Section */}
            <ul>
              <li className="font-bold text-yellow-500 mb-2 text-2xl">Pages</li>
              <li className="text-gray-300 text-xl">About</li>
              <li className="text-gray-300 text-xl">Featured</li>
              <li className="text-gray-300 text-xl">Explore</li>
              <li className="text-gray-300 text-xl">How It Works</li>
            </ul>

            {/* Business Section */}
            <ul>
              <li className="font-bold text-yellow-500 mb-2 text-2xl">Business</li>
              <li className="text-gray-300 text-xl">Add Business</li>
              <li className="text-gray-300 text-xl">Explore</li>
              <li className="text-gray-300 text-xl">Why Us</li>
            </ul>

            {/* Social Section */}
            <ul>
              <li className="font-bold text-yellow-500 mb-2 text-2xl">Social</li>
              <li className="text-gray-300 text-xl">Facebook</li>
              <li className="text-gray-300 text-xl">Instagram</li>
              <li className="text-gray-300 text-xl">Twitter</li>
              <li className="text-gray-300 text-xl">LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Right Section (Subscribe) */}
        <div className="flex flex-col mb-65">
          <h3 className="text-3xl font-semibold mb-4">Subscribe</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white text-black py-2 px-4 w-110 h-16 rounded-2xl shadow-md focus:outline-none"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-yellow-500 px-3 rounded-2xl w-15 flex items-center justify-center">
               <img src={email} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-20 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm bg-black ">
        Copyright © 2025, Punjabipages.in | All rights reserved.
      </div>
    </footer>
  )
}

export default footer