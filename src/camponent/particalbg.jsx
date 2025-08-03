import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Gradient with Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500  to-red-700 bg-[length:400%_400%] animate-gradient-x z-0" />

      {/* SVG Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.3"
          d="M0,224L80,208C190,192,320,160,480,149.3C640,139,800,149,960,149.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,960,320,80,320L0,320Z"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold">Hi, I'm Dheeraj</h1>
        <p className="mt-4 text-xl">MERN Stack Developer | React & Node.js Lover</p>
        <button className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-purple-100 transition duration-300">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
