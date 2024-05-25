import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
import { Card, CardHeader, Typography, CardBody, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { toast } from 'react-toastify';

const TABLE_HEAD = [
  "Client-ID",
  "Date",
  "Contract Description",
  "Contact Number",
  "Status",
  "Actions",
  "View Document",
];

function AdvDashAuthClient() {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [laborerName, setLaborerName] = useState("");
  const [category, setCategory] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, []);

  const fetchAssignment = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/assignmentlaborer/getassignment', {
        withCredentials: true,
      });
      setPendingAssignments(response.data);
    } catch (error) {
      console.error('Error fetching pending Assignments', error);
    }
  };

  useEffect(() => {
      fetchAssignment();
  }, []);

  useEffect(() => {
    const laborerNameFromCookie = Cookies.get("laborerName");
    if (laborerNameFromCookie) {
      setLaborerName(laborerNameFromCookie);
    }
  }, []);

  useEffect(() => {
    const categoryNameFromCookie = Cookies.get("categoryName");
    if (categoryNameFromCookie) {
      setCategory(categoryNameFromCookie);
    }
  }, []);

  const handleComplete = async (id) => {
    try {
      await axios.post('http://localhost:8000/api/v1/assignmentlaborer/setassignment', { 
        requestId:id, 
        status: "Completed" 
      }, {
        withCredentials:true,
      });
      fetchAssignment();
      toast.success('Task Completed Successfully');
    } catch (error) {
      console.error("Error completing assignment:", error);
    }
  };

  const handleCancel = async (id) => {
    try {
      await axios.post('http://localhost:8000/api/v1/assignmentlaborer/setassignment', { 
        requestId:id, 
        status: "Cancelled" 
      }, {
        withCredentials:true,
      });
      fetchAssignment();
      toast.success('Task Cancelled Successfully');
    } catch (error) {
      console.error("Error cancelling assignment:", error);
    }
  };

  const handleReport = async (id) => {
    try {
      await axios.post('url', { status: "Cancelled" });
      fetchAssignment();
      toast.success('Task Cancelled Successfully');
    } catch (error) {
      console.error("Error cancelling assignment:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar laborerName={laborerName} category={category} profileImage={profileImage} />
        </div>

        <div className="w-3/4">
          <div className="lg:h-5/5 p-5 overflow-auto" style={{ backgroundColor: "#fbc642" }}>
            <Card className="h-screen w-full">
              <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Overall Clients
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                      These are details about the established clients.
                    </Typography>
                  </div>
                  <div className="flex w-full shrink-0 gap-2 md:w-max">
                    <div className="w-full md:w-72">
                      <Input
                        label="Search"
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="h-4/5 overflow-y-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-y border-blue-gray-100 bg-#fff8e1-50/50 p-4">
                          <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pendingAssignments.map(({_id, clientId, datetime, description, contact, status, nxt, document }) => {
                      return (
                        <tr key={clientId}>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <Typography variant="small" color="blue-gray" className="font-bold">
                                {clientId}
                              </Typography>
                            </div>
                          </td>
                          <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {datetime}
                            </Typography>
                          </td>
                          <td className="p-4 text-wrap">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              <div className="text-wrap">
                                {description}
                              </div>
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {contact}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {status}
                            </Typography>
                          </td>
                          {(status==="InProgress")?<td className="p-4">
                            <div className="flex gap-2">
                            <button
                                onClick={() =>handleComplete(_id)}
                                className="bg-green-500 text-white py-2 px-2 rounded-md hover:bg-green-600 transition duration-300 text-xs"
                              >
                                Completed
                              </button>
                              <button
                                onClick={() =>handleCancel(_id)}
                                className="bg-red-500 text-white py-2 px-2 rounded-md hover:bg-red-600 transition duration-300 text-xs"
                              >
                                Cancelled
                              </button>
                            </div>
                          </td>
                          :<td className="p-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() =>handleReport(_id)}
                                className="bg-orange-500 text-white py-2 px-5 rounded-md hover:bg-red-600 transition duration-300 text-xs"
                              >
                                Report
                              </button>
                            </div>
                          </td>
                          }
                          {/* <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {nxt}
                            </Typography>
                          </td> */}
                          <td className="p-4">
                            <div className="overflow-hidden" style={{ maxWidth: '100%' }}>
                              <a href={document} className="inline-flex items-center font-small text-blue-600 dark:text-blue-500 hover:underline">
                                View Document
                                <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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

export default AdvDashAuthClient;
