import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { LandingPage } from "../views/landingPage/LandingPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
