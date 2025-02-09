import React from "react";
import img from "../../../../../assets/imgEj.webp";

export const ContenedorComponent = ({
  nombre,
  precio,
  descripcion,
  onHandleClickId,
}) => {
  return (
    <div className="col">
      <div className="card text-center">
        <img src={img} className="card-img-top  img-fluid" alt={img} />
        <div className="card-body">
          <h5 className="card-title">{nombre + " Precio : " + precio}</h5>
          <p className="card-text">{descripcion}</p>
          <button className="btn btn-secondary" onClick={onHandleClickId}>
            Añadir a cesta
          </button>
        </div>
      </div>
    </div>
  );
};
