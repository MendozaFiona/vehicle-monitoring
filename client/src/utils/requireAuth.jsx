import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useSelector((state) => state);
  const user = localStorage.getItem("user");

  if (!user || auth.user === null) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default RequireAuth;
