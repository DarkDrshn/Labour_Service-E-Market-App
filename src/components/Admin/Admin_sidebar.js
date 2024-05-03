import React from "react";
import {
    Card,
    List,
    ListItem,
    ListItemPrefix
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
import { Link } from "react-router-dom";

  import { Badge} from "@material-tailwind/react";
  import {CheckIcon} from "@heroicons/react/24/outline";
  import AdminGraph from "./Admin_graph";


function AdminSideBar(){
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    }
    return (
        <>
          <Card className="h-screen md:h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 sidebar">
            <div className="text-center">
              <Badge
                content={<CheckIcon className="h-4 w-4 text-white" strokeWidth={2.5} />}
                className="bg-gradient-to-tr from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
              >
                <img
                  src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg"
                  className="mx-auto mb-4 w-32 rounded-full"
                  alt="Avatar"
                />
              </Badge>
              <h5 className="mb-4 text-xl font-medium leading-tight">Admin</h5>
            </div>
            <List>
            <Link to="/admin">
                <ListItem>
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </Link>
              <Link to="/admin/graph">
                <ListItem>
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Graph
                </ListItem>
              </Link>
              <Link to="/admin/report">
                <ListItem>
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Reported Users
                </ListItem>
              </Link>
              <Link to="/admin/review">
                <ListItem>
                  <ListItemPrefix>
                    <StarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Reviews
                </ListItem>
              </Link>
              {/* <Link to="/admin/totalCount">
                <ListItem>
                  <ListItemPrefix>
                    <UserGroupIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  User Count
                </ListItem>
              </Link> */}
            </List>
          </Card>
        </>
    );
    
}
export  {AdminSideBar};
