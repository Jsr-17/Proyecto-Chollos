import React from "react";
import { ContenedorComponent } from "./components/ContenedorComponent/ContenedorComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerChollos } from "../../../store/chollosStore/thunk";
import {
  compraDeUsuario,
  selectOneProcedimiento,
} from "../../../store/Usuario_ChollosStore/thunk";
import {
  obtenerUsuarioId,
  sesionUsuario,
} from "../../../store/usuarioStore/thunk";
import img from "../../../assets/imgEj.webp";
import { obtenerFechaSQL } from "../../../hooks/obtenerFecha";

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

  const handleOnclick = (e) => {
    const data = obtenerFechaSQL();

    const dato = {
      id_usuario: usuarioSesion,
      id_chollo: e,
      fecha: data,
    };

    dispatch(compraDeUsuario(dato));
    dispatch(selectOneProcedimiento(usuarioSesion));
  };

  return (
    <div>
      <div className="hero d-flex align-items-start justify-content-center text-white py-3">
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 p-5 rounded  bg-dark w-25">
              <h2 className="bg-dark ">
                Aquí tienes algunos ejemplos de productos
              </h2>
            </div>
            <div className="col-12 col-md-8 p-5 rounded  bg-dark m-4 w-75 justify-content-center align-items-center d-flex">
              <div className=" p-4 d-flex flex-column justify-content-center align-items-center">
                <h3 className="mt-1 mb-3 bg-secondary text-white px-3 py-2 rounded mx-auto">
                  Últimas novedades
                </h3>
                <img
                  src={img}
                  className="img-fluid rounded shadow"
                  alt="Novedades"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container-fuid m-3 px-3 py-2 rounded ">
        <div className="d-flex aling-items-center justify-content-center rounded">
          <h3 className="mb-5 bg-dark text-white text-center p-3 w-50">
            Todos los productos
          </h3>
        </div>
        <div className=" bg-dark px-5 rounded">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mx-2">
            {Object.values(chollos).map((el) => (
              <ContenedorComponent
                onHandleClickId={() => handleOnclick(el.id)}
                key={el.id}
                {...el}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
