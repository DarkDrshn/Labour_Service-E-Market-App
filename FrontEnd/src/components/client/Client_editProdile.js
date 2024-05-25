import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import SidebarClient from "../SidebarClient.js";

function ClientEdit() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    fetchClientData();
  }, []);

  const fetchClientData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/client/getOneClientByID",
        //http://localhost:8000/api/v1/client/getClient,
        {
          withCredentials:true,
        }
      );
      console.log(response);
      setFormData(response.data.data);
    } catch (error) {
      console.error("Error fetching Client data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.put(
      //   "http://localhost:8000/api/v1/client/registerClient",
      //   formData
      // );
      // const { firstName, lastName, ...others} = formData;
      // const clientName = `${firstName} ${lastName}`;
      // Cookies.set("clientName", clientName);

      const response = await axios.post('http://localhost:8000/api/v1/client/clupdate', formData, {
        withCredentials:true,
      });
      console.log("Profile updated successfully:", response.data);
      toast.success("Profile updated successfully");
      Cookies.set("clientName", response.data.name);

    } catch (error) {
      console.error("Error updating profile:", error);
      toast.warn("Somewthing went wrong");
    }
  };

  return (
    <div className="flex">
      <SidebarClient />
      <div className="w-full px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Typography color="blue-gray" className="text-lg font-bold">
                Edit Profile
              </Typography>
              <Button
                type="submit"
                color="black"
                ripple="light"
                className="w-32"
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            </div>
          </CardHeader>
          <div className="p-4">
            <form>
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
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
                  type="number"
                  label="Age"
                  name="age"
                  value={formData.age}
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
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ClientEdit;
