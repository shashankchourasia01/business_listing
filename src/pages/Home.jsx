import React from 'react';
import home from '../home_assets/Home image.jpeg';

const Home = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img 
        src={home} 
        alt="Home Background" 
        className="w-full h-screen object-cover opacity-90 absolute top-0 left-0"
      />

      {/* Content Overlay (Optional) */}
      <div className="relative z-10 text-white text-center pt-32">
        <h1 className="text-5xl font-bold">Welcome to Punjabi Pages</h1>
      </div>
    </div>
  );
}

export default Home;
