import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StyledHeader, { StyledNav } from "./styled";
import { reset, logout } from "../../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const { pathname } = location;

  const handleLogout = async () => {
    console.log("test");
    await dispatch(logout());
    dispatch(reset());
  };

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
              <details role="list" dir="rtl">
                <summary
                  className={`${pathname === "/settings" ? "active" : null}`}
                  aria-haspopup="listbox"
                  role="link"
                >
                  Profile
                </summary>
                <ul role="listbox">
                  <li>
                    <a href="/settings">Settings</a>
                  </li>
                  <li>
                    <a
                      href="/"
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
