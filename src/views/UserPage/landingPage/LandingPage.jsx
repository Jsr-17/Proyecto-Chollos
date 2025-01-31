import React from "react";
import { ContenedorComponent } from "./components/ContenedorComponent/ContenedorComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOneProcedimiento,
  selectProcedimientosTotales,
  devolution,
  compraDeUsuario,
} from "../../../store/Usuario_ChollosStore/thunk";

export const LandingPage = () => {
  //esta funcion es la encargada de realizar la carga de los datos de nuestras solicitudes
  //const dispatch = useDispatch();
  //esta funcion se encarga de seleccionar del proveedor del contexto el dato  que vamos a utilizar
  //const { listData, data, loading } = useSelector((state) => state.user_chollo);

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
