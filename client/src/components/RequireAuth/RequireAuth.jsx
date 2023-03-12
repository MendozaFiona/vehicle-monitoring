import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useSelector((state) => state.user);
  const user = localStorage.getItem("user");

  if (!user || auth === null) {
    return <Navigate to="/" replace={true} />;
  }

  return children ? children : <Outlet />;
};

export default RequireAuth;
