import { createSlice } from "@reduxjs/toolkit";
import {
  obtenerChollos,
  insertarChollo,
  seleccionarChollo,
  modificarChollo,
  eliminarChollo,
} from "./thunk";

//este método solicita al controlador de php la información createAsyncThunk sirve para ejecutar una funcion y relacionar el fetch
//con la nomenclatura se exporta para poder ser utilizada en otras partes de los proyectos muy importante la exportación

const initialState = { chollos: [], loading: false, chollo: null };

//para una mayor limpieza de codigo y eliminar los casos en el estado del loading creo estas dos funciones;
const setLoading = (state) => {
  state.loading = true;
};

const unsetLoading = (state) => {
  state.loading = false;
};

const chollosSlice = createSlice({
  name: "chollos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(obtenerChollos.fulfilled, (state, action) => {
        state.chollos = action.payload;
        unsetLoading(state);
      })
      .addCase(insertarChollo.fulfilled, (state, action) => {
        state.chollos = action.payload;
        unsetLoading(state);
      })
      .addCase(seleccionarChollo.fulfilled, (state, action) => {
        state.chollo = action.payload;
        unsetLoading(state);
      })
      .addCase(modificarChollo.fulfilled, (state, action) => {
        state.chollo = action.payload;
        unsetLoading(state);
      })
      .addCase(eliminarChollo.fulfilled, (state, action) => {
        state.chollo = action.payload;
        unsetLoading(state);
      })

      //manejo de casos de fallo automáticamente con las funciones de arriba
      .addMatcher((action) => action.type.endsWith("/pending"), setLoading)
      .addMatcher((action) => action.type.endsWith("/rejected"), unsetLoading);
  },
});

export default chollosSlice.reducer;
