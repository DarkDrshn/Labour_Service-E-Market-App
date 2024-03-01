//based on client, show chats

import React from "react";
import Sidebar from "../Sidebar";
import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Avatar,
  Card,
  Typography,
  IconButton,
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

function AdvDashAuthCliRating() {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 pl-2">
          <Sidebar />
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
          <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">144</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Assignments
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">42.9K</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Revenue
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">48</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Reviews
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">4.5⭐</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Rating
          </p>
        </div>
      </div>
    </div>
          <div
            className="lg:h-3/5 p-5 overflow-auto"
            style={{ backgroundColor: "#fbc642" }}
          >
            <Card className="flex">
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src="public\images\lawyers_prof\1.png" //client image
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Shreyas Talvalkar
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                     Driver Contract
                    </Typography>
                  </div>
                  <ListItemSuffix>
                    <IconButton variant="text" color="blue-gray">
                      <TrashIcon />
                    </IconButton>
                  </ListItemSuffix>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="alexander"
                      src="D:\Projects\example\LS2T\public\images\lawyers_prof\fff.png"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Digambar Shankar Patil
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Engine Replacement
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Minakshi Inamdar
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Driver Contract
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Shirin Ghatge
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Engine Replacement
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Sainath Dedgavkar
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Engine Replacement
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Shreyas Gokhale
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Driver Contract
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Surekha Bhate
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Driver Contract
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Prashant Kale
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Driver Contract
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Rinku Rajguru
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Engine Replacement
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Nagraj Manjule
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Driver Contract
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Arian Arora
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Driver Contract
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Anirudh Shukla
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      UI/UX Designer @ Material Tailwind
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Vipul Sutar
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Engine Replacement
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="/img/face-3.jpg"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Darshan
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Driver Contract
                    </Typography>
                  </div>
                </ListItem>
              </List>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvDashAuthCliRating;
