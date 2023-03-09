import React, { useState } from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledInputIcon,
  StyledCardHeading,
} from "../../../components/ReusableComponents/styled";
import { StyledSearch, StyledSearchButton, StyledSearchGroup } from "./styled";
import { FaSearch } from "react-icons/fa";
import VehicleItem from "./VehicleItem";
import SearchFilter from "./searchFilter";

const VehicleList = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <StyledSearchGroup>
        <details
          onToggle={() => {
            setIsOpen(!isOpen);
          }}
        >
          <summary>
            <StyledInputIcon>
              <StyledSearch className="grid">
                <StyledSearchButton>SEARCH</StyledSearchButton>
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search"
                  required
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
    </div>
  );
};

export default VehicleList;
