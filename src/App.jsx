import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>

  );
};

export default App;

// className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen"
