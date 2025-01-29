import React from "react";
import { ContenedorComponent } from "./ContenedorComponent/ContenedorComponent";

export const UserChollosPage = () => {
  return (
    <>
      <h1 className="text-center my-3">Estos son tus chollos</h1>

      <div className="container ">
        <div className="row d-flex aling-items-center justify-content-center">
          <div className="col-3 my-2 mb-5">
            <p>Precio</p>
            <button className="btn btn-secondary mx-2">Ascendente</button>
            <button className="btn btn-secondary mx-2">Descendente</button>
          </div>
          <div className="col-3 my-2 mb-5">
            <p>Fecha Obtencion</p>
            <button className="btn btn-secondary mx-2">Ascendente</button>
            <button className="btn btn-secondary mx-2">Descendente</button>
          </div>
        </div>
      </div>
      <ContenedorComponent></ContenedorComponent>
    </>
  );
};
