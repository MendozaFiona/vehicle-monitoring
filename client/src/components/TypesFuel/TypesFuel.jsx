import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFuelTypes } from "../../reducer/type/typeSlice";

const TypesFuel = () => {
  const dispatch = useDispatch();
  const { fuelTypes } = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getFuelTypes());
  }, [dispatch]);

  return (
    <>
      <option value="">Select Fuel Type</option>
      {fuelTypes.map((option) => (
        <option key={option._id} value={option._id}>
          {option.name}
        </option>
      ))}
    </>
  );
};

export default TypesFuel;
