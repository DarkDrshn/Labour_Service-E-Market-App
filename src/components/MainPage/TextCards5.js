import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    // Avatar,
  } from "@material-tailwind/react";
  
  export function TextCards5() {
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
              How is Plasterer helpful?
              </Typography>
            </div>
            {/* <Typography color="blue-gray">Frontend Lead @ Google</Typography> */}
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 m-0">
          <Typography className="text-center ">
            &quot;A plasterer is crucial for finishing and beautifying interior walls and ceilings. They apply plaster or other materials to create smooth and decorative surfaces, cover imperfections, and enhance insulation. Plasterers contribute to the aesthetic appeal, durability, and overall quality of interior spaces in construction and renovation projects.&quot;
          </Typography>
        </CardBody>
      </Card>
    );
  }
  