import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  Stepper,
  Step,
  Card,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { toast } from "react-toastify";



function LsRegister() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
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
    customCategory:"",
    profileImage : null,
    certificate:null
  });

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep((cur) => cur + 1);
    } else {
      setIsLastStep(true);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((cur) => cur - 1);
    } else {
      setIsFirstStep(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "category" && value !== "other") {
      // Reset customCategory field when category is not "other"
      setFormData(prevFormData => ({ ...prevFormData, customCategory: "" }));
    } else if (name === "customCategory") {
      // Update customCategory field when user enters a custom category
      setFormData(prevFormData => ({ ...prevFormData, customCategory: value }));
    }
  };
  
    // setFormErrors((prevFormErrors) => ({
    //   ...prevFormErrors,
    //   [name]: value.trim() === "",
    // }));
  


  useEffect(() => {
    setIsLastStep(activeStep === 2);
    setIsFirstStep(activeStep === 0);
  }, [activeStep]);

  const handleProfileImageChange = (e) => { 
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };
  
  const handleCertificateChange = (e) => { 
    const file = e.target.files[0];
    setFormData({ ...formData, certificate: file });
  };
  

  const handleSubmit = async (e) => {
      e.preventDefault();
      const { firstName, lastName, email, password, phone, aadharNo, gender, age, maxEducation, experience, location, category, customCategory,profileImage,certificate} = formData;
      const requiredFields = ["firstName","lastName","email", "password", "phone", "aadharNo", "gender", "age", "maxEducation", "experience", "location", "category"];
      const hasEmptyFields = requiredFields.some(field => !formData[field]);
    
      if (hasEmptyFields) {
        toast.warn("Please fill in all the required fields.");
        return;
      }

      const formDataWithFile = new FormData();
      formDataWithFile.append("firstName", firstName);
      formDataWithFile.append("lastName", lastName);
      formDataWithFile.append("email", email);
      formDataWithFile.append("password", password);
      formDataWithFile.append("phone", phone);
      formDataWithFile.append("aadharNo", aadharNo);
      formDataWithFile.append("gender", gender);
      formDataWithFile.append("age", age);
      formDataWithFile.append("maxEducation", maxEducation);
      formDataWithFile.append("experience", experience);
      formDataWithFile.append("location", location);
      formDataWithFile.append("category", category === "other" ? customCategory : category);
      formDataWithFile.append("profileImage", profileImage);
      formDataWithFile.append("certificate",certificate)
      try {
        const response = await axios.post('http://localhost:8000/api/v1/labour/registerlabour', formDataWithFile,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      });
        console.log(response);
        if (response.data.statusCode === 200) {
          navigate('/ls/login')
        } else {
          toast.warning(response.data.message);
        }
        } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form. Please try again later.');
      } 
  };

  const handleCategoryChange = (value) => { 
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: value,
    }));
  };

  // const [avatarFile, setAvatarFile] = useState(null);

  

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex h-screen">
      <div className="w-1/2">
        {/* Image section */}
        <img
            className="h-screen w-full object-contain object-cover object-center"
            src="https://resources.cdn.yaclass.in/2fbc4845-b3b3-43ef-9bef-0f17f10d9506/shutterstock1705048717w300.jpg"
            alt="nature"
          />
      </div>
      <div className="w-1/2 flex justify-center items-center bg-gray-200">
        <div className="container h-1/2 p-5 bg-gray-300">
          <Card className="bg-white p-5" color="transparent" shadow={false}>
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
            >
              <Step onClick={() => setActiveStep(0)}>1</Step>
              <Step onClick={() => setActiveStep(1)}>2</Step>
              <Step onClick={() => setActiveStep(2)}>3</Step>
            </Stepper>

            {/* Form sections */}
            {activeStep === 0 && (
              <div className="mt-4 mb-4 flex flex-col gap-6">
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="mb-2 p-2 border rounded"
                  autoComplete="username"
                />
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="mb-2 p-3 border rounded"
                  autoComplete="username"
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="mb-2 p-2 border rounded"
                  autoComplete="email"
                />
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  autoComplete="current-password"
                  max={8}
                  className="mb-2 p-2 border rounded"
                />
              </div>
            )}

            {activeStep === 1 && (
              <div className="mt-4 mb-4 flex flex-col gap-6">
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                    if (value.length <= 10) {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        phone: value,
                      }));
                    }
                  }}
                
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  className="mb-2 p-2 border rounded"
                />
                <Input
                  type="text"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                    if (value.length <= 12) {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        aadharNo: value,
                      }));
                    }
                  }}
                  placeholder="Aadhar Number"
                  className="mb-2 p-2 border rounded"
                />
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={(value) => handleInputChange({
                    target: {
                      name: 'gender',
                      value
                    }
                  })}
                  className="mb-2 p-2 border rounded"
                >
                  <Option value="">Select Gender</Option>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
                <Input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                    if (value.length <= 2) {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        age: value,
                      }));
                    }
                  }}
                  placeholder="Age"
                  className="mb-2 p-2 border rounded"
                />
              </div>
            )}

            {activeStep === 2 && (
              <div className="mt-4 mb-4 flex flex-col gap-6">
                <Input
                  type="text"
                  name="maxEducation"
                  value={formData.maxEducation}
                  onChange={handleInputChange}
                  placeholder="Education"
                  max={2}
                  className="mb-2 p-2 border rounded"
                />
                <Input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Experience"
                  className="mb-2 p-2 border rounded"
                />
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}s
                  placeholder="Location"
                  className="mb-2 p-2 border rounded"
                />
                <Select
                  name="category"
                  value={formData.category}
                  onChange={(value) => handleInputChange({
                    target: {
                      name: 'category',
                      value
                    }
                  })}
                  className="mb-2 p-2 border rounded"
                >
                <Option value="">Select Category</Option>
                <Option value="carpenter">Carpenter</Option>
                <Option value="electrician">Electrician</Option>
                <Option value="plumber">Plumber</Option>
                <Option value="mason">Mason</Option>
                <Option value="painter">Painter</Option>
                <Option value="construction worker">Construction Worker</Option>
                <Option value="plasterer">Plasterer</Option>
                <Option value="other">Other</Option> 
              </Select>
              {formData.category === "other" && (
                    <Input
                      type="text"
                      name="customCategory"
                      value={formData.customCategory}
                      onChange={handleInputChange}
                      placeholder="Enter Your Category"
                      className="mt-2 p-2 border rounded"
                    />
                  )}
                    <Input
                      type="file"
                      name="profileImage"
                      onChange={handleProfileImageChange}
                      accept="image/*"
                      className="mt-2 p-2 border rounded"
                      label="Profile Image"
                  />
                  <Input
                      type="file"
                      name="certificate"
                      onChange={handleCertificateChange}
                      accept="image/*"
                      className="mt-2 p-2 border rounded"
                      placeholder="Upload Certificate of your expertise course"
                      label="Certificate Of course"
                      labelStyle={{ fontSize: '14px', color: '#333', fontWeight: 'bold', marginBottom: '5px' }}
                  />
          </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-8 flex justify-between">
              <Button onClick={handlePrev} disabled={isFirstStep}>
                Prev
              </Button>
              {isLastStep ? (
                <Button onClick={handleSubmit}>Register</Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
    </form>
  );
}

export default LsRegister;
