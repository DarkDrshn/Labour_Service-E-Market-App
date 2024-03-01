import React from "react";
import { Checkbox } from "@material-tailwind/react";
const containerClasses = "w-full flex justify-between items-center";

const checkboxClasses = "h-4 w-4 text-black";

const labelClasses = "text-lg font-sans";

function CheckboxProton({ changeCheckedLaw_category, category }) {
  const { checked, label, id } = category;

  return (
    <div className={containerClasses}>
      <Checkbox
        color="amber"
        checked={checked}
        onChange={() => changeCheckedLaw_category(id)}
        aria-label="checkbox with small size"
        id="ripple-on"
        label={label}
        ripple={true}
      />
    </div>
  );
}

export default CheckboxProton;
