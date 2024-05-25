import React, { useState } from "react";
import { Card, Input, Button } from "@material-tailwind/react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function LsLogin({setLaborerName}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here
  //   console.log("Login data:", formData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const requiredFields = ["email","password"];
    const hasEmptyFields = requiredFields.some(field => !formData[field]);
  
    if(hasEmptyFields) {
      toast.warn("Please fill in all the required fields.");
      return;
    }
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:8000/api/v1/labourlogin/lslogin', formData, {
        withCredentials:true,
      });
      // console.log(response);
    
      // Check if the response contains the expected structure
      if (response.status===200) {
        // console.log('Response data:', response.data);
    
        const { firstName, lastName,category,_id,token ,profileImage} = response.data;
        if (firstName && lastName) {
          const laborerName = `${firstName} ${lastName}`;
          Cookies.set("laborerName", laborerName); 
          Cookies.set("categoryName", category); 
          Cookies.set("labourId", _id); 
          Cookies.set("accessToken", token); 
          Cookies.set("loggedIn","true")  
          localStorage.setItem('profileImage',profileImage)
          console.log("login successful");
          navigate('/ls/cli')
        } else {
          console.error('First name or last name is undefined.');
          toast.error('Unexpected response format. Please try again later.');
        }
      } else {
        console.error('Unexpected response format:', response);
        toast.error('Unexpected response format. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.');
    } 
  }
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
        <div className="container mx-auto">
          {/* <h1 className="text-4xl font-bold text-white mb-8">Welcome Back!</h1> */}
          <img src="https://media.istockphoto.com/id/1368954963/photo/cyber-security-in-two-step-verification-login-user-identification-information-security-and.webp?b=1&s=170667a&w=0&k=20&c=OWbOYeuJTJnKN0IIKOMEsq8qOhHweR9DQIg0EQHeeo0=" alt="login background" 
          className="h-screen w-full object-contain object-cover object-center"/>
        </div>
      </div>
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="container p-8">
          <Card className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-lg font-medium text-gray-800">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="border-2 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-lg font-medium text-gray-800">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="border-2 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500"
                />
              </div>
              <Button type="submit" color="blue-gray" size="lg" ripple={false}  className="mt-8" onClick={handleSubmit}>
                Log In
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LsLogin;
