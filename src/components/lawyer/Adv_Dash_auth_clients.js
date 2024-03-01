//Overview dashboard/table for lawyer to the accepeted clients
import Sidebar from "../Sidebar";
import '../About.js';
import '../../index.css';
// import NavbarWeb from '../Navbar';
// import { PreNavbar } from '../Prenavbar';
import { PencilIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  // Button,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "Client-ID",
  "Date",
  "Contract Description",
  "Contact Number",
  "Status",
  "Last Date",
  "View Document",
];

const TABLE_ROWS = [
  {
    // img: "/img/logos/logo-spotify.svg",
    cli_id: "cl123d",
    date: "17/01/2024",
    case_desc:
      "To design, construct, and deliver a custom study table, meeting specified dimensions and design preferences, in exchange for the agreed-upon payment upon completion of the project.",
    contact:"9874563215",
    status: "On Going ",
    nxt: "24/01/2024",
  },
  {
    // img: "/img/logos/logo-amazon.svg",
    cli_id: "cl564g",
    date: "08/02/2023",
    case_desc:
    "To operate on Girgardhan Ghat for the specified road construction project, adhering to safety guidelines and project requirements, in exchange for the agreed-upon compensation upon successful completion of the task",
    contact:"3214569875",
    status: "On Going",
    nxt: "15/02/2023",
  },
  {
    // img: "/img/logos/logo-pinterest.svg",
    cli_id: "cl987k",
    date: "08/10/2023",
    case_desc:
    "Contract engages the road roller driver to safely drive the road roller out of the municipal office premises in accordance with relevant regulations, ensuring the protection of property and personnel, in exchange for the agreed-upon compensation upon successful completion of the task.",
    contact:"25874136985",
    status: "On Going",
    nxt: "15/10/2023",
  },
  // {
  //   img: "/img/logos/logo-google.svg",
  //   name: "Google",
  //   amount: "$1,000",
  //   date: "Wed 5:00pm",
  //   status: "paid",
  //   account: "visa",
  //   accountNumber: "1234",
  //   expiry: "06/2026",
  // },
  // {
  //   img: "/img/logos/logo-netflix.svg",
  //   name: "netflix",
  //   amount: "$14,000",
  //   date: "Wed 3:30am",
  //   status: "cancelled",
  //   account: "visa",
  //   accountNumber: "1234",
  //   expiry: "06/2026",
  // },
  // {
  //   img: "/img/logos/logo-spotify.svg",
  //   name: "Spotify",
  //   amount: "$2,500",
  //   date: "Wed 3:00pm",
  //   status: "paid",
  //   account: "visa",
  //   accountNumber: "1234",
  //   expiry: "06/2026",
  // },
  // {
  //   img: "/img/logos/logo-amazon.svg",
  //   name: "Amazon",
  //   amount: "$5,000",
  //   date: "Wed 1:00pm",
  //   status: "paid",
  //   account: "master-card",
  //   accountNumber: "1234",
  //   expiry: "06/2026",
  // },
  // {
  //   img: "/img/logos/logo-pinterest.svg",
  //   name: "Pinterest",
  //   amount: "$3,400",
  //   date: "Mon 7:40pm",
  //   status: "pending",
  //   account: "master-card",
  //   accountNumber: "1234",
  //   expiry: "06/2026",
  // },
  // {
  //   img: "/img/logos/logo-google.svg",
  //   name: "Google",
  //   amount: "$1,000",
  //   date: "Wed 5:00pm",
  //   status: "paid",
  //   account: "visa",
  //   accountNumber: "1234",
  //   expiry: "06/2026",
  // },
  // {
  //   img: "/img/logos/logo-netflix.svg",
  //   name: "netflix",
  //   amount: "$14,000",
  //   date: "Wed 3:30am",
  //   status: "cancelled",
  //   account: "visa",
  //   accountNumber: "1234",
  //   expiry: "06/2026",
  // },
];

function AdvDashAuthClient() {
  return (
    <>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>

        <div className="w-3/4">
        <div
            className="lg:h-5/5 p-5 overflow-auto"
            style={{ backgroundColor: "#fbc642" }}
          >
          <Card className="h-screen w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Overall Clients
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    These are details about the establisted clients.
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
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-#fff8e1-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(
                    (
                      {
                        cli_id,
                        date,
                        case_desc,
                        contact,
                        status,
                        nxt,
                        
                      },
                      index
                    ) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={cli_id}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                          
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {cli_id}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={`${classes} text-wrap`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal  "
                             
                            >
                              <div className="text-wrap">

                              {case_desc}
                              </div>
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {contact}
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
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {nxt}
                            </Typography>
                          </td>
                          <td className={classes}>
                              <a href="https://drive.google.com/file/d/1ZmVZWfggRGhaWMAUBwymwfvSC7b-hwUT/view?usp=drive_link" 
                              class="inline-flex items-center font-small text-blue-600 dark:text-blue-500 hover:underline">
                            View Document
                            <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            </a>
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

export default AdvDashAuthClient;
