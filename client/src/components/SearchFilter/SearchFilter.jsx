import React, { useState } from "react";

import { StyledSearchFilter } from "./styled";
import VehicleForm from "../VehicleForm";
import { initialVehicleData } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../../reducer/vehicle/vehicleSlice";
import queryString from "query-string";

const SearchFilter = ({ isDispatch = false }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.vehicles);
  const [formData, setFormData] = useState(initialVehicleData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDispatch) {
      formData["status"] = "free";
    }
    const newData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );
    const params = queryString.stringify(newData);
    dispatch(getVehicles(params));
  };

  const handleReset = () => {
    if (formData !== initialVehicleData) {
      dispatch(getVehicles("page=1"));
      setFormData(initialVehicleData);
    }
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
        type="search"
      />
      <button className="fm-reset" onClick={handleReset}>
        Reset
      </button>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
