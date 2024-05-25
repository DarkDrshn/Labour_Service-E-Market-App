import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  // Avatar,
} from "@material-tailwind/react";

export function TextCards3() {
  return (
    <Card
      color="transparent"
      shadow={false}
      className=" m-auto mb-10 items-center w-full max-w-[26rem] "
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="m-0  flex items-center gap-4 pt-0 "
      >
        <div className="flex w-full flex-col  m-0">
          <div className="">
            <Typography variant="h3" className="text-center" color="blue-gray">
              How is Plumber helpful?
            </Typography>
          </div>
          {/* <Typography color="blue-gray">Frontend Lead @ Google</Typography> */}
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0 m-0">
        <Typography className="text-center ">
          &quot;A plumber is essential for maintaining a functioning plumbing system. They install and repair pipes, fixtures, and appliances, ensuring the proper flow of clean water and removal of wastewater. Plumbers address leaks, clogs, and emergencies, contributing to public health, environmental sustainability, and the overall well-being of communities..&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
