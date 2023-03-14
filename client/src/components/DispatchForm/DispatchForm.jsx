import React from "react";
import { StyledButton, StyledInput } from "./styled";

const DispatchForm = ({
  isLoading = false,
  handleSubmit,
  formData,
  setFormData,
  setShow,
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
        <StyledInput className="grid">
          <label htmlFor="platenum">
            Plate Number
            <input
              type="text"
              id="platenum"
              name="platenum"
              value={formData.platenum}
              placeholder="Plate #"
              disabled
              required
              onChange={handleChange}
            />
          </label>
          <StyledButton
            type="button"
            onClick={() => {
              setShow(true);
            }}
          >
            select
          </StyledButton>
        </StyledInput>
        <label htmlFor="load_capacity">
          Load Capacity (kg)
          <input
            type="number"
            id="load_capacity"
            name="load_capacity"
            min={0.1}
            value={formData.load_capacity}
            placeholder="Load Capacity (kg)"
            required
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid">
        <label htmlFor="from_location">
          From
          <input
            type="text"
            id="from_location"
            name="from_location"
            value={formData.from_location}
            placeholder="From"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="to_location">
          To
          <input
            type="text"
            id="to_location"
            name="to_location"
            value={formData.to_location}
            placeholder="To"
            required
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid">
        <label htmlFor="date_departure">
          Date of Departure
          <input
            type="date"
            id="date_departure"
            name="date_departure"
            value={formData.date_departure}
            placeholder="Date of Departure"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="time_departure">
          Time of Departure
          <input
            type="time"
            id="time_departure"
            name="time_departure"
            value={formData.time_departure}
            placeholder="Time of Departure"
            required
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid">
        <label htmlFor="driver">
          Driver
          <input
            type="text"
            id="driver"
            name="driver"
            value={formData.driver}
            placeholder="Driver"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="palero">
          Palero
          <input
            type="text"
            id="palero"
            name="palero"
            value={formData.palero}
            placeholder="Palero"
            required
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
};

export default DispatchForm;
