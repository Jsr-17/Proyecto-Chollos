import { Route, Routes } from "react-router";
import { RouterAuth } from "./RouterAuth";
import { RouterApp } from "./RouterApp";

export const Router = () => {
  return (
    //Aqui defino el router principal donde las rutas son  a su misma vez partes de componentes de otro router
    //el objetivo es tener la logica de las rutas separadas
    // auth/ controla todas las rutas que hagan uso de auth/ hacia delante y en el caso de * de todas menos la anterior mencionada
    <Routes>
      <Route path="auth/*" element={<RouterAuth></RouterAuth>}></Route>
      <Route path="*" element={<RouterApp></RouterApp>}></Route>
    </Routes>
  );
};
