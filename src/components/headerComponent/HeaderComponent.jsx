import React from "react";
import { Link } from "react-router";

export const HeaderComponent = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item"></li>
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

                  <li>
                    <Link className="dropdown-item" to={"/modifyChollos"}>
                      Modificar Chollos
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex w-50 mb-1" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <Link className="btn btn-outline-secondary" to={"/auth/login"}>
              Login
            </Link>
            <button className="btn btn-outline-secondary mx-2" type="submit">
              Ver Carrito
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
