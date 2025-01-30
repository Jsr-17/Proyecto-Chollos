import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 📌 Acción asíncrona para obtener chollos desde PHP
export const fetchChollos = createAsyncThunk(
  "chollos/fetchChollos",
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
      .addCase(fetchChollos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChollos.fulfilled, (state, action) => {
        state.chollos = action.payload;
        state.loading = false;
      })
      .addCase(fetchChollos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default chollosSlice.reducer;
