import React, { useState } from "react";

import { StyledSearchFilter, StyledGoButton } from "./styled";
import FormInput from "../../../components/ReusableComponents/formInput";
import { vehicleformData, initialVehicleData } from "../../../utils/data";
import { paramsBuilder } from "../../../utils/functions";
import { useDispatch } from "react-redux";
import { getVehicles } from "../../../features/vehicle/vehicleSlice";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialVehicleData);
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = paramsBuilder(formData);
    dispatch(getVehicles(params));
  };

  return (
    <StyledSearchFilter>
      <form onSubmit={handleSubmit}>
        {vehicleformData.map((pair, index) => (
          <div key={index} className="grid">
            {pair.map((item) => (
              <FormInput
                key={item.name}
                data={item}
                value={formData[item.name]}
                onChange={handleChange}
                required={false}
              />
            ))}
          </div>
        ))}
        <StyledGoButton type="submit">Go</StyledGoButton>
      </form>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
