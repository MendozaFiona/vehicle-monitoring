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
    dispatch(getVehicles());

    if (isError) {
      console.log(message);
    }

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
            <StyledAccordion key={vehicle._id}>
              <summary>
                {vehicle.platenum}
                <div className="grid">
                  <button>EDIT</button>
                  <button>DELETE</button>
                </div>
              </summary>
              <p>{vehicle.brand}</p>
              <p>{vehicle.model}</p>
              <p>{vehicle.year}</p>
              <p>{vehicle.vehicle_type}</p>
              <p>{vehicle.vehicle_capacity}</p>
              <p>{vehicle.fuel_type}</p>
              <p>{vehicle.fuel_tank}</p>
              {/* <p>{vehicle.status}</p> not added yet */}
            </StyledAccordion>
          ))
        : noVehicles}
    </>
  );
};

export default VehicleItem;
