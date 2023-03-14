import React from "react";
import { StyledForm } from "../styled";

const DispatchCompleteForm = ({
  isLoading = false,
  handleSubmit,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fuel_used">
          Fuel Used (L)
          <input
            type="number"
            min={0.1}
            id="fuel_used"
            name="fuel_used"
            value={formData.fuel_used}
            placeholder="Fuel Used (L)"
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="date_arrival">
          Date of Arrival
          <input
            type="date"
            id="date_arrival"
            name="date_arrival"
            value={formData.date_arrival}
            placeholder="Date of Arrival"
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor="time_arrival">
          Time of Arrival
          <input
            type="time"
            id="time_arrival"
            name="time_arrival"
            value={formData.time_arrival}
            placeholder="Time of Arrival"
            required
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </StyledForm>
  );
};

export default DispatchCompleteForm;
