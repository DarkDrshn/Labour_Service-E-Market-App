import React from 'react';

function ToggleButton({ label, isSelected, onClick }) {
  return (
    <button
      className={`${
        isSelected
          ? 'bg-black text-white border-black'
          : 'bg-gray-200 text-gray-700 border'
      } rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function ToggleButtonGroup({ options, selectedValue, onValueChange }) {
  return (
    <div className="flex space-x-4">
      {options.map(({ label, id, value }) => (
        <ToggleButton
          key={id}
          value = {value}
          label={label}
          isSelected={selectedValue === value}
          onClick={() => onValueChange(selectedValue)}
        />
      ))}
    </div>
  );
}

export default ToggleButtonGroup;
