import React from "react";
import {
   
    StyledCard,
    StyledCardHeading,
    StyledForm,
    StyledCardContent,
  } from "../../components/ReusableStyles/styled";

  
const VehicleAdd = () => {
  return (
    <StyledCard>
      <StyledCardHeading>Add Vehicle</StyledCardHeading>
      <StyledCardContent>
        <StyledForm>
          <div className="grid">
            <label htmlFor="platenum">
              Plate Number
              <input
                type="text"
                id="platenum"
                name="platenum"
                placeholder="Plate #"
                required
              />
            </label>

            <label htmlFor="brand">
              Brand
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                required
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
                placeholder="Model"
                required
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
                placeholder="Year"
                required
              />
            </label>
          </div>

          <div className="grid">
            <label htmlFor="vehicletype">
              Vehicle Type
              <select defaultValue="b" id="fruit" required>
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </label>
            <label htmlFor="vehiclecap">
              Vehicle Capacity
              <input
                type="text"
                id="vehiclecap"
                name="vehiclecap"
                placeholder="Vehicle Capacity"
                required
              />
            </label>
          </div>

          <div className="grid">
            <label htmlFor="fueltype">
              Fuel Type
              <select defaultValue="b" id="fruit" required>
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </label>

            <label htmlFor="fueltank">
              Fuel Tank
              <input
                type="text"
                id="fueltank"
                name="fueltank"
                placeholder="Fuel Tank"
                required
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
