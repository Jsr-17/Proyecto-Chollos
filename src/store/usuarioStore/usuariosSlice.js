import { createSlice } from "@reduxjs/toolkit";

import {
  obtenerTodosUsuarios,
  obtenerUsuarioId,
  crearUsuario,
  modificarUsuario,
  seleccionUsuarioSi,
  eliminarUsuario,
  iniciarSesion,
} from "./thunk";

const initialState = { usuarios: [], loading: false, usuario: null };

const setLoading = (state) => {
  state.loading = true;
};

const unsetLoading = (state) => {
  state.loading = false;
};

const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(obtenerTodosUsuarios.fulfilled, (state, action) => {
        state.usuarios = action.payload;
        unsetLoading(state);
      })
      .addCase(obtenerUsuarioId.fulfilled, (state, action) => {
        state.usuario = action.payload;
        unsetLoading(state);
      })
      .addCase(crearUsuario.fulfilled, (state, action) => {
        state.usuario = action.payload;
        unsetLoading(state);
      })
      .addCase(eliminarUsuario.fulfilled, (state, action) => {
        state.usuario = action.payload;
        unsetLoading(state);
      })
      .addCase(seleccionUsuarioSi.fulfilled, (state, action) => {
        state.usuarios = action.payload;
        unsetLoading(state);
      })
      .addCase(modificarUsuario.fulfilled, (state, action) => {
        state.usuario = action.payload;
        unsetLoading(state);
      })
      .addCase(iniciarSesion.fulfilled, (state, action) => {
        state.usuario = action.payload;
        unsetLoading(state);
      })

      .addMatcher((action) => action.type.endsWith("/pending"), setLoading)
      .addMatcher((action) => action.type.endsWith("/rejected"), unsetLoading);
  },
});

export default usuarioSlice.reducer;
