import { Link } from "react-router";
import { useInicioSesion } from "../../../hooks/useInicioSesion";

export const LoginPage = () => {
  //utilizo los atributos del custom hook donde cada valor es utilizado en el formulario o en el jsx
  const {
    username,
    contrasenya,
    onInputChange,
    handleOnSubmit,
    isAuthenticated,
  } = useInicioSesion();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card p-4 shadow-lg"
          style={{ width: "750px", height: "500px" }}
        >
          <h3 className="text-center my-4">Iniciar Sesión</h3>
          <form onSubmit={handleOnSubmit} method="POST">
            <div className="m-3">
              <label className="form-label my-1">Usuario</label>
              <input
                type="text"
                className="form-control my-1"
                value={username}
                name="username"
                onChange={onInputChange}
                required
              />
            </div>
            <div className="m-3">
              <label className="form-label my-1">Contraseña</label>
              <input
                type="password"
                className="form-control my-1"
                onChange={onInputChange}
                value={contrasenya}
                name="contrasenya"
                required
              />
            </div>

            {/* Para colocar un mensaje con una condición boleana con el objetivo de mostrar o no etiquetas se hace de esta forma*/}
            {isAuthenticated && <h3>La autentificación Fallo</h3>}

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
