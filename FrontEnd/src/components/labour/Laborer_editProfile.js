import React, { useState, useEffect } from "react";
import SideBar from "../Sidebar.js";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";

function LaborerEdit({laborerName}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    aadharNo: "",
    gender: "",
    age: "",
    maxEducation: "",
    experience: "",
    location: "",
    category: "",
    profileImage: null,
  });

  useEffect(() => {
    fetchLaborerData();
  }, []);

  const fetchLaborerData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/labourlogin/getOneLabourByID",
        {
          withCredentials:true,
        }
        //http://localhost:8000/api/v1/labour/getlabour
      );
      console.log(response.data.data);
      setFormData(response.data.data);
    } catch (error) {
      console.error("Error fetching laborer data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(
        "http://localhost:8000/api/v1/labourlogin/updateLabour",
        formData,
        {
          withCredentials:true,
        }
      );
      console.log("Profile updated successfully:", response);
      Cookies.set("laborerName", response.data.name); 
      Cookies.set("categoryName", response.data.category);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      <div className="flex">
        <SideBar laborerName={laborerName}/>
        <div className="w-full px-4 py-8">
          <Card>
            <CardHeader>
              <div>
                <Typography color="blue-gray" className="text-lg font-bold">
                  Edit Profile
                </Typography>
                <Typography color="gray" className="mt-1">
                  Update your profile information here.
                </Typography>
              </div>
            </CardHeader>
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    type="tel"
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  />
                  <Input
                    type="number"
                    label="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    label="Max Education"
                    name="maxEducation"
                    value={formData.maxEducation}
                    onChange={handleChange}
                  />
                  <Input
                    type="number"
                    label="Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                  <div className="col-span-2">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <Button
                      type="submit"
                      color="black"
                      ripple="light"
                      className="w-full sm:w-32"
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default LaborerEdit;
