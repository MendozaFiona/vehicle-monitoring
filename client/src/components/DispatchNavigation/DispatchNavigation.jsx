import React from "react";
import {
  StyledPageContent,
  StyledButton,
  StyledSideContent,
  StyledGrid,
  StyledNavigation,
} from "../styled";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const Dispatch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  return (
    <StyledGrid className="grid">
      <StyledSideContent>
        <StyledNavigation>
          <StyledButton
            className={`${pathname.includes("/list") ? "" : "active"}`}
            onClick={() => navigate("add")}
          >
            Add Dispatch
          </StyledButton>
          <StyledButton
            className={`fm-no-top ${
              pathname.includes("/list") ? "active" : ""
            }`}
            onClick={() => navigate("list")}
          >
            Dispatch List
          </StyledButton>
        </StyledNavigation>
      </StyledSideContent>
      <StyledPageContent>
        <Outlet />
      </StyledPageContent>
    </StyledGrid>
  );
};

export default Dispatch;
