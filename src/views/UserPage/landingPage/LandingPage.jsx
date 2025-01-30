import React from "react";
import { ContenedorComponent } from "./components/ContenedorComponent/ContenedorComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerChollos } from "../../../store/chollosStore/chollosSlice";
import {
  obtenerTodosUsuarios,
  obtenerUsuarioId,
  crearUsuario,
  eliminarUsuario,
  seleccionUsuarioSi,
  modificarUsuario,
} from "../../../store/usuarioStore/usuariosSlice";

export const LandingPage = () => {
  //esta funcion es la encargada de realizar la carga de los datos de nuestras solicitudes
  const dispatch = useDispatch();
  //esta funcion se encarga de seleccionar del proveedor del contexto el dato  que vamos a utilizar
  const { usuarios, loading, usuario } = useSelector((state) => state.usuarios);

  const user = {
    id: 7,
    edad: "25",
    nombre: "Juanitoooooooooo",
    email: "juanperez@example.com",
    usuario: "juan123",
    pass: "secreta123",
  };
  useEffect(() => {
    dispatch(modificarUsuario(user));
  }, [dispatch]);

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
