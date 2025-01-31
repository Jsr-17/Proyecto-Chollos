import { createSlice } from "@reduxjs/toolkit";
import {
  devolution,
  selectOneProcedimiento,
  selectProcedimientosTotales,
  compraDeUsuario,
} from "./thunk";

const initialState = { loading: null, listData: [], data: null };

const setLoading = (state) => {
  state.loading = true;
};

const unsetLoading = (state) => {
  state.loading = false;
};

const Usuario_ChollosSice = createSlice({
  name: "User_choll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(devolution.fulfilled, (state, action) => {
        state.data = action.payload;
        unsetLoading(state);
      })
      .addCase(selectOneProcedimiento.fulfilled, (state, action) => {
        state.data = action.payload;
        unsetLoading(state);
      })
      .addCase(selectProcedimientosTotales.fulfilled, (state, action) => {
        state.listData = action.payload;
        unsetLoading(state);
      })
      .addCase(compraDeUsuario.fulfilled, (state, action) => {
        state.data = action.payload;
        unsetLoading(state);
      })
      .addMatcher((action) => action.type.endsWith("/pending"), setLoading)
      .addMatcher((action) => action.type.endsWith("/rejected"), unsetLoading);
  },
});

export default Usuario_ChollosSice.reducer;
