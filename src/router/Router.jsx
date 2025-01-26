import { Route, Routes } from "react-router";
import { RouterAuth } from "./RouterAuth";
import { RouterApp } from "./RouterApp";

export const Router = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<RouterAuth></RouterAuth>}></Route>
      <Route path="*" element={<RouterApp></RouterApp>}></Route>
    </Routes>
  );
};
