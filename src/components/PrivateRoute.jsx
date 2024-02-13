import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
