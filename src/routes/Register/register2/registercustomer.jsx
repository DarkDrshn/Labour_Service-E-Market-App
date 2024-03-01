import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterCustomer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isEmptyAlert, setIsEmptyAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any of the fields are empty
    if (!formData.username || !formData.email || !formData.password) {
      setIsEmptyAlert(true);
    } else {
      // All fields are filled, navigate to the login page
      setIsEmptyAlert(false);
      navigate("/login");
    }
  };

  return (
    <div className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md p-6">
              <h2 className="text-center text-4xl font-bold mb-5">
                Register as Customer
              </h2>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 mb-4">
                  <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    required
                    value={formData.username}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md shadow-sm sm:text-lg"
                  />
                </div>

                <div className="w-full px-3 mb-4">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md shadow-sm sm:text-lg"
                  />
                </div>

                <div className="w-full px-3 mb-4">
                  <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md shadow-sm sm:text-lg"
                  />
                </div>
              </div>
            </div>
            {isEmptyAlert && <div className="text-red-500 mt-2">Please fill in all the fields.</div>}
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-4 px-8 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-indigo-600 hover-bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomer;
