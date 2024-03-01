import React from "react";
import { Stepper, Step, Card, Button,Input } from "@material-tailwind/react";

function CliLogin() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone:"",
    age:"",
    address: "",
    city: "",
    zipcode: "",
  });

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep((cur) => cur + 1);
    } else {
      // Handle final form submission here
      console.log("Form data submitted:", formData);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <figure className="relative w-full object-contain object-cover">
          <img
            className="h-screen w-full object-contain object-cover object-center"
            src="https://images.unsplash.com/photo-1694259841577-caa97cde9518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
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
                />
                <Input
                  type="password"
                  name="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
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
            />
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone No."
              className="mb-2 p-2 border rounded"
            />
            <Input
              type="number"
              name="Age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
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
        </div>
          )}

          <div className="mt-8 flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Button onClick={handleNext} disabled={isLastStep}>
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CliLogin;
