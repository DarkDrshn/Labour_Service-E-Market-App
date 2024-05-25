import React ,{useState,useEffect}from "react";
import { Card, Button, Input } from "@material-tailwind/react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {AuthContext} from "../AuthContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Clilogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login data:", formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["email", "password"];
    const hasEmptyFields = requiredFields.some(field => !formData[field]);

    if (hasEmptyFields) {
      toast.warn("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/clientlogin/cllogin', formData,{
        withCredentials:true,
      });
        // Handle success response
        // console.log(response);
        if (response.status === 200) {
          const { firstName, lastName, _id,token} = response.data;

          if (firstName && lastName) {
            const clientName = `${firstName} ${lastName}`;
            const id=`${_id}`;
            const tkn=`${token}`;
            Cookies.set("clientName", clientName);
            Cookies.set("clientId", id);
            Cookies.set("loggedIn", "true");
            Cookies.set("accessToken",tkn)

          } else {
            console.error('First name, last name, or category is undefined.');
            toast.error('Unexpected response format. Please try again later.');
          }

          console.log("login successfull");
          navigate('/client/dash')
        } else {
          // Handle error response
          toast.warn(response.data.message);
        }

      // if(response.data){
        
      // } else {
      //   console.error('Unexpected response format:', response);
      //   alert('Unexpected response format. Please try again later.');
      // }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.warning('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/2">
        <figure className="relative w-full object-contain object-cover">
          <img
            className="h-screen w-full object-contain object-cover object-center"
            src="https://media.istockphoto.com/id/1368954963/photo/cyber-security-in-two-step-verification-login-user-identification-information-security-and.webp?b=1&s=170667a&w=0&k=20&c=OWbOYeuJTJnKN0IIKOMEsq8qOhHweR9DQIg0EQHeeo0="
            alt="nature"
          />
        </figure>
      </div>
      <div className="w-1/2 flex justify-center items-center bg-gray-200">
        <div className="container h-1/2 p-5 bg-gray-300"> 
          <Card className="bg-white p-5" color="transparent" shadow={false}>
            <h2 className="text-2xl font-semibold mb-4">Log In</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <Button onClick={handleSubmit} type="submit" color="blue-gray" size="lg" ripple={false} >
                Log In
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
    </form>
  );
}

export default Clilogin;
