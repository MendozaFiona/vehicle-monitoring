import React from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledInputIcon,
  StyledCardHeading,
} from "../../../components/ReusableStyles/styled";
import { StyledSearch, StyledSearchButton } from "../styled";
import { FaSearch } from "react-icons/fa";
import VehicleItem from "./vehicleItem";

const VehicleList = () => {
  return (
    <div>
      <StyledInputIcon>
        <StyledSearch className="grid">
          <StyledSearchButton>SEARCH</StyledSearchButton>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            required
          />
        </StyledSearch>
        <FaSearch className="icon" />
      </StyledInputIcon>
      <StyledCard>
        <StyledCardHeading>Vehicle List</StyledCardHeading>
        <StyledCardContent>
          <VehicleItem />
        </StyledCardContent>
      </StyledCard>
    </div>
  );
};

export default VehicleList;
