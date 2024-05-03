import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Stepper, Step, Card, Button,Input } from "@material-tailwind/react";
import { toast } from "react-toastify";

function CliRegister() {
  const navigate = useNavigate();

  const [image, setImage] = React.useState(null); 

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    address: "",
    city: "",
    zipcode: "",
    // image:""  
  });

  // const formDataToSend = new FormData();
  // formDataToSend.append("firstName", formData.firstName);
  // formDataToSend.append("lastName", formData.lastName);
  // formDataToSend.append("email", formData.email);
  // formDataToSend.append("password", formData.password);
  // formDataToSend.append("phone", formData.phone);
  // formDataToSend.append("age", formData.age);
  // formDataToSend.append("address", formData.address);
  // formDataToSend.append("city", formData.city);
  // formDataToSend.append("zipcode", formData.zipcode);
  // formDataToSend.append("image", image);

  const handleNext = () => {
    setActiveStep((cur) => cur + 1);
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
    // setFormErrors((prevFormErrors) => ({
    //   ...prevFormErrors,
    //   [name]: value.trim() === "",
    // }));

   const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["firstName","lastName" ,"email", "password", "phone","age","address","city","zipcode"];
    const hasEmptyFields = requiredFields.some(field => !formData[field]);
  
    if(hasEmptyFields) {
      toast.warn("Please fill in all the required fields.");
      return;
    } 

    try{
      // console.log(formData)
      const response = await axios.post('http://localhost:8000/api/v1/client/registerClient', formData);
      // console.log(response)
        // Handle success response
        if (response.data.statusCode === 200) {
          // Navigate to login page or show success message
          // window.location.href = '/login'
          navigate('/cl/login')

        } else {
          // Handle error response
          // alert(response.data.message);
        }
      } catch (error) {
          console.error('Error submitting form:', error);
          toast.warn('Error submitting form. Please try again later.');
      }
    };

  React.useEffect(() => {
    setIsLastStep(activeStep === 2);
    setIsFirstStep(activeStep === 0);
  }, [activeStep]);

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex h-screen">
      <div className="w-1/2">
        <figure className="relative w-full object-contain object-cover">
          <img
            className="h-screen w-full object-contain object-cover object-center"
            src="https://media.istockphoto.com/id/1264216428/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=qpwsad3Di5cYmZbFQ1a655sNomj4aRhbBA2faEy7l7I="
            alt="nature"
          />
        </figure>
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

            {activeStep === 0 && (
              <div className="mt-4 mb-4 flex flex-col gap-6">
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="mb-2 p-2 border rounded"
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

            {activeStep === 1 && (
              <div className="mt-4 mb-4 flex flex-col gap-6">
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
                  className="mb-2 p-2 border rounded"
                /> 
                <Input
                  type="text"
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
                  placeholder="Phone No."
                  pattern="[0-9]{10}"
                  className="mb-2 p-2 border rounded"
                />
           
              </div>
            )}

            {activeStep === 2 && (
              <div className="mt-4 mb-4 flex flex-col gap-6">
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="mb-2 p-2 border rounded"
                />
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="mb-2 p-2 border rounded"
                />
                <Input
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  placeholder="Zipcode"
                  className="mb-2 p-2 border rounded"
                />
                  {/* <Input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*" // Allow only image files
                  /> */}
              </div>
            )}

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

export default CliRegister;
