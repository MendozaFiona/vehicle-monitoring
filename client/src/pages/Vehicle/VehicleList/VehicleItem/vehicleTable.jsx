import React from "react";

const VehicleTable = ({ vehicle }) => {
  return (
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
  );
};

export default VehicleTable;
