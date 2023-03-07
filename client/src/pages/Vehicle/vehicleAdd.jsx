import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVehicle } from "../../features/vehicle/vehicleSlice";
import {
  StyledCard,
  StyledCardHeading,
  StyledForm,
  StyledCardContent,
} from "../../components/ReusableStyles/styled";

/* 
  platenum
  brand
  model
  year
  type_vehicle
  vehicle_capacity
  fuel_type
  fuel_tank
  status - not included
*/

const VehicleAdd = () => {
  const [formData, setFormData] = useState({
    platenum: "",
    brand: "",
    model: "",
    year: "",
    type_vehicle: "",
    vehicle_capacity: "",
    fuel_type: "",
    fuel_tank: "",
  });
  const {
    platenum,
    brand,
    model,
    year,
    type_vehicle,
    vehicle_capacity,
    fuel_type,
    fuel_tank,
  } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      ...formData,
    };

    dispatch(addVehicle(userData));
    setFormData({});
  };

  return (
    <StyledCard>
      <StyledCardHeading>Add Vehicle</StyledCardHeading>
      <StyledCardContent>
        <StyledForm onSubmit={handleSubmit}>
          <div className="grid">
            <label htmlFor="platenum">
              Plate Number
              <input
                type="text"
                id="platenum"
                name="platenum"
                value={platenum}
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
                value={brand}
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
                value={model}
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
                value={year}
                placeholder="Year"
                required
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="grid">
            <label htmlFor="type_vehicle">
              Vehicle Type
              <select
                value={type_vehicle}
                id="type_vehicle"
                name="type_vehicle"
                required
                onChange={handleChange}
              >
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </label>
            <label htmlFor="vehicle_capacity">
              Vehicle Capacity
              <input
                type="text"
                id="vehicle_capacity"
                name="vehicle_capacity"
                value={vehicle_capacity}
                placeholder="Vehicle Capacity"
                required
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="grid">
            <label htmlFor="fuel_type">
              Fuel Type
              <select
                value={fuel_type}
                id="fuel_type"
                name="fuel_type"
                required
                onChange={handleChange}
              >
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </label>

            <label htmlFor="fuel_tank">
              Fuel Tank
              <input
                type="text"
                id="fuel_tank"
                name="fuel_tank"
                value={fuel_tank}
                placeholder="Fuel Tank"
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

          <button type="submit">Submit</button>
        </StyledForm>
      </StyledCardContent>
    </StyledCard>
  );
};

export default VehicleAdd;
