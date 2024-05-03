import React from "react";
import '../index.css'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  RectangleStackIcon,
  InboxIcon,
  PowerIcon,
  StarIcon,
  PencilSquareIcon,
  SignalIcon,
} from "@heroicons/react/24/solid";

// import { ChevronRightIcon, ChevronDownIcon, UserGroupIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { Badge, Button } from "@material-tailwind/react";
import {CheckIcon} from "@heroicons/react/24/outline";

function SidebarClient({clientName}) {
  console.log(clientName);
  const [open, setOpen] = React.useState(0);
  //   const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 sidebar">
        
        <div className="text-center">
        <Badge
      content={<CheckIcon className="h-4 w-4 text-white" strokeWidth={2.5} />}
      className="bg-gradient-to-tr from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
    >
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            className="mx-auto mb-4 w-32 rounded-full"
            alt="Avatar"
          />
          </Badge>
          <h5 className="mb-2 text-xl font-medium leading-tight">{clientName}</h5>
          {/* <Typography color="blue-gray" className="font-medium" textGradient>
            Road Contractor
          </Typography> */}
        </div>
        <List>
          {/* <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Client Info
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link to="/ls/cli">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Clients
                  </ListItem>
                </Link>
                <Link to="/ls/cli_req">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Requests
                </ListItem>
                </Link>
                <Link to="/ls/cli_chat">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Chats
                </ListItem>
                </Link>
                <Link to="/ls/cli_hist">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  History
                </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion> */}

<Link className="p-0" selected={open === 1} to="/client/dash">
        <ListItem
        onClick={() => handleOpen(1)} className="border-b-0 p-3"
        >
        
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
          DashBoard
        </ListItem>
        </Link>
<Link to="/client/dash" clientName={clientName}>
        <ListItem>
          <ListItemPrefix>
            <RectangleStackIcon className="h-5 w-5" />
          </ListItemPrefix>
          Submitted Request
        </ListItem>
        </Link>
<Link to="/client/dash" clientName={clientName}>
        <ListItem>
          <ListItemPrefix>
            <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
          </ListItemPrefix>
          Chats
        </ListItem>
        </Link>
<Link to="/client/service" className={clientName}>
        <ListItem>
          <ListItemPrefix>
            <DocumentTextIcon className="h-5 w-5" />
          </ListItemPrefix>
          Service History
        </ListItem>
        </Link>
        
          <hr className="my-2 border-blue-gray-50" />


       
          
          <Link to="/client/profile">
          <ListItem>
            <ListItemPrefix>
              <PencilSquareIcon className="h-5 w-5" />
            </ListItemPrefix>
            Edit Profile
          </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-50" />

          <ListItem>
            <ListItemPrefix>
              <SignalIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/client/help">
              Help
            </Link>
          </ListItem>
        </List>
      </Card>
    </>
  );
}
export default SidebarClient;







