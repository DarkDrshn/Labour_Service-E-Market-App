//Clients request that lawyer has got
import React from "react";
import Sidebar from "../Sidebar";
import { useState,useEffect } from "react";
import axios from 'axios'

import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Avatar,
  Card,
  Typography,
  Button,
  // Button,
  Input,
} from "@material-tailwind/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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

function AdvDashAuthCliReq({laborerName,category,profileImage}) {

  const [bookingRequests, setBookingRequests] = useState([]);

  const fetchBookingRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/bookinglaborer/getbooking',{
        withCredentials:true,
      })
      setBookingRequests(response.data);
    } catch (error) {
      console.error('Error fetching booking requests:', error);
    }
  };

  useEffect(() => {
    fetchBookingRequests();
  }, []);

  const handleAccept = async (requestId) => {
    // Handle accept logic here

    try {
      const formData = {
        requestId:requestId,
        result:"Accepted"
      }
      const response = await axios.post('http://localhost:8000/api/v1/bookinglaborer/setbooking',formData,{
        withCredentials:true,
      })
    } catch (error) {
      console.error('Error fetching booking requests:', error);
    }
    
    console.log("Accepted:", requestId);
    setBookingRequests((prevRequests) =>
      prevRequests.filter((request) => request._id !== requestId)
    );
  };

  const handleDecline = async (requestId) => {

    try {
      const formData = {
        requestId:requestId,
        result:"Declined"
      }
      const response = await axios.post('http://localhost:8000/api/v1/bookinglaborer/setbooking',formData,{
        withCredentials:true,
      })
    } catch (error) {
      console.error('Error fetching booking requests:', error);
    }

    console.log("Declined:", requestId);
    setBookingRequests((prevRequests) =>
      prevRequests.filter((request) => request._id !== requestId)
    );
  };
  

  

  return (
    <>
      <div className="flex">
        <div className="w-1/4 pl-2">
          <Sidebar laborerName={laborerName} category={category} profileImage={profileImage} />
        </div>
        <div className="w-3/4 h-screen">
          <div className="mx-8 mt-5 pt-3 pl-10 pr-10">
            <div className="relative flex 3xl:w-max">
              <Input
                type="search"
                label="Type here..."
                className=""
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              {/* <Button></Button> */}
            </div>
          </div>
          <br></br>
          <div
        className="lg:h-5/5 p-5 overflow-auto"
        style={{ backgroundColor: "#fbc642" }}
      >
        <Card className="flex">
          <List>
            {bookingRequests.map((request, index) => (
              <ListItem key={index}>
                {/* Render each booking request item */}
                <ListItemPrefix>
                  {/* You can render the client's avatar here */}
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    {request.clientName}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {request.BookingFor}
                  </Typography>
                  {/* Other details of the booking request */}
                </div>
                <div className="space-x-2 ml-auto">
                        <Button
                          color="blue"
                          onClick={() => handleAccept(request._id)}
                        >
                          Accept
                        </Button>
                        <Button
                          color="red"
                          onClick={() => handleDecline(request._id)}
                        >
                          Decline
                        </Button>
                      </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
        </div>
      </div>
    </>
  );
}

export default AdvDashAuthCliReq;
