import React, { useState } from "react";
import { StyledDispatchSearch } from "./styled";
import { initialDispatchFilterData } from "../../utils/data";
import { useDispatch } from "react-redux";
import { getDispatches } from "../../reducer/dispatch/dispatchSlice";
import queryString from "query-string";

const DispatchSearch = () => {
  const [formData, setFormData] = useState(initialDispatchFilterData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let dependent,
      depVal,
      depExists = false;

    if (name === "date_departure_from") {
      dependent = "time_departure_from";
      depVal = value === "" ? "" : "00:00";
      depExists = true;
    }

    if (name === "date_departure_to") {
      dependent = "time_departure_to";
      depVal = value === "" ? "" : "23:59";
      depExists = true;
    }

    if (depExists) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        [dependent]: depVal,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleReset = () => {
    if (formData !== initialDispatchFilterData) {
      dispatch(getDispatches("page=1"));
      setFormData(initialDispatchFilterData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData !== initialDispatchFilterData) {
      const newData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );
      const params = queryString.stringify(newData);
      dispatch(getDispatches(params));
    }
  };

  return (
    <StyledDispatchSearch>
      <form onSubmit={handleSubmit} className="grid">
        <div>
          Departure From
          <div className="grid">
            <input
              type="date"
              id="date_departure_from"
              name="date_departure_from"
              value={formData.date_departure_from}
              onChange={handleChange}
            />

            <input
              type="time"
              id="time_departure_from"
              name="time_departure_from"
              value={formData.time_departure_from}
              disabled={formData.date_departure_from === ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          Departure To
          <div className="grid">
            <input
              type="date"
              id="date_departure_to"
              name="date_departure_to"
              value={formData.date_departure_to}
              onChange={handleChange}
            />

            <input
              type="time"
              id="time_departure_to"
              name="time_departure_to"
              value={formData.time_departure_to}
              disabled={formData.date_departure_to === ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button onClick={handleReset} type="button" disabled={false}>
            Reset
          </button>
          <button
            type="submit"
            disabled={formData === initialDispatchFilterData}
          >
            Go
          </button>
        </div>
      </form>
    </StyledDispatchSearch>
  );
};

export default DispatchSearch;
