import React from "react";
import NoDataDisplay from "../NoDataDisplay";

const DispatchTable = ({
  filteredDispatches,
  formData,
  setFormData,
  setShow,
}) => {
  return (
    <>
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
    </>
  );
};

export default DispatchTable;
