import React from 'react';
import { Link } from 'react-router-dom';

const RegisterMain = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-8">Register yourself as</h1>
        <div className="flex flex-col space-y-4">
          <Link to="/registercustomer">
            <button className="bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-4 px-8 rounded-full focus:outline-none transition duration-300">
              Customer
            </button>
          </Link>
          <Link to="/registerlabour">
            <button className="bg-indigo-800 hover-bg-indigo-900 text-white font-semibold py-4 px-8 rounded-full focus:outline-none transition duration-300">
              Worker
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterMain;
