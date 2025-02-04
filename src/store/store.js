import { configureStore } from "@reduxjs/toolkit";
import chollosReducer from "./chollosStore/chollosSlice";
import usuarioReducer from "./usuarioStore/usuariosSlice";
import usuarioCholloReducer from "./Usuario_ChollosStore/Usuario_ChollosStore";

export const store = configureStore({
  reducer: {
    chollos: chollosReducer,
    usuarios: usuarioReducer,
    user_chollo: usuarioCholloReducer,
  },
});
