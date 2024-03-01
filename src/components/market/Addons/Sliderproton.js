import React from 'react';
import { Slider } from '@material-tailwind/react';

function SliderProton({ value, changeExperience }) {
  const minExperience = 0;
  const maxExperience = 20;
  const step = 1;
  const marks = [];

  for (let i = minExperience; i <= maxExperience; i += step) {
    marks.push(i);
  }

  return (
    <div className="w-full">
      <Slider
        min={minExperience}
        max={maxExperience}
        value={value}
        onChange={changeExperience}
        color="gray"
        marks={marks}
        trackClassNames="bg-gray-400 h-2"
        railClassNames="bg-gray-300 h-2"
        thumbClassNames="bg-black w-6 h-6"
        markClassNames="absolute -mb-8 text-sm text-gray-500"
        markActiveClassNames="font-bold"
      />
    </div>
  );
}

export default SliderProton;
