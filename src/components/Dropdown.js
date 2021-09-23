import React, { useState } from "react";
import Select from "react-select";
import usePlayers from "../contexts/playersContext";

const options = [
  { value: null, label: "none" },
  { value: "name", label: "Name" },
  { value: "skills", label: "Skills" },
  { value: "nationality", label: "Nationality" },
];

const Dropdown = () => {
  const { dispatch, sortBy } = usePlayers();
  const [selectedOption, setSlectedOptions] = useState(options[0]);
  const handleChange = (selectedOption) => {
    setSlectedOptions(selectedOption);
    dispatch({ type: "SORT_BY", payload: selectedOption.value });
  };
  return (
    <div className="sm:w-full lg:w-4/6">
      <Select
        className="text-black"
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
