import React, { useState } from "react";
import home from "../home_assets/Home image.jpeg";
import logo from "../home_assets/punjabi logo.png";
import menu from "../home_assets/Menu Logo.png";
import man from "../home_assets/Man Image.png"
import { Link } from "react-router-dom";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Navbar */}
      <div className="flex items-center justify-between px-10 py-4 bg-white shadow-lg fixed w-full z-50">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Punjabi Logo" className="w-16 rounded-full" />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10">
          <button
            onClick={() => setShowForm(true)}
            className="text-gray-700 font-semibold hover:text-gray-900"
          >
            Add a Business
          </button>
          <Link
            to="/services"
            className="text-gray-700 font-semibold hover:text-gray-900"
          >
            Our Services
          </Link>
          <Link
            to="/blogs"
            className="text-gray-700 font-semibold hover:text-gray-900"
          >
            Blogs
          </Link>
        </div>

        {/* Menu Icon */}
        <img src={menu} alt="Menu Logo" className="w-10 rounded-full" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={home}
          alt="Home Background"
          className="w-full h-full object-cover"
        />
        {/* .. */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center h-full px-6 mb-20 mr-160">
        <h1 className="text-5xl font-bold  ">
          List & Grow Your <span className="text-[#FCE130]">Business</span>
          <br />
          with Punjabi Pages!
        </h1>{" "}
        <br />
        <h4 className="mb-4">
          Join 1000+ Businesses & connect with <br /> customers today!
        </h4>
      </div>

      {/* Registration Form (Only Visible When ShowForm is True) */}
      {showForm && (
        <div className="fixed top-20 right-10 bg-white p-6 shadow-2xl rounded-lg w-96 z-50 mt-40 mr-20 gap-2">
          <h5 className="text-center text-lg font-bold mb-4 text-[#153A23]">
            Register Here
          </h5>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md"
          />
          <input
            type="text"
            placeholder="Company / Business Name"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md"
          />
          <input
            type="text"
            placeholder="Mobile"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md"
          />
          <input
            type="text"
            placeholder="Locality"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md"
          />
          <div className="flex items-center mb-3">
            <input type="checkbox" className="mr-2" />
            <span>
              I agree to all the{" "}
              <a href="#" className="text-blue-600">
                Terms of Use
              </a>
            </span>
          </div>
          <button className="w-full bg-yellow-400 text-white p-2 font-bold">
            Submit
          </button>
          <p className="text-center mt-2">
            Already registered?{" "}
            <a href="#" className="text-red-500">
              Sign here
            </a>
          </p>
        </div>
      )}






      {/* List Business Detail */}



      <div class="container mx-auto px-6 py-12 mt-5">
        {/* <!-- Progress Steps --> */}
        <div class="flex justify-center items-center space-x-10 md:space-x-20 mb-10">
          <div class="relative flex flex-col items-center">
            <div class="w-12 h-12 bg-green-800 text-white flex justify-center items-center rounded-full font-bold text-lg">
              1
            </div>
            <span class="mt-2 text-2xl font-semibold">List Your Business</span>
          </div>
          <div class="w-20 md:w-32 border-t-2 border-green-700"></div>
          <div class="relative flex flex-col items-center">
            <div class="w-12 h-12 border-2 border-green-800 text-green-700 flex justify-center items-center rounded-full font-bold text-lg">
              2
            </div>
            <span class="mt-2 text-2xl font-semibold">Verify Your Business</span>
          </div>
          <div class="w-20 md:w-32 border-t-2 border-green-700"></div>
          <div class="relative flex flex-col items-center">
            <div class="w-12 h-12 border-2 border-green-800 text-green-700 flex justify-center items-center rounded-full font-bold text-lg">
              3
            </div>
            <span class="mt-2 text-2xl font-semibold">Target Customer</span>
          </div>
        </div>

        {/* <!-- Content Section --> */}
        <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
          {/* <!-- Left Text --> */}
          <div class="md:w-1/2 mt-30">
            <h1 class="text-5xl font-bold text-green-800 ml-20">
              List Your Business Details
            </h1>
            <p class="mt-4 ml-20 text-gray-700 text-2xl">
              To begin, you need to create an account on <br />
              Punjabi Pages. Simply visit the Sign-Up page and <br />
              enter your details. Once submitted,you'll receive <br />
              an OTP verification via email. Verify your email,log <br />
              in to your dashboard, and you are ready to add <br />
              your business information.
            </p>
          </div>

          {/* <!-- Right Image --> */}
          <div class="md:w-1/2 flex justify-center">
            <img
              src={man}
              alt="Businessman" className="ml-10"
              // class="w-64 md:w-80 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
