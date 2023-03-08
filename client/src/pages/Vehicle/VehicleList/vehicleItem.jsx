import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getVehicles,
  deleteVehicle,
  reset,
} from "../../../features/vehicle/vehicleSlice";
import VehicleEdit from "./vehicleEdit";
import { StyledAccordion } from "./styled";
import Popup from "../../../components/ReusableComponents/popup";

const VehicleItem = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
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

  const handlePopup = ({ id, data, method }) => {
    if (method === "edit") {
      const { createdAt, updatedAt, user, __v, ...newData } = data;
      setPopupContent(
        <Popup
          content={<VehicleEdit data={newData} setShow={setShowPopup} />}
          type="form"
          setShow={setShowPopup}
        />
      );
    } else if (method === "delete") {
      setPopupContent(
        <Popup
          content="Delete vehicle?"
          type="confirm"
          func={handleDelete}
          setShow={setShowPopup}
        />
      );
    }
    setShowPopup(true);
    setSelectedId(id);
  };

  const handleDelete = async () => {
    const res = await dispatch(deleteVehicle(selectedId));
    if (!res.error) {
      toast.success("Successfully deleted");
    }
    setShowPopup(false);
    setSelectedId("");
  };

  const noVehicles = <div>This user has no vehicles added</div>;

  return (
    <>
      {showPopup && popupContent}
      {vehicles?.length > 0
        ? vehicles.map((vehicle) => (
            <StyledAccordion key={vehicle._id}>
              <summary>
                {vehicle.platenum}
                <div className="grid">
                  <button
                    onClick={() => {
                      handlePopup({
                        id: vehicle._id,
                        data: vehicle,
                        method: "edit",
                      });
                    }}
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => {
                      handlePopup({ id: vehicle._id, method: "delete" });
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </summary>
              <div className="fm-table-data">
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
