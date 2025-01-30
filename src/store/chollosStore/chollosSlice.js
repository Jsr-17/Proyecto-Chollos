import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//este método solicita al controlador de php la información createAsyncThunk sirve para ejecutar una funcion y relacionar el fetch
//con la nomenclatura se exporta para poder ser utilizada en otras partes de los proyectos muy importante la exportación

export const obtenerChollos = createAsyncThunk(
  "chollos/obtenerChollos",
  //Función anónima encargada de realizar la función fetch
  async () => {
    const response = await fetch(
      "http://localhost:8080/usuario/selectAllUsuario.php"
    );
    return response.json();
  }
);

const chollosSlice = createSlice({
  name: "chollos",
  initialState: { chollos: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(obtenerChollos.pending, (state) => {
        state.loading = true;
      })
      .addCase(obtenerChollos.fulfilled, (state, action) => {
        state.chollos = action.payload;
        state.loading = false;
      })
      .addCase(obtenerChollos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default chollosSlice.reducer;
