import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SectionOne() {
  return (
    <Card shadow={false} className=" justify-center m-6 w-fit h-96 pr-0">
      <CardBody className="pr-0 justify-between center">
        <Typography variant="h5" color="blue-gray" className="mb-5">
          Connecting Clients and Expert Agents Effortlessly, Your One-Stop
          Platform for Labour Solutions.
        </Typography>
        <Typography>
          Our platform is the bridge that seamlessly connects clients with
          seasoned Labour service agents. With us, finding expert assistance for
          your Labour needs becomes hassle-free, making us your ultimate
          destination for Labour solutions.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
