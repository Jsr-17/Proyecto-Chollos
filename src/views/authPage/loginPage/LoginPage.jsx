import React, { useState } from "react";
import { Link } from "react-router";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card p-4 shadow-lg"
          style={{ width: "750px", height: "500px" }}
        >
          <h3 className="text-center my-4">Iniciar Sesión</h3>
          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <label className="form-label my-1">
                Correo Electrónico o Usuario
              </label>
              <input
                type="email"
                className="form-control my-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="m-3">
              <label className="form-label my-1">Contraseña</label>
              <input
                type="password"
                className="form-control my-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary w-100 my-3">
              Ingresar
            </button>
          </form>
          <p className="text-center mt-3">
            ¿No tienes cuenta? <Link to={"/auth/register"}>Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  );
};
