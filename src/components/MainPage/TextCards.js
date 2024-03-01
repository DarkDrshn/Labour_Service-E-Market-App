import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  // Avatar,
} from "@material-tailwind/react";

export function TextCards() {
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
              What is Carpentry?
            </Typography>
          </div>
          {/* <Typography color="blue-gray">Frontend Lead @ Google</Typography> */}
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0 m-0">
        <Typography className="text-center ">
          &quot;Carpentry is a skilled trade focused on working with
           wood to construct, install, and repair structures. Carpenters 
           use tools to cut, shape, and join wood, contributing to various 
           projects like building homes, crafting furniture, and ensuring 
           the integrity and functionality of wooden elements.&quot;
        </Typography>

        



      </CardBody>
    </Card>
  );
}
