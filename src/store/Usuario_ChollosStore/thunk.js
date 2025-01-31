import { createAsyncThunk } from "@reduxjs/toolkit";

export const devolution = createAsyncThunk(
  "User_choll/devolution",
  async (id) => {
    const data = new URLSearchParams();
    data.append("id", id);
    const response = await fetch(
      "http://localhost:8080/usuario_chollo/devolution.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      }
    );
    return response.json();
  }
);

export const selectProcedimientosTotales = createAsyncThunk(
  "User_choll/procedimientosTotales",
  async () => {
    const response = await fetch(
      "http://localhost:8080/usuario_chollo/selectAllProcediments.php"
    );

    return response.json();
  }
);

export const selectOneProcedimiento = createAsyncThunk(
  "User_choll/selectOneProcedimiento",
  async (id) => {
    const data = new URLSearchParams();
    data.append("id", id);

    const respuesta = await fetch(
      "http://localhost:8080/usuario_chollo/select_One_History_Use.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      }
    );
    return respuesta.json();
  }
);
export const compraDeUsuario = createAsyncThunk(
  "User_choll/compraUsuario",
  async ({ id_usuario, id_chollo, fecha }) => {
    const data = new URLSearchParams();
    data.append("id_usuario", id_usuario);
    data.append("id_chollo", id_chollo);
    data.append("fecha", fecha);
    const response = await fetch(
      "http://localhost:8080/usuario_chollo/usuario_Buy.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      }
    );
    console.log(response);

    return response.json();
  }
);
