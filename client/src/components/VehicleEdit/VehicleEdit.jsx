import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateVehicle,
  getVehicles,
} from "../../reducer/vehicle/vehicleSlice";
import { toast } from "react-toastify";
import { StyledForm } from "../styled";
import VehicleForm from "../VehicleForm";

const VehicleEdit = ({ data, setShow }) => {
  const [formData, setFormData] = useState(data);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.vehicles);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      ...formData,
    };

    const res = await dispatch(updateVehicle(userData));

    if (!res.error) {
      setShow(false);
      toast.success("Successfully Updated Vehicle");
      dispatch(getVehicles("page=1"));
    }
  };

  return (
    <StyledForm>
      <VehicleForm
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        buttonLabel="Update"
      />
    </StyledForm>
  );
};

export default VehicleEdit;
