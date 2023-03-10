import React from "react";
import { StyledPageContent, StyledButton, StyledSideContent } from "../styled";
import { StyledGrid, StyledNavigation } from "./styled";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const Vehicle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  return (
    <StyledGrid className="grid">
      <StyledSideContent>
        <StyledNavigation>
          <StyledButton
            className={`${pathname.includes("/add") ? "" : "active"}`}
            onClick={() => navigate("list")}
          >
            Vehicle List
          </StyledButton>
          <StyledButton
            className={`fm-no-top ${pathname.includes("/add") ? "active" : ""}`}
            onClick={() => navigate("add")}
          >
            Add Vehicle
          </StyledButton>
        </StyledNavigation>
      </StyledSideContent>
      <StyledPageContent>
        <Outlet />
      </StyledPageContent>
    </StyledGrid>
  );
};

export default Vehicle;
