import React, { useEffect, useState } from "react";
import "./NewCholloPage.css"; // Importamos los estilos personalizados
import { useDispatch } from "react-redux";
import { insertarChollo } from "../../../store/chollosStore/thunk";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router";

export const NewCholloPage = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleObtenArchivo = (e) => {
    setFile(e.target.files[0]);
  };
  const {
    precio = "",
    nombre = "",
    descripcion = "",
    formState,
    onInputChange,
  } = useForm();

  const datosEnviar = {
    formState: formState,
    file: file,
  };

  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    dispatch(insertarChollo(datosEnviar));
    //navigate("/");
  };

  return (
    <>
      <div className="d-flex justify-content-center aling-items-center  my-3">
        <h1 className="text-center my-3 text-white py-3 bg-dark w-50">
          Crea Tu Nuevo Chollo
        </h1>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <form className="chollo-form bg-secondary" onSubmit={onhandleSubmit}>
          <div className="mb-4">
            <label className="form-label text-white">Nombre del Chollo </label>
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
            <label className="form-label  text-white">Descripción</label>
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
            <label className="form-label text-white">Precio del Chollo</label>
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
          <div className="mb-4">
            <label className="form-label text-white">Imagen del Chollo</label>
            <input
              type="file"
              className="form-control"
              onChange={handleObtenArchivo}
              accept="image/*"
            />
          </div>
          <div className="justify-content-center align-items-center d-flex my-3 p-2">
            <button type="submit" className="btn btn-outline-light  w-50 ">
              Publicar Chollo
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
