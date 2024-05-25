import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  // Avatar,
} from "@material-tailwind/react";

export function TextCards4() {
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
              What is Mason?
            </Typography>
          </div>
          {/* <Typography color="blue-gray">Frontend Lead @ Google</Typography> */}
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0 m-0">
        <Typography className="text-center ">
          &quot;A mason is a skilled craftsman who works with materials like brick, stone, or concrete to construct durable and visually appealing structures. They specialize in tasks such as bricklaying, stone masonry, concrete work, tile setting, and the restoration of existing structures, contributing to the construction and aesthetic aspects of buildings..&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
