import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVehicles, reset } from "../../reducer/vehicle/vehicleSlice";
import SearchFilter from "../SearchFilter";
import { StyledFilter } from "./styled";
import { StyledTable } from "../styled";
import Spinner from "../Spinner";
import NoDataDisplay from "../NoDataDisplay";

const DispatchSelect = ({ setFormData, setShow }) => {
  const { vehicles, isLoading } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicles("status=free"));

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

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
        <SearchFilter isDispatch={true} />
      </StyledFilter>

      {isLoading ? (
        <Spinner />
      ) : (
        <StyledTable>
          {vehicles?.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <td></td>
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
                {vehicles.map((vehicle) => (
                  <tr key={vehicle._id}>
                    <td>
                      <button
                        onClick={() =>
                          handleSelect(vehicle._id, vehicle.platenum)
                        }
                      >
                        select
                      </button>
                    </td>
                    <td>{vehicle.platenum}</td>
                    <td>{vehicle.brand}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.year}</td>
                    <td>{vehicle.vehicle_type_name}</td>
                    <td>{vehicle.vehicle_capacity} kg</td>
                    <td>{vehicle.fuel_type_name}</td>
                    <td>{vehicle.fuel_tank} L</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NoDataDisplay />
          )}
        </StyledTable>
      )}
    </>
  );
};

export default DispatchSelect;
