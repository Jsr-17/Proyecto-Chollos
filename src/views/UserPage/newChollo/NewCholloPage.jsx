import React, { useEffect, useState } from "react";
import "./NewCholloPage.css"; // Importamos los estilos personalizados
import { useDispatch } from "react-redux";
import { insertarChollo } from "../../../store/chollosStore/thunk";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router";

export const NewCholloPage = () => {
  const dispatch = useDispatch();
  const {
    precio = "",
    nombre = "",
    descripcion = "",
    formState,
    onInputChange,
  } = useForm();
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    dispatch(insertarChollo(formState));
    navigate();
  };

  return (
    <>
      <h1 className="text-center my-4 title"> Crea Tu Nuevo Chollo </h1>

      <div className="container d-flex justify-content-center align-items-center">
        <form className="chollo-form" onSubmit={onhandleSubmit}>
          <div className="mb-4">
            <label className="form-label">Nombre del Chollo </label>
            <input
              type="text"
              className="form-control"
              id="nameChollo"
              name="nombre"
              value={nombre}
              placeholder="Ejemplo: Descuento en Amazon"
              onChange={onInputChange}
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
              name="descripcion"
              value={descripcion}
              onChange={onInputChange}
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
              name="precio"
              value={precio}
              onChange={onInputChange}
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
