import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CategoryCard() {
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
          Carpenter
        </Typography>
        <CardBody className="p-2">
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-justify"
          >
            A carpenter is a skilled person who specializes in 
            working with wood to construct, install, and repair various 
            structures and objects. The profession of carpentry requires 
            a combination of technical skills, precision, and creativity
          </Typography>


          <ul class=" list-disc list-inside">
            <li>Framing</li>
            <li>Trim and Finish Carpentry</li>
            <li>Cabinetmaking</li>
            <li>Furniture Making</li>
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
          Electrician
        </Typography>
        <CardBody className="p-2">
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-justify"
          >
            An electrician is a skilled professional specializing in the 
            installation, maintenance, and repair of electrical Devices and systems. 
            They read blueprints, install wiring, outlets, and fixtures, ensuring 
            compliance with safety codes.
          </Typography>

          <ul class=" list-disc list-inside">
            <li>Installation of Wiring and Electronics</li>
            <li>Routine Inspections and Maintenance</li>
            <li>Troubleshooting and Repairs</li>
            <li>Upgrading Electrical Systems</li>
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
          Plumber
        </Typography>
        <CardBody className="p-2">
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-justify"
          >
            A plumber is a skilled tradesperson who specializes
             in the installation, maintenance, and repair of plumbing
              systems. Plumbing systems are crucial for the distribution 
              of clean water into buildings and the removal of waste water.
          </Typography>
          <ul class=" list-disc list-inside">
            <li>Installation of Plumbing Systems</li>
            <li>Pipe Repair and Maintenance</li>
            <li>Fixture Installation</li>
            <li>Gas Line Installation</li>
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
          Mason
        </Typography>
        <CardBody className="p-2">
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-justify"
          >
            A mason is a skilled craftsman who works with various 
            construction materials, such as brick, stone, concrete 
            , or tiles, to create structures or components,
            bonding of these materials to form durable and 
            aesthetically structures.
          </Typography>

          <ul class=" list-disc list-inside">
            <li>Bricklaying</li>
            <li>Stone Masonry</li>
            <li>Concrete Work</li>
            <li>Fireplace Construction</li>
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
