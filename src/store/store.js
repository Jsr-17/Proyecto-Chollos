import { configureStore } from "@reduxjs/toolkit";
import chollosReducer from "./chollosStore/chollosSlice";
import usuarioReducer from "./usuarioStore/usuariosSlice";

export const store = configureStore({
  reducer: {
    chollos: chollosReducer,
    usuarios: usuarioReducer,
  },
});
