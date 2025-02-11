import React from "react";
const img = "src/controllers/chollos/";

export const ContenedorComponent = ({
  nombre,
  precio,
  descripcion,
  onHandleClickId,
  enlace,
}) => {
  return (
    <div className="col">
      <div className="card text-center p-3 bg-secondary h-100 text-white">
        <img
          src={img.concat(enlace)}
          className="card-img-top    img-fluid"
          alt={img + enlace}
        />
        <div className="card-body mt-2 ">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text m-3">{descripcion}</p>
          <p className=" m-4">Precio : {precio}</p>
          <button className="btn btn-outline-light" onClick={onHandleClickId}>
            Añadir a cesta
          </button>
        </div>
      </div>
    </div>
  );
};
