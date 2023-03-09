import React, { useState } from "react";

import { StyledSearchFilter } from "./styled";
import FormInput from "../../../components/ReusableComponents/formInput";
import { vehicleformData, initialVehicleData } from "../../../utils/data";

const SearchFilter = () => {
  const [formData, setFormData] = useState(initialVehicleData);
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <StyledSearchFilter>
      {vehicleformData.map((pair, index) => (
        <div key={index} className="grid">
          {pair.map((item) => (
            <FormInput
              key={item.name}
              data={item}
              value={formData[item.name]}
              onChange={handleChange}
            />
          ))}
        </div>
      ))}
    </StyledSearchFilter>
  );
};

export default SearchFilter;
