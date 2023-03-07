import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle } from "../../features/vehicle/vehicleSlice";
import { toast } from "react-toastify";
import {
  StyledCard,
  StyledCardHeading,
  StyledForm,
  StyledCardContent,
} from "../../components/ReusableStyles/styled";
import {
  vehicleTypeOptions,
  fuelTypeOptions,
  initialVehicleData,
} from "../../utils/data";

const VehicleAdd = () => {
  const [formData, setFormData] = useState(initialVehicleData);
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
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.vehicles
  );

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      ...formData,
    };

    await dispatch(addVehicle(userData));

    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Successfully Added Vehicle");
      setFormData(initialVehicleData);
    }
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
                {vehicleTypeOptions.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="vehicle_capacity">
              Vehicle Capacity (kg)
              <input
                type="number"
                step="any"
                id="vehicle_capacity"
                name="vehicle_capacity"
                value={vehicle_capacity}
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
                value={fuel_type}
                id="fuel_type"
                name="fuel_type"
                required
                onChange={handleChange}
              >
                {fuelTypeOptions.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="fuel_tank">
              Fuel Tank (L)
              <input
                type="number"
                step="any"
                id="fuel_tank"
                name="fuel_tank"
                value={fuel_tank}
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
            Submit
          </button>
        </StyledForm>
      </StyledCardContent>
    </StyledCard>
  );
};

export default VehicleAdd;
