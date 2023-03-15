import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle, reset } from "../../reducer/vehicle/vehicleSlice";
import { toast } from "react-toastify";
import {
  StyledCard,
  StyledCardHeading,
  StyledCardContent,
  StyledForm,
} from "../../components/styled";
import { initialVehicleData } from "../../utils/data";
import VehicleForm from "../../components/VehicleForm";

const VehicleAdd = () => {
  const [formData, setFormData] = useState(initialVehicleData);

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.vehicles);

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

    dispatch(reset());
  };

  return (
    <StyledCard>
      <StyledCardHeading>Add Vehicle</StyledCardHeading>
      <StyledCardContent>
        <StyledForm>
          <VehicleForm
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
          />
        </StyledForm>
      </StyledCardContent>
    </StyledCard>
  );
};

export default VehicleAdd;
