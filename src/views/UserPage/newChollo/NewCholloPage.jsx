import React from "react";

export const NewCholloPage = () => {
  return (
    <>
      <h1 className="text-center my-3">Crea Tu Nuevo Chollo!!</h1>

      <div className="container d-flex justify-content-center aling-items-center ">
        <form className="w-50 my-3">
          <div className="mb-3">
            <label className="form-label">Nombre del Chollo</label>
            <input
              type="text"
              className="form-control w-75"
              id="nameChollo"
              name="nameChollo"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripcion</label>

            <textarea
              placeholder="Escribe la descripcion aquí..."
              rows="5"
              cols="40"
              maxLength="500"
              className="form-control"
              id="descripcion"
            ></textarea>
          </div>
          <div className="mb-3 form-label">
            <label htmlFor="precio">Precio del Chollo</label>

            <input
              type="number"
              className="form-control w-50 my-2"
              id="precio"
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
