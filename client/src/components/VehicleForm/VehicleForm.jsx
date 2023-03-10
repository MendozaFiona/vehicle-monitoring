import React from "react";
import TypesVehicle from "../TypesVehicle";
import TypesFuel from "../TypesFuel";

const VehicleForm = ({
  isLoading,
  handleSubmit,
  formData,
  setFormData,
  buttonLabel = "Submit",
}) => {
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <label htmlFor="platenum">
          Plate Number
          <input
            type="text"
            id="platenum"
            name="platenum"
            value={formData.platenum}
            placeholder="Plate #"
            required
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
            required
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
            required
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
            required
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
            required
            onChange={handleChange}
          >
            <TypesVehicle />
          </select>
        </label>
        <label htmlFor="vehicle_capacity">
          Vehicle Capacity (kg)
          <input
            type="number"
            step="any"
            id="vehicle_capacity"
            name="vehicle_capacity"
            value={formData.vehicle_capacity}
            placeholder="Vehicle Capacity (kg)"
            required
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
            required
            onChange={handleChange}
          >
            <TypesFuel />
          </select>
        </label>

        <label htmlFor="fuel_tank">
          Fuel Tank (L)
          <input
            type="number"
            step="any"
            id="fuel_tank"
            name="fuel_tank"
            value={formData.fuel_tank}
            placeholder="Fuel Tank (L)"
            required
            onChange={handleChange}
          />
        </label>
      </div>

      {/* <fieldset>
          <label htmlFor="status">
            Status
            <input
              className="fm-checkbox"
              type="checkbox"
              id="status"
              name="status"
              role="switch"
            />
          </label>
        </fieldset> */}

      <button type="submit" disabled={isLoading}>
        {buttonLabel}
      </button>
    </form>
  );
};

export default VehicleForm;
