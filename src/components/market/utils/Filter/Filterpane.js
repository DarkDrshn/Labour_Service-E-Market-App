import React from "react";
import { Typography } from "@material-tailwind/react";

import CheckboxProton from "../../Addons/Checkboxproton";
import Checkboxlsp from "../../Addons/Checkboxlsp";
import SliderProton from "../../Addons/Sliderproton";

import "./filterpane.css";
import CheckboxRating from "../../Addons/Checkboxrating";


const FilterPanel = ({
  
  selectedPrice,
  skill,
  changeCheckedLaw_category,
  changePrice,
  lsp_types,
  changeCheckedLsp_types,
  ratings,
  changeCheckedRate,
}) => (
  <div>
    <div className="input-group">
      {/* <p className="label">Labour Service Providers</p> */}
      <Typography variant="h6">Labour Service Providers</Typography>
      {lsp_types.map((lsp_types) => (
        <Checkboxlsp key={lsp_types.id} lsp_types={lsp_types} changeCheckedLsp_types={changeCheckedLsp_types} />
      ))}
    </div>
    <div className="input-group">
      {/* <p className="label">Cuisine</p> */}
      <Typography variant="h6">Skills</Typography>
      {skill.map((skill) => (
        <CheckboxProton
          key={skill.id}
          category={skill}
          changeCheckedLaw_category={changeCheckedLaw_category}
        />
      ))}
    </div>

    
    <div className="input-group">
      <p className="label-range">Years o Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className="input-group">
    <Typography variant="h6">ratings</Typography>
      {ratings.map((rating) => (
        <CheckboxRating key={rating.id} rating={rating} changeCheckedRate={changeCheckedRate} />
      ))}
    </div>
  </div>
);

export default FilterPanel;