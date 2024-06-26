import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SectionTwo() {
  return (
    <Card shadow={false} className=" w-fit h-96 ">
      <CardBody className="pl-0 pr-20">
        <Typography variant="h5" color="blue-gray" className="">
          One stop platform for all your Labour needs.
        </Typography>
        <Typography className="pl-0">
          We are a cutting-edge ecommerce platform dedicated to connecting Labour
          service providers with clients, offering a centralized system that
          prioritizes top-tier security. Our mission is to streamline the Labour
          service industry, providing a secure and efficient marketplace for
          clients seeking expert Labour assistance and professionals offering
          their expertise. We are your trusted partner in navigating the world
          of Labour services, committed to facilitating seamless connections and
          peace of mind for all parties involved.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 pl-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
