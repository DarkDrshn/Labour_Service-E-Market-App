import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export function CategoryCard1() {
    return (
      <div className="flex justify-between pl-10 pr-10 ">
        <Card className="m-5 mt-0 p-4 rounded-md shadow-lg border-solid border-2 border-sky-500">
          {/* <CardHeader shadow={false} floated={false} className="h-72">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card"
              className="h-full w-full object-cover"
            />
          </CardHeader> */}
          <Typography className="p-2 pb-0 text-center" variant="h4">
            Plasterer
          </Typography>
          <CardBody className="p-2">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 text-justify"
            >
              
A plasterer is a skilled tradesperson specializing in the application of plaster or other materials to create decorative finishes on interior and exterior walls and ceilings. Plasterers prepare surfaces, mix and apply plaster compounds.
            </Typography>
  
  
            <ul class=" list-disc list-inside">
              <li>Surface Preparation</li>
              <li>Mixing and Applying Plaster</li>
              <li>Skimming</li>
              <li>Drywall Finishing</li>
              <li>and many more....</li>
            </ul>
  
          </CardBody>
          <CardFooter className="pt-0 pb-0">
            <a href="/market">
              <Button
                ripple={false}
                fullWidth={true}
                className="m-2 ml-0  text-blue-gray-50 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Search
              </Button>
            </a>
          </CardFooter>
        </Card>
  
  
  
        <Card className="m-5 mt-0 p-4 rounded-md shadow-lg border-solid border-2 border-sky-500">
          {/* <CardHeader shadow={false} floated={false} className="h-72">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card"
              className="h-full w-full object-cover"
            />
          </CardHeader> */}
          <Typography className="p-2 pb-0 text-center" variant="h4">
            Painter
          </Typography>
          <CardBody className="p-2">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 text-justify"
            >
              A painter is a skilled professional responsible for applying paint, coatings, and finishes to surfaces such as walls, ceilings, and other structures to enhance their appearance and protect them from environmental elements. 
            </Typography>
  
            <ul class=" list-disc list-inside">
              <li>Masking and Taping</li>
              <li>Surface Preparation</li>
              <li>Covering walls with Patterns</li>
              <li>Paints Walls & Roofs</li>
              <li>and many more....</li>
            </ul>
  
  
  
          </CardBody>
          <CardFooter className="pt-0 pb-0">
            <a href="/">
              <Button
                ripple={false}
                fullWidth={true}
                className="m-2 ml-0  text-blue-gray-50 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Search
              </Button>
            </a>
          </CardFooter>
        </Card>
  
  
  
        <Card className="m-5 mt-0 p-4 rounded-md shadow-lg border-solid border-2 border-sky-500">
          {/* <CardHeader shadow={false} floated={false} className="h-72">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card"
              className="h-full w-full object-cover"
            />
          </CardHeader> */}
          <Typography className="p-2 pb-0 text-center" variant="h4">
            Construction Worker
          </Typography>
          <CardBody className="p-2">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 text-justify"
            >
              A Construction Worker is a skilled tradesperson who specializes in  fusing materials, typically metals, using various techniques such as welding, brazing, soldering. They interpret blueprints, sketches, or specifications to determine the welding method
            </Typography>
            <ul class=" list-disc list-inside">
              <li>Reading and interpreting blueprints</li>
              <li>Operating and maintaining equipment</li>
              <li>Joining metals</li>
              <li>Structural steel welders</li>
              <li>and many more....</li>
            </ul>
  
          </CardBody>
          <CardFooter className="pt-0 pb-0">
            <a href="/">
              <Button
                ripple={false}
                fullWidth={true}
                className="m-2 ml-0  text-blue-gray-50 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Search
              </Button>
            </a>
          </CardFooter>
        </Card>
  
  
  
        <Card className="m-5 mt-0 p-4 rounded-md shadow-lg border-solid border-2 border-sky-500">
          {/* <CardHeader shadow={false} floated={false} className="h-72">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card"
              className="h-full w-full object-cover"
            />
          </CardHeader> */}
          <Typography className="p-2 pb-0 text-center" variant="h4">
            Mechanic
          </Typography>
          <CardBody className="p-2">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 text-justify"
            >
              Mechanics work across various industries, including automotive, aerospace, industrial, and marine. Their expertise involves diagnosing mechanical issues, performing necessary repairs or replacements, and ensuring that machinery and systems operate efficiently
            </Typography>
  
            <ul class=" list-disc list-inside">
              <li>Cleaning and Preparing Surfaces</li>
              <li>Fluid Changes</li>
              <li>Battery Maintenance</li>
              <li>Vehicle or Motor Inspections</li>
              <li>and many more....</li>
            </ul>
          </CardBody>
          <CardFooter className="pt-0 pb-0">
            <a href="/">
              <Button
                ripple={false}
                fullWidth={true}
                className="m-2 ml-0  text-blue-gray-50 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Search
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    );
  }
  