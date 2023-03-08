import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getVehicles,
  deleteVehicle,
  reset,
} from "../../../features/vehicle/vehicleSlice";
import { StyledAccordion } from "./styled";
import Popup from "../../../components/ReusableComponents/popup";

const VehicleItem = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const { vehicles, isLoading, isError, message } = useSelector(
    (state) => state.vehicles
  );

  useEffect(() => {
    dispatch(getVehicles());

    if (isError) {
      toast.error(message);
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    // fgx modify
    return <div aria-busy="true"></div>;
  }

  const handleDelete = (id) => {
    setShow(true);
    setSelectedId(id);
  };

  const handleRemove = async () => {
    const res = await dispatch(deleteVehicle(selectedId));
    if (!res.error) {
      toast.success("Successfully deleted");
    }
    setShow(false);
    setSelectedId("");
  };

  const noVehicles = <div>This user has no vehicles added</div>;

  return (
    <>
      {show && (
        <Popup
          textContent="Are you sure you wanna delete?"
          func={handleRemove}
          setShow={setShow}
        />
      )}
      {vehicles?.length > 0
        ? vehicles.map((vehicle) => (
            <StyledAccordion key={vehicle._id}>
              <summary>
                {vehicle.platenum}
                <div className="grid">
                  <button>EDIT</button>
                  <button
                    onClick={() => {
                      handleDelete(vehicle._id);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </summary>
              <div className="table-data">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Brand</th>
                      <th scope="col">Model</th>
                      <th scope="col">Year</th>
                      <th scope="col">Vehicle Type</th>
                      <th scope="col">Capacity</th>
                      <th scope="col">Fuel Type</th>
                      <th scope="col">Fuel Tank</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{vehicle.brand}</td>
                      <td>{vehicle.model}</td>
                      <td>{vehicle.year}</td>
                      <td>{vehicle.vehicle_type}</td>
                      <td>{vehicle.vehicle_capacity} kg</td>
                      <td>{vehicle.fuel_type}</td>
                      <td>{vehicle.fuel_tank} L</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <p>{vehicle.status}</p> not added yet */}
            </StyledAccordion>
          ))
        : noVehicles}
    </>
  );
};

export default VehicleItem;
