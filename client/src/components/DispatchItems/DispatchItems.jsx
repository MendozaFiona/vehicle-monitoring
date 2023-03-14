import React, { useEffect } from "react";
import { StyledTable } from "../styled";
import { useSelector, useDispatch } from "react-redux";
import { getDispatches, reset } from "../../reducer/dispatch/dispatchSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const DispatchItems = ({ setShow, formData, setFormData }) => {
  const dispatch = useDispatch();
  const { dispatches, isError, isLoading, message } = useSelector(
    (state) => state.dispatch
  );

  useEffect(() => {
    dispatch(getDispatches());

    if (isError) {
      toast.error(message);
    }

    return () => {
      console.log("un/mount dispatch list");
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th></th>
            <th scope="col">Status</th>
            <th scope="col">Plate #</th>
            <th scope="col">Load Capacity</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Date (Departure)</th>
            <th scope="col">Time (Departure)</th>
            <th scope="col">Driver</th>
            <th scope="col">Palero</th>
            <th scope="col">Fuel Used</th>
            <th scope="col">Date (Arrival)</th>
            <th scope="col">Time (Arrival)</th>
          </tr>
        </thead>
        <tbody>
          {dispatches?.length > 0 &&
            dispatches.map((dispatch) => (
              <tr key={dispatch._id}>
                <th>
                  {dispatch.status === "ongoing" ? (
                    <button
                      onClick={() => {
                        setFormData({ ...formData, id: dispatch._id });
                        setShow(true);
                      }}
                    >
                      complete
                    </button>
                  ) : null}
                </th>
                <td>{dispatch.status}</td>
                <td>{dispatch.platenum}</td>
                <td>{dispatch.load_capacity} kg</td>
                <td>{dispatch.from_location}</td>
                <td>{dispatch.to_location}</td>
                <td>{new Date(dispatch.date_departure).toDateString()}</td>
                <td>
                  {new Date(
                    "1970-01-01T" + dispatch.time_departure + "Z"
                  ).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </td>
                <td>{dispatch.driver}</td>
                <td>{dispatch.palero}</td>
                <td>
                  {dispatch.fuel_used ? dispatch.fuel_used + " L" : "N/A"}
                </td>
                <td>
                  {dispatch.date_arrival
                    ? new Date(dispatch.date_arrival).toDateString()
                    : "N/A"}
                </td>
                <td>
                  {dispatch.time_arrival
                    ? new Date(
                        "1970-01-01T" + dispatch.time_arrival + "Z"
                      ).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                      })
                    : "N/A"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default DispatchItems;
