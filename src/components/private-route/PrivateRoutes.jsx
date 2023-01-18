import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  return localStorage.getItem("auth") ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
