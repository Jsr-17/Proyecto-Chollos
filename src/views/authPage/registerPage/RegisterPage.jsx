import React, { useState } from "react";
import { useFormValidator } from "../../../hooks/useFormValidator";

export const RegisterPage = () => {
  const {
    username,
    contrasenya,
    correo,
    edad,
    nombre,
    onInputChange,
    handleSubmit,
  } = useFormValidator();

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 shadow-lg bg-secondary"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <h2 className="text-center mb-4 text-white">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label fs-5 text-white">Nombre</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fs-5 text-white">Correo</label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="correo"
              value={correo}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label fs-5 text-white">Edad</label>
            <input
              type="number"
              className="form-control form-control-lg"
              name="edad"
              value={edad}
              onChange={onInputChange}
              required
              min={0}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fs-5 text-white">Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              value={username}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fs-5 text-white">Contraseña</label>
            <input
              type="password"
              className="form-control form-control-lg"
              name="contrasenya"
              value={contrasenya}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-secondary btn-lg w-50 border"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
