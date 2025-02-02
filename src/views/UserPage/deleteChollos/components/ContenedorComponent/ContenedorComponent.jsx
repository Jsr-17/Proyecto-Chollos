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
      <div className="card text-center">
        <img src={img} className="card-img-top  img-fluid" alt={img} />
        <div className="card-body">
          <h5 className="card-title">
            {nombre_Chollo + " Precio : " + precio}
          </h5>
          <p className="card-text">{descripcion}</p>
          <button className="btn btn-danger" onClick={onHandleClickId}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
