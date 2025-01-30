import React, { useEffect, useState } from "react";
import "./NewCholloPage.css"; // Importamos los estilos personalizados

export const NewCholloPage = () => {
  const [contador, setContador] = useState(0);
  const [parar, setParar] = useState(false);

  useEffect(() => {
    if (parar) return;
    const paco = setInterval(() => setContador(contador + 1), 1000);

    return () => {
      clearInterval(paco);
      console.log("pito");
    };
  });

  return (
    <>
      <h1 className="text-center my-4 title"> Crea Tu Nuevo Chollo </h1>
      <button onClick={() => (parar ? setParar(false) : setParar(true))}>
        pulsame
      </button>

      <div className="container d-flex justify-content-center align-items-center">
        <form className="chollo-form">
          <div className="mb-4">
            <label className="form-label">Nombre del Chollo {contador}</label>
            <input
              type="text"
              className="form-control"
              id="nameChollo"
              name="nameChollo"
              placeholder="Ejemplo: Descuento en Amazon"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Descripción</label>
            <textarea
              placeholder="Escribe la descripción aquí..."
              rows="5"
              maxLength="500"
              className="form-control"
              id="descripcion"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label">Precio del Chollo</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              placeholder="Ejemplo: 19.99"
              min={1}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 btn-lg">
            Publicar Chollo
          </button>
        </form>
      </div>
    </>
  );
};
