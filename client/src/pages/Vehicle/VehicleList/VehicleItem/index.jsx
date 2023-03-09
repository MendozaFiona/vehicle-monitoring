import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getVehicles,
  deleteVehicle,
  reset,
} from "../../../../features/vehicle/vehicleSlice";
import VehicleEdit from "./vehicleEdit";
import VehicleTable from "./vehicleTable";
import { StyledAccordion } from "./styled";
import Popup from "../../../../components/ReusableComponents/popup";

const VehicleItem = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const { vehicles, isLoading, isError, message } = useSelector(
    (state) => state.vehicles
  );

  useEffect(() => {
    dispatch(getVehicles());

    if (isError) {
      toast.error(message);
    }

    return () => {
      console.log("un/mount vehicle list");
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    // fgx modify
    return <div aria-busy="true"></div>;
  }

  const handlePopup = ({ data, method }) => {
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
          func={() => {
            handleDelete(data._id);
          }}
          setShow={setShowPopup}
        />
      );
    }
    setShowPopup(true);
  };

  const handleDelete = async (selectedId) => {
    const res = await dispatch(deleteVehicle(selectedId));
    if (!res.error) {
      toast.success("Successfully deleted");
    }
    setShowPopup(false);
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
                        data: vehicle,
                        method: "edit",
                      });
                    }}
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => {
                      handlePopup({ data: vehicle, method: "delete" });
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </summary>
              <VehicleTable vehicle={vehicle} />

              {/* <p>{vehicle.status}</p> not added yet */}
            </StyledAccordion>
          ))
        : noVehicles}
    </>
  );
};

export default VehicleItem;
