import React from 'react';

const Homepage = () => {
  return (
    <div
      className="bg-cover min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("https://www.worldatlas.com/r/w1200/upload/99/fc/e6/laborforce.jpg")',
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4 animate__animated animate__bounceIn">
          <span className="animate__animated animate__heartBeat animate__infinite">LabourNation</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 animate__animated animate__fadeIn">
          Your Partner in Finding the Best Labour for Your Project
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 animate__animated animate__fadeIn">
          We provide top-notch labor hiring services for your projects. Our team of experts will help you find the right person for the job.
        </p>
        <div className="animate__animated animate__fadeIn">
          <a
            href="/market"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full inline-block transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
