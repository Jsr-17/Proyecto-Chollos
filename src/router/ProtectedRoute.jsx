import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ element }) => {
  const { usuarioSesion } = useSelector((state) => state.usuarios);

  if (!usuarioSesion) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
