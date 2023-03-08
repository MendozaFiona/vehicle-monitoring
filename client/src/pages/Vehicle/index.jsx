import React from "react";
import {
  StyledPageContent,
  StyledButton,
} from "../../components/ReusableComponents/styled";
import { StyledGrid, StyledNavigation } from "./styled";
import { useNavigate, Outlet } from "react-router-dom";

const Vehicle = () => {
  const navigate = useNavigate();
  return (
    <StyledPageContent>
      <StyledGrid className="grid">
        <StyledNavigation>
          <StyledButton onClick={() => navigate("list")}>
            Vehicle List
          </StyledButton>
          <StyledButton onClick={() => navigate("add")}>
            Add Vehicle
          </StyledButton>
        </StyledNavigation>
        <Outlet />
      </StyledGrid>
    </StyledPageContent>
  );
};

export default Vehicle;
