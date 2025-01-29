import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { RegisterPage } from "../views/authPage/registerPage/RegisterPage";
import { LoginPage } from "../views/authPage/loginPage/LoginPage";

export const RouterAuth = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage></LoginPage>}></Route>
      <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/*" element={<Navigate to={"/auth/login"} />}></Route>
    </Routes>
  );
};
