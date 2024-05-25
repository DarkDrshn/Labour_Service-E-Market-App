import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Sidebar from "../Sidebar";
import { PencilIcon ,MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

function AdvDashAuthClientHist({laborerId}) {
  const [completedAssignments, setCompletedAssignments] = useState([]);

  useEffect(() => {
    const fetchCompletedAssignments = async () => {
      try {
        if (laborerId) {
          const response = await axios.get(
            `http://localhost:8000/api/v1/assignmentlaborer/getcompletedassignment/${encodeURIComponent(
              laborerId
            )}`,
            {
              withCredentials: true,
            }
          );
          console.log(response);
          setCompletedAssignments(response.data.assignments);
        }
      } catch (error) {
        console.error("Error fetching completed assignments:", error);
      }
    };

    fetchCompletedAssignments();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 pl-2">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <Card className="h-screen w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Completed Assignments
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Details of completed assignments
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
                  {/* <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Labourer
                    </Typography>
                  </th> */}
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Category
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Status
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Title
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Description
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Address
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Date
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
              {completedAssignments.map((assignment) => (
      <tr key={assignment._id}>
        {/* <td className="p-4 border-b border-blue-gray-50">
          <Avatar
            src={assignment.labourId && assignment.labourId.profileImage ? assignment.labourId.profileImage : ''}
            alt={assignment.labourId ? `${assignment.labourId.firstName} ${assignment.labourId.lastName}` : ''}
            size="md"
            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
          />
        </td> */}
        {/* <td className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-bold"
          >
            {assignment.labourId ? `${assignment.labourId.firstName} ${assignment.labourId.lastName}` : ''}
          </Typography>
        </td> */}
        <td className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {assignment.category || ''}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {assignment.status || ''}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {assignment.title || ''}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {assignment.description || ''}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {assignment.address || ''}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {assignment.datetime || ''}
          </Typography>
        </td>
      </tr>
    ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default AdvDashAuthClientHist;
