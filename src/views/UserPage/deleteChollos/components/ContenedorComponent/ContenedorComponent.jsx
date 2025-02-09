import React from "react";
import img from "../../../../../assets/imgEj.webp";

export const ContenedorComponent = ({
  nombre_Chollo,
  precio,
  descripcion,
  onHandleClickId,
}) => {
  return (
    <div className="col">
      <div className="card text-center p-3 bg-secondary h-100 text-white">
        <img src={img} className="card-img-top  img-fluid" alt={img} />
        <div className="card-body mt-2">
          <h5 className="card-title">
            {nombre_Chollo + " Precio : " + precio}
          </h5>
          <p className="card-text m-3">{descripcion}</p>
          <button className="btn btn-outline-light" onClick={onHandleClickId}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
