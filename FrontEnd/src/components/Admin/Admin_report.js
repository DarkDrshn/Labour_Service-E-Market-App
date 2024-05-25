import React from "react";
import { AdminSideBar } from "./Admin_sidebar";

const reportedUsers = [
    {
      id: 1,
      username: "darshan Mahankar",
      email: "dp@gamil.com",
      category: "Electrician",
      reason: "Frequently not showing up for scheduled appointments",
      date: "2024-04-10",
      status: "Pending Review",
    },
    {
      id: 2,
      username: "Rajesh Sharma",
      email: "rajesh@gmail.com",
      category: "Carpenter",
      reason: "Providing subpar quality of work on recent projects",
      date: "2024-04-09",
      status: "Resolved",
    },
    {
      id: 3,
      username: "Amit Gupta",
      email: "amit@gmail.com",
      category: "Plumber",
      reason: "Overcharging customers for plumbing services",
      date: "2024-04-08",
      status: "Ongoing Investigation",
    },
    {
      id: 4,
      username: "Sanjay Patel",
      email: "sanjay@gmail.com",
      category: "Painter",
      reason: "Failure to complete painting projects within agreed-upon timelines",
      date: "2024-04-07",
      status: "Pending Review",
    },
  ];
  

const AdminReportedUsers = () => {
    return (
        <div className="flex">
          <AdminSideBar />
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-8">Reported Users</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">
                      Username
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">
                      Reason for Report
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">
                      Date Reported
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reportedUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.reason}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    
};

export { AdminReportedUsers };
