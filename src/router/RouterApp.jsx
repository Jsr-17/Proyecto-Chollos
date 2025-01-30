import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { LandingPage } from "../views/UserPage/landingPage/LandingPage";
import { DeleteChollosPage } from "../views/UserPage/deleteChollos/DeleteChollosPage";
import { UserChollosPage } from "../views/UserPage/UserChollos/UserChollosPage";
import { NewCholloPage } from "../views/UserPage/newChollo/NewCholloPage";
import { ModifyChollosPage } from "../views/UserPage/modifyChollos/modifyChollosPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route
        path="/userChollos"
        element={<UserChollosPage></UserChollosPage>}
      ></Route>
      <Route
        path="/newChollos"
        element={<NewCholloPage></NewCholloPage>}
      ></Route>
      <Route
        path="/deleteChollos"
        element={<DeleteChollosPage></DeleteChollosPage>}
      ></Route>
      <Route
        path="/modifyChollos"
        element={<ModifyChollosPage></ModifyChollosPage>}
      ></Route>
      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
