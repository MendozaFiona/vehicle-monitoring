import React, { useCallback } from "react";
import TypesVehicle from "../TypesVehicle";
import TypesFuel from "../TypesFuel";
import { useDispatch, useSelector } from "react-redux";
import { checkPlatenum } from "../../reducer/vehicle/vehicleSlice";
import { StyledError } from "./styled";

const VehicleForm = ({
  isLoading,
  handleSubmit,
  formData,
  setFormData,
  buttonLabel = "Submit",
  required = true,
  type = "form",
}) => {
  const dispatch = useDispatch();
  const { isLoading: isPending, platenumDoesExist } = useSelector(
    (state) => state.vehicles
  );

  let timer;

  const request = (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(checkPlatenum(value));
    }, 300);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceRequest = useCallback((value) => request(value), []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "platenum" && type === "form" && !isPending) {
      debounceRequest({ [name]: value });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <label htmlFor="platenum">
          Plate Number {platenumDoesExist && <StyledError>PLATE NO. ALREADY EXISTS</StyledError>}
          <input
            type="text"
            id="platenum"
            name="platenum"
            value={formData.platenum}
            placeholder="Plate #"
            required={required}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="brand">
          Brand
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            placeholder="Brand"
            required={required}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid">
        <label htmlFor="model">
          Model
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            placeholder="Model"
            required={required}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="year">
          Year
          <input
            type="number"
            min="1900"
            max="2099"
            step="1"
            id="year"
            name="year"
            value={formData.year}
            placeholder="Year"
            required={required}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid">
        <label htmlFor="vehicle_type">
          Vehicle Type
          <select
            value={formData.vehicle_type}
            id="vehicle_type"
            name="vehicle_type"
            required={required}
            onChange={handleChange}
          >
            <TypesVehicle />
          </select>
        </label>
        <label htmlFor="vehicle_capacity">
          Vehicle Capacity (kg)
          <input
            type="number"
            min={0.1}
            step="any"
            id="vehicle_capacity"
            name="vehicle_capacity"
            value={formData.vehicle_capacity}
            placeholder="Vehicle Capacity (kg)"
            required={required}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid">
        <label htmlFor="fuel_type">
          Fuel Type
          <select
            value={formData.fuel_type}
            id="fuel_type"
            name="fuel_type"
            required={required}
            onChange={handleChange}
          >
            <TypesFuel />
          </select>
        </label>

        <label htmlFor="fuel_tank">
          Fuel Tank (L)
          <input
            type="number"
            min={0.1}
            step="any"
            id="fuel_tank"
            name="fuel_tank"
            value={formData.fuel_tank}
            placeholder="Fuel Tank (L)"
            required={required}
            onChange={handleChange}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading || isPending || platenumDoesExist}
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default VehicleForm;
