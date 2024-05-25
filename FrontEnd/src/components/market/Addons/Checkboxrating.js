import React from "react";
import { Checkbox } from "@material-tailwind/react";

const containerClasses = "w-full flex justify-between items-center";

const checkboxClasses = "h-4 w-4 text-black";

const labelClasses = "text-lg font-sans";

function CheckboxRating({ changeCheckedRate, rating }) {
  const { checked, label, id } = rating;

  return (
    // <div >
      <Checkbox
        color="amber"
        checked={checked}
        onChange={() => changeCheckedRate(id)}
        aria-label="checkbox with small size"
        id="ripple-on"
        label={label}
        ripple={true}
      />
    // </div>
  );
}

export default CheckboxRating;
