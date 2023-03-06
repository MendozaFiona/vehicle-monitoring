import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import StyledHeader, { StyledNav } from "./styled";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const { user } = useSelector((state) => state.user);

  return (
    <StyledHeader>
      <StyledNav>
        <ul>
          <li>
            <strong>VEHICLE MONITORING</strong>
          </li>
        </ul>
        {user && (
          <ul>
            <li>
              <a
                className={`${pathname.includes("/vehicle") ? "active" : null}`}
                href="/vehicle"
              >
                Vehicle
              </a>
            </li>
            <li>
              <a
                className={`${pathname === "/dispatch" ? "active" : null}`}
                href="/dispatch"
              >
                Dispatch
              </a>
            </li>
            <li>
              <a
                className={`${pathname === "/settings" ? "active" : null}`}
                href="/settings"
              >
                Settings
              </a>
            </li>
          </ul>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
