import React, { useState, useEffect } from "react";
import { StyledTable } from "../styled";
import { useSelector, useDispatch } from "react-redux";
import { getDispatches, reset } from "../../reducer/dispatch/dispatchSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { dispatchListFilter } from "../../utils/data";
import NoDataDisplay from "../NoDataDisplay";

const DispatchItems = ({ setShow, formData, setFormData }) => {
  const dispatch = useDispatch();
  const { dispatches, isError, isLoading, message } = useSelector(
    (state) => state.dispatch
  );
  const [filteredDispatches, setFilteredDispatches] = useState(dispatches);

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

  useEffect(() => {
    setFilteredDispatches(dispatches);
  }, [dispatches]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleFilter = (e) => {
    const filter = e.target.value;

    if (filter === "ALL") {
      setFilteredDispatches(dispatches);
    } else {
      setFilteredDispatches(
        dispatches.filter(
          (dispatch) => dispatch.status.toUpperCase() === filter
        )
      );
    }
  };

  return (
    <StyledTable>
      <select id="list_filter" name="list_filter" onChange={handleFilter}>
        {dispatchListFilter.map((filter) => (
          <option key={filter.id}>{filter.name}</option>
        ))}
      </select>
      {filteredDispatches?.length > 0 ? (
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
            {filteredDispatches.map((dispatch) => (
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
                <td>
                  {new Date(dispatch.datetime_departure).toLocaleDateString()}
                </td>
                <td>
                  {new Date(dispatch.datetime_departure).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "numeric",
                      minute: "numeric",
                    }
                  )}
                </td>
                <td>{dispatch.driver}</td>
                <td>{dispatch.palero}</td>
                <td>
                  {dispatch.fuel_used ? dispatch.fuel_used + " L" : "N/A"}
                </td>
                <td>
                  {dispatch.datetime_arrival
                    ? new Date(dispatch.datetime_arrival).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  {dispatch.datetime_arrival
                    ? new Date(dispatch.datetime_arrival).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "numeric",
                          minute: "numeric",
                        }
                      )
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NoDataDisplay />
      )}
    </StyledTable>
  );
};

export default DispatchItems;
