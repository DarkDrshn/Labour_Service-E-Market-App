import React from "react";
import { Checkbox } from "@material-tailwind/react";

const containerClasses = "w-full flex justify-between items-center";

const checkboxClasses = "h-4 w-4 text-black";

const labelClasses = "text-lg font-sans";

function Checkboxlsp({ changeCheckedLsp_types, lsp_types }) {
  const { checked, label, id } = lsp_types;

  return (
    <div className={containerClasses}>
      <Checkbox
        color="amber"
        checked={checked}
        onChange={() => changeCheckedLsp_types(id)}
        aria-label="checkbox with small size"
        id="ripple-on"
        label={label}
        ripple={true}
      />
    </div>
  );
}

export default Checkboxlsp;
