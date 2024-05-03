import React from "react";
import { Typography } from "@material-tailwind/react";
import CheckboxProton from "../../Addons/Checkboxproton";
import Checkboxlsp from "../../Addons/Checkboxlsp";
import SliderProton from "../../Addons/Sliderproton";
import "./filterpane.css";
import CheckboxRating from "../../Addons/Checkboxrating";

const FilterPanel = ({
  selectedPrice,
  marketplaceData,
  changePrice,
  lsp_types,
  changeCheckedLsp_types,
  ratings,
  changeCheckedRate,
  changeChecked_category,
  categories
}) => {
  // Extract unique categories from marketplaceData

  return (
    <div>
      {/* <div className="input-group">
        <Typography variant="h6">Labour Service Providers</Typography>
        {lsp_types.map((lsp_type) => (
          <Checkboxlsp
            key={lsp_type.id}
            lsp_types={lsp_type}
            changeCheckedLsp_types={changeCheckedLsp_types}
          />
        ))}
      </div> */}
      <div className="input-group">
        <Typography variant="h6">Skills</Typography>
       { console.log("Categories:", categories)}
        {categories.map((category,index) => (
          <CheckboxProton
            key={index}
            category={{ id:  index + 1,checked: false, label: category }}
            changeChecked_category={changeChecked_category} 
          />
        ))}
      </div>

      <div className="input-group">
        <p className="label-range">Years of Experience</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className="input-group">
        <Typography variant="h6">Ratings</Typography>
        {ratings.map((rating) => (
          <CheckboxRating
            key={rating.id}
            rating={rating}
            changeCheckedRate={changeCheckedRate}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
