import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles, reset } from "../../../features/vehicle/vehicleSlice";
import { StyledAccordion } from "./styled";

const VehicleItem = () => {
  const dispatch = useDispatch();
  const { vehicles, isLoading, isError, message } = useSelector(
    (state) => state.vehicles
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getVehicles);

    return () => {
      dispatch(reset);
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    // fgx modify
    return <div aria-busy="true"></div>;
  }

  const noVehicles = <div>This user has no vehicles added</div>;

  return (
    <>
      {vehicles?.length > 0
        ? vehicles.map((vehicle) => (
            <StyledAccordion key={vehicle.id}>
              <summary>{vehicle.name}</summary>
              <p>{vehicle.desc}</p>
            </StyledAccordion>
          ))
        : noVehicles}
    </>
  );
};

export default VehicleItem;
