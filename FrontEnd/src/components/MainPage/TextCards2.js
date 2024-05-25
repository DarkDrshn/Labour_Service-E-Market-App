import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  // Avatar,
} from "@material-tailwind/react";

export function TextCards2() {
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
              When do you require an Electrician?
            </Typography>
          </div>
          {/* <Typography color="blue-gray">Frontend Lead @ Google</Typography> */}
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0 m-0">
        <Typography className="text-center ">
          &quot;You require an electrician for various tasks, including installing electrical wiring, outlets, and fixtures in new constructions, conducting routine maintenance to ensure system reliability, troubleshooting and repairing electrical issues, upgrading existing systems, and ensuring safety compliance. Electricians are essential for maintaining a safe and functional electrical infrastructure.&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
