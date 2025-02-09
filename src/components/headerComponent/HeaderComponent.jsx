import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export const HeaderComponent = () => {
  const { usuarioSesion } = useSelector((state) => state.usuarios);

  let existe = !!localStorage.getItem("usuario");

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleMobile = ({ currentTarget: { innerWidth } }) => {
      innerWidth > 995 ? setMobile(false) : setMobile(true);
    };
    window.addEventListener("resize", handleMobile);

    return () => window.removeEventListener("resize", handleMobile);
  }, [mobile]);
  const handleLogout = () => {
    localStorage.removeItem("usuario");
    window.location.reload();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg p-3 m-2 border border-2 border-white"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/"}>
            Tienda de Chollos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse bg-gray"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item"></li>

              {(existe || usuarioSesion) && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gestion de Mis Chollos
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/userChollos"}>
                        Ver mis Chollos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/newChollos"}>
                        Nuevo Chollo
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/deleteChollos"}>
                        Borrar Chollos
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
            {!mobile && (
              <form className="d-flex w-25 mb-1" role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            )}
            <button
              className="btn btn-outline-light mx-2"
              type="button"
              onClick={() => console.log(usuarioSesion)}
            >
              Ver Carrito
            </button>
            {!existe && !usuarioSesion ? (
              <Link className="btn btn-outline-light" to="/auth/login">
                Login
              </Link>
            ) : (
              <Link className="btn btn-outline-light" onClick={handleLogout}>
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
