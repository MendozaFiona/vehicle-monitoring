import React, { useState } from "react";

import { StyledSearchFilter } from "./styled";
import VehicleForm from "../VehicleForm";
import { initialVehicleData } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../../reducer/vehicle/vehicleSlice";
import queryString from "query-string";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.vehicles);
  const [formData, setFormData] = useState(initialVehicleData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );
    const params = queryString.stringify(newData);
    dispatch(getVehicles(params));
  };

  return (
    <StyledSearchFilter className="fm-search-filter">
      <VehicleForm
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        buttonLabel="Go"
        required={false}
      />
    </StyledSearchFilter>
  );
};

export default SearchFilter;
