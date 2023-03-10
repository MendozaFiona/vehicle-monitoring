import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getVehicleTypes } from "../../reducer/type/typeSlice";

const TypesVehicle = () => {
  const dispatch = useDispatch();
  const { vehicleTypes } = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getVehicleTypes());
  }, [dispatch]);

  return (
    <>
      <option value="">Select Vehicle Type</option>
      {vehicleTypes.map((option) => (
        <option key={option._id} value={option._id}>
          {option.name}
        </option>
      ))}
    </>
  );
};

export default TypesVehicle;
