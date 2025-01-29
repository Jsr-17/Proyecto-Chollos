import React from "react";
import { ContenedorComponent } from "./components/ContenedorComponent/ContenedorComponent";

export const LandingPage = () => {
  return (
    <div>
      <h1 className="text-center my-3 text-body-secondary">Bienvenido</h1>
      <h4 className="text-center my-3 text-body-secondary">
        Echale un vistazo a estos productos:
      </h4>
      <ContenedorComponent></ContenedorComponent>
    </div>
  );
};
