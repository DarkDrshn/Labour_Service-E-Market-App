import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    // Avatar,
  } from "@material-tailwind/react";
  
  export function TextCards6() {
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
          className="m-0  flex items-center gap-4 "
        >
          <div className="flex w-full flex-col  m-0">
            <div className="">
              <Typography variant="h3" className="text-center" color="blue-gray">
                When do you require an Painter?
              </Typography>
            </div>
            {/* <Typography color="blue-gray">Frontend Lead @ Google</Typography> */}
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 m-0">
          <Typography className="text-center ">
            &quot;You require a painter when finishing surfaces to enhance aesthetics and protect them. Painters apply coatings to walls, ceilings, and other surfaces, providing color, texture, and durability. Whether for new constructions or renovations, painters contribute to creating visually appealing and well-maintained spaces, both indoors and outdoors.&quot;
          </Typography>
        </CardBody>
      </Card>
    );
  }
  