import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterLabour = () => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      console.log("Selected image:", file);
    }
  };
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    contactNo: "",
    aadharNo: "",
    yearsOfExperience: "",
    expertise: "Carpenter",
    email: "",
    username: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault(e);
    const isFormValid =
      formData.name &&
      formData.age &&
      formData.location &&
      formData.contactNo &&
      formData.aadharNo &&
      formData.yearsOfExperience &&
      formData.expertise &&
      formData.email &&
      formData.username &&
      formData.password;

    if (!isFormValid) {
      alert("Please fill out all fields.");
    } else {
      navigate("/login"); 
    }
  };

  return (
    <>
      <div className="flex justify-center space-x-4">
        <div className="w-1/3">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl mb-4 font-bold text-center">Personal Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleInputChange}
                value={formData.name}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="age"
                type="number"
                placeholder="Age"
                min="1"
                max="99"
                onChange={handleInputChange}
                value={formData.age}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                Location
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="location"
                type="text"
                placeholder="Location"
                onChange={handleInputChange}
                value={formData.location}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNo">
                Contact No.
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="contactNo"
                type="tel"
                pattern="[0-9]{10}" 
                placeholder="Contact No"
                maxLength="10"
                onChange={handleInputChange}
                value={formData.contactNo}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="aadharNo">
                Aadhar-card No.
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="aadharNo"
                type="text"
                pattern="[0-9]{12}"
                placeholder="Aadhar-card-No."
                maxLength="12"
                onChange={handleInputChange}
                value={formData.aadharNo}
              />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
</div>
          </form>
        </div>

        <div className="w-1/3">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl mb-4 font-bold text-center">Working Details</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="yearsOfExperience">
                Years of Experience
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="yearsOfExperience"
                type="number"
                placeholder="Years of Experience"
                min="1"
                max="99"
                onChange={handleInputChange}
                value={formData.yearsOfExperience}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="expertise">
                Expertise
              </label>
              <div className="relative">
                <select
                  required
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  name="expertise"
                  onChange={handleInputChange}
                  value={formData.expertise}
                >
                  <option>Carpenter</option>
                  <option>Electrician</option>
                  <option>Painter</option>
                  <option>Plumber</option>
                  <option>Plasterer</option>
                  <option>Mason</option>
                  <option>Others</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      d="M9.293 13.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L8 10.586V3a1 1 0 1 1 2 0v7.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="w-1/3">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl mb-4 font-bold text-center">Account Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleInputChange}
                value={formData.username}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={formData.password}
              />
            </div>
          </form>
        </div>
      </div>
       <div className="flex justify-center">
        {!isFormValid && <p className="text-red-500">Fill out all fields.</p>}
        <button
          className={`${
            isFormValid ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
          } text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline`}
          type="button"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default RegisterLabour;
