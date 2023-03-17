import React, { useState } from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledInputIcon,
  StyledCardHeading,
} from "../../components/styled";
import { StyledSearch, StyledSearchButton, StyledSearchGroup } from "./styled";
import { FaSearch } from "react-icons/fa";
import VehicleItem from "../../components/VehicleItem";
import SearchFilter from "../../components/SearchFilter";
import { useDispatch } from "react-redux";
import { getVehicles } from "../../reducer/vehicle/vehicleSlice";
import queryString from "query-string";

const VehicleList = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [plateNum, setPlateNum] = useState("");

  const handleSubmit = async () => {
    const params =
      plateNum !== "" ? queryString.stringify({ platenum: plateNum }) : "page=1";
    dispatch(getVehicles(params));
  };

  return (
    <>
      <StyledSearchGroup>
        <details
          onToggle={() => {
            setIsOpen(!isOpen);
          }}
        >
          <summary>
            <StyledInputIcon>
              <StyledSearch className="grid">
                <StyledSearchButton onClick={handleSubmit} disabled={isOpen}>
                  SEARCH
                </StyledSearchButton>
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Plate Number"
                  onChange={(e) => {
                    setPlateNum(e.target.value);
                  }}
                  disabled={isOpen}
                />
              </StyledSearch>
              <FaSearch className="icon" />
            </StyledInputIcon>
            <div className="fm-filters">Search Filters</div>
          </summary>
          <SearchFilter />
        </details>
      </StyledSearchGroup>
      <StyledCard>
        <StyledCardHeading>Vehicle List</StyledCardHeading>
        <StyledCardContent>
          <VehicleItem />
        </StyledCardContent>
      </StyledCard>
    </>
  );
};

export default VehicleList;
