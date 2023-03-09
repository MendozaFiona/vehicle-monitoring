import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle } from "../../features/vehicle/vehicleSlice";
import { toast } from "react-toastify";
import {
  StyledCard,
  StyledCardHeading,
  StyledForm,
  StyledCardContent,
} from "../../components/ReusableComponents/styled";
import { vehicleformData, initialVehicleData } from "../../utils/data";
import FormInput from "../../components/ReusableComponents/formInput";

const VehicleAdd = () => {
  const [formData, setFormData] = useState(initialVehicleData);

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.vehicles);

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

    const res = await dispatch(addVehicle(userData));

    if (!res.error) {
      toast.success("Successfully Added Vehicle");
      setFormData(initialVehicleData);
    } else {
      toast.error(res.payload);
    }
  };

  return (
    <StyledCard>
      <StyledCardHeading>Add Vehicle</StyledCardHeading>
      <StyledCardContent>
        <StyledForm onSubmit={handleSubmit}>
          {vehicleformData.map((pair, index) => (
            <div key={index} className="grid">
              {pair.map((item) => (
                <FormInput
                  key={item.name}
                  data={item}
                  value={formData[item.name]}
                  onChange={handleChange}
                />
              ))}
            </div>
          ))}
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
