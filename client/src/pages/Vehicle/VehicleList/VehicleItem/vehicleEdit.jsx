import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateVehicle,
  getVehicles,
} from "../../../../features/vehicle/vehicleSlice";
import { toast } from "react-toastify";
import { StyledForm } from "../../../../components/ReusableComponents/styled";
import { vehicleformData } from "../../../../utils/data";
import FormInput from "../../../../components/ReusableComponents/formInput";

const VehicleEdit = ({ data, setShow }) => {
  const [formData, setFormData] = useState(data);
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

    await dispatch(updateVehicle(userData));

    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      setShow(false);
      toast.success("Successfully Updated Vehicle");
      dispatch(getVehicles());
    }
  };

  return (
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
      <button type="submit" disabled={isLoading}>
        Update
      </button>
    </StyledForm>
  );
};

export default VehicleEdit;
