import React from "react";
import { ContenedorComponent } from "./components/ContenedorComponent/ContenedorComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerChollos } from "../../../store/chollosStore/thunk";
import { selectOneProcedimiento } from "../../../store/Usuario_ChollosStore/thunk";
import {
  obtenerUsuarioId,
  sesionUsuario,
} from "../../../store/usuarioStore/thunk";

export const LandingPage = () => {
  //esta funcion es la encargada de realizar la carga de los datos de nuestras solicitudes
  const dispatch = useDispatch();
  //esta funcion se encarga de seleccionar del proveedor del contexto el dato  que vamos a utilizar
  const { chollos } = useSelector((state) => state.chollos);
  const { usuarioSesion, usuario, loading } = useSelector(
    (state) => state.usuarios
  );

  useEffect(() => {
    dispatch(obtenerChollos());

    if (!usuarioSesion) {
      dispatch(sesionUsuario(localStorage.getItem("usuario")));
      console.log(localStorage.getItem("usuario"));
      dispatch(selectOneProcedimiento(localStorage.getItem("usuario")));
    } else {
      dispatch(selectOneProcedimiento(usuarioSesion));
    }
  }, []);

  return (
    <div>
      <h1 className="text-center my-3 text-body-secondary">Bienvenido</h1>
      <h4 className="text-center my-3 text-body-secondary">
        Echale un vistazo a estos productos:
      </h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-2">
        {Object.values(chollos).map((el) => (
          <ContenedorComponent
            onHandleClickId={() => {
              console.log(el.id);
            }}
            key={el.id}
            {...el}
          />
        ))}
      </div>
    </div>
  );
};
