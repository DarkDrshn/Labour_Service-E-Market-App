import React from "react";
import { Button, Input } from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Searchbar = ({ value, changeInput }) => {
  return (
    <>
      <div className="relative flex 3xl:w-max">
              <Input
                type="search"
                label="Type here..."
                className=""
                value={value}
                onChange={changeInput}
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              <Button size="large" className="absolute right-1  rounded">
          Search
        </Button>
            </div>
    </>
  );
};

export default Searchbar;
