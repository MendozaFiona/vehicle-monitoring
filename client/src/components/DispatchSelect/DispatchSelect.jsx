import React from "react";
import { useSelector } from "react-redux";
import SearchFilter from "../SearchFilter";
import { StyledFilter, StyledTable } from "./styled";

const DispatchSelect = ({ setFormData, setShow }) => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const handleSelect = (id, platenum) => {
    setFormData((prevState) => ({
      ...prevState,
      id,
      platenum,
    }));
    setShow(false);
  };
  return (
    <>
      <StyledFilter>
        <SearchFilter />
      </StyledFilter>

      <StyledTable>
        <table>
          <thead>
            <tr>
              <th scope="col">Plate #</th>
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
            {vehicles?.length > 0 &&
              vehicles.map((vehicle) => (
                <tr key={vehicle._id}>
                  <td>{vehicle.platenum}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.vehicle_type_name}</td>
                  <td>{vehicle.vehicle_capacity} kg</td>
                  <td>{vehicle.fuel_type_name}</td>
                  <td>{vehicle.fuel_tank} L</td>
                  <td className="no-border">
                    <button
                      onClick={() =>
                        handleSelect(vehicle._id, vehicle.platenum)
                      }
                    >
                      select
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </StyledTable>
    </>
  );
};

export default DispatchSelect;
