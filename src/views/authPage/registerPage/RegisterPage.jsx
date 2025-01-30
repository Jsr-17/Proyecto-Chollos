import React, { useState } from "react";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    edad: "",
    nombre: "",
    correo: "",
    username: "",
    contrasenya: "",
    admin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí puedes enviar los datos al backend
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 shadow-lg"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label fs-5">Nombre</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fs-5">Correo</label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label fs-5">Edad</label>
            <input
              type="number"
              className="form-control form-control-lg"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
              min={0}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fs-5">Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fs-5">Contraseña</label>
            <input
              type="password"
              className="form-control form-control-lg"
              name="contrasenya"
              value={formData.contrasenya}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <button type="submit" className="btn btn-secondary btn-lg w-50">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
