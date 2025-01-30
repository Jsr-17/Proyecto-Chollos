import { configureStore } from "@reduxjs/toolkit";
import chollosReducer from "./chollosStore/chollosSlice";

export const store = configureStore({
  reducer: {
    chollos: chollosReducer,
  },
});
