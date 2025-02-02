import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { LandingPage } from "../views/UserPage/landingPage/LandingPage";
import { DeleteChollosPage } from "../views/UserPage/deleteChollos/DeleteChollosPage";
import { UserChollosPage } from "../views/UserPage/UserChollos/UserChollosPage";
import { NewCholloPage } from "../views/UserPage/newChollo/NewCholloPage";
import ProtectedRoute from "./ProtectedRoute";

export const RouterApp = () => {
  return (
    //aqui controla las rutas de la parte de la aplicacion que algunas de ellas deberan de ser privadas las cuales serán controladas
    //por los diferentes componentes
    <Routes>
      {/* Esta ruta será la unica accesible por usuarios que no están registrados y modificará su comportamiento para ello*/}
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route
        path="/userChollos"
        element={<ProtectedRoute element={<UserChollosPage />} />}
      />

      <Route
        path="/newChollos"
        element={<ProtectedRoute element={<NewCholloPage></NewCholloPage>} />}
      ></Route>
      <Route
        path="/deleteChollos"
        element={
          <ProtectedRoute element={<DeleteChollosPage></DeleteChollosPage>} />
        }
      ></Route>

      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
