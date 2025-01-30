import React from "react";
import { ContenedorComponent } from "./components/ContenedorComponent/ContenedorComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChollos } from "../../../store/chollosStore/chollosSlice";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const { chollos, loading } = useSelector((state) => state.chollos);
  useEffect(() => {
    dispatch(fetchChollos());
  }, [dispatch]);
  console.log(chollos);
  return (
    <div>
      <h1 className="text-center my-3 text-body-secondary">Bienvenido</h1>
      <h4 className="text-center my-3 text-body-secondary">
        Echale un vistazo a estos productos:
      </h4>
      <ContenedorComponent></ContenedorComponent>
    </div>
  );
};
