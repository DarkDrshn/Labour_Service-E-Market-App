//based on client, show chats
import React,{useState,useEffect} from "react";
import Cookies from "js-cookie";
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Avatar,
  CardBody,
  Card,
  Typography,
  IconButton,
  // Button,
  Input,
} from "@material-tailwind/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SidebarClient from "../SidebarClient";

const TABLE_HEAD = [
    "Date",
    "Request ID",
    "Request Details",
    "To LSPs",
    "Status",
  ];

// const TABLE_ROWS = [
//     {
//         // img: "/img/logos/logo-spotify.svg",
//         date: "17/01/2024",
//         req_id:
//           "r34255",
//         req_details:"Ceiling Light Setup ",
//         to_lsps: "Vipul Sutar",
//         status: "Pending",
//       },
//       {
//         // img: "/img/logos/logo-spotify.svg",
//         date: "17/01/2024",
//         req_id:
//           "r12345",
//         req_details: "Fix Leaking Pipe",
//         to_lsps: "Aryan Arora",
//         status: "Accepted",
//       },
//       {
//         // img: "/img/logos/logo-spotify.svg",
//         date: "17/01/2024",
//         req_id:
//           "r34567",
//         req_details:"Make Study Table",
//         to_lsps: "Anirudh Shukla",
//         status: "Accepted",
//       },
// ];



function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClientDash() {
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    const clientNameFromCookie = Cookies.get("clientName");
    if (clientNameFromCookie) {
      setClientName(clientNameFromCookie);
    }
  }, []);

  


  const [bookingRequests, setBookingRequests] = useState([]);

  const fetchBookingRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/bookinglaborer/getbooking',{
        withCredentials:true,
      })
      console.log(response.data);
      setBookingRequests(response.data);
      const count_req = response.data.length;
      setTotalReq(count_req);
      const count_pending = response.data.filter(item => item.status === "Pending");
      setPendingReq(count_pending.length);
      const count_accepted = response.data.filter(item => item.status === "Accepted");
      setAcceptedReq(count_accepted.length);

    } catch (error) {
      console.error('Error fetching booking requests:', error);
    }
  };




  useEffect(() => {
    fetchBookingRequests();
  }, []);

  const [totalReq, setTotalReq] = useState(0);
  const [pendingReq, setPendingReq] = useState(0);
  const [acceptedReq, setAcceptedReq] = useState(0);


  return (
    <>
      <div className="flex">
        <div className="w-1/4 pl-2">
          <SidebarClient clientName={clientName} />
        </div>
        <div className="w-3/4 h-screen">
          <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div class="grid grid-cols-3 row-gap-8 md:grid-cols-3">
        <div class="text-center md:border-r bg-blue-200">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{totalReq}</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            All Requests
          </p>
        </div>
        <div class="text-center md:border-r bg-red-200">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{pendingReq}</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Pending Requests
          </p>
        </div>
        <div class="text-center md:border-r bg-green-200">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{acceptedReq}</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Accepted Request
          </p>
        </div>
      </div>
    </div>
          <div
            className="lg:h-3/5 p-5 overflow-auto"
            style={{ backgroundColor: "#fbc642" }}
          >
            <Card className="flex">
            <CardBody className="h-4/5 overflow-y-scroll px-0">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-#fff8e1-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="black"
                          className="font-normal leading-none font-bold opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookingRequests.map(
                    (
                      {
                        datetime,
                        _id,
                        description,
                        clientName,
                        status,
                        
                      },
                      index
                    ) => {
                      const isLast = index === bookingRequests.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={_id}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                          
                              <Typography
                                variant="small"
                                color="blue-gray"
                              >
                                {datetime}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {_id}
                            </Typography>
                          </td>
                          <td className={`${classes} text-wrap`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal  "
                             
                            >
                              <div className="text-wrap">

                              {description}
                              </div>
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {clientName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {status}
                            </Typography>
                          </td>
                       
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientDash;
