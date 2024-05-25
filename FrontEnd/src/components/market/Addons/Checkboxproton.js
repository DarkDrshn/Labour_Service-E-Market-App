import React from "react";
import { Checkbox } from "@material-tailwind/react";
const containerClasses = "w-full flex justify-between items-center";

const checkboxClasses = "h-4 w-4 text-black";

const labelClasses = "text-lg font-sans";

function CheckboxProton({ changeChecked_category, category }) {
  const { id,checked, label} = category;

  const handleChange = () => {
    console.log("Checkbox clicked for category:", label);
    changeChecked_category(id);
  };

  return (
    <div className={containerClasses}>
      <Checkbox
        color={checked ? "amber" : ""}
        checked={checked}
        onChange={handleChange}
        aria-label="checkbox with small size"
        id="ripple-on"
        label={label}
        ripple={true}
      />
    </div>
  );
}

export default CheckboxProton;
