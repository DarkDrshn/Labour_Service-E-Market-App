import React from "react";
import '../index.css'
import axios from 'axios'
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

function Sidebar({laborerName,category,BookingFor,clientName,profileImage}) {
  // console.log("Laborer Name:", laborerName); 
  // console.log("category name:",category);

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
            src={profileImage}
            className="mx-auto mb-4 w-32 rounded-full"
            alt="Avatar"
          />
          </Badge>
          <h5 className="mb-2 text-xl font-medium leading-tight">{laborerName}</h5>
          <Typography color="blue-gray" className="font-medium" textGradient>
           {category}
          </Typography>
          {/* <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
            className="mx-auto mb-4 w-32 rounded-full"
            alt="Avatar"
          />
          </Badge>
          <h5 className="mb-2 text-xl font-medium leading-tight">Meena LLB</h5>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Case-Smasher
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

<Link className="p-0" selected={open === 1} to="/ls/cli">
        <ListItem
        onClick={() => handleOpen(1)} className="border-b-0 p-3"
        >
        
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
          Clients
        </ListItem>
        </Link>
        <Link
  to={{
    pathname: "/ls/cli_req",
    state: {
      clientName: clientName,
      BookingFor: BookingFor,
      laborerName: laborerName,
      category: category
    }
  }}
>
        <ListItem>
          <ListItemPrefix>
            <RectangleStackIcon className="h-5 w-5" />
          </ListItemPrefix>
          Clients Requests
        </ListItem>
        </Link>
<Link to="/ls/cli_chat" >
        <ListItem>
          <ListItemPrefix>
            <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
          </ListItemPrefix>
          Clients Chats
        </ListItem>
        </Link>
<Link to="/ls/cli_hist">
        <ListItem>
          <ListItemPrefix>
            <DocumentTextIcon className="h-5 w-5" />
          </ListItemPrefix>
          Clients History
        </ListItem>
        </Link>
        
          <hr className="my-2 border-blue-gray-50" />


       
          
          <Link to="/ls/profile">
          <ListItem>
            <ListItemPrefix>
              <PencilSquareIcon className="h-5 w-5" />
            </ListItemPrefix>
            Edit Profile
          </ListItem>
          </Link>

          <Link to="/ls/cli_rating">
          <ListItem>
            <ListItemPrefix>
              <StarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Ratings
          </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-50" />

          <Link to="/ls/help">
          <ListItem>
            <ListItemPrefix>
              <SignalIcon className="h-5 w-5" />
            </ListItemPrefix>
              Help
          </ListItem>
          </Link>
        </List>
      </Card>
    </>
  );
}
export default Sidebar;







