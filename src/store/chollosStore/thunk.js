import { createAsyncThunk } from "@reduxjs/toolkit";

export const obtenerChollos = createAsyncThunk(
  "chollos/obtenerChollos",
  //Función anónima encargada de realizar la función fetch
  async () => {
    const response = await fetch(
      "http://localhost:8080/chollos/selectAllChollos.php"
    );
    return response.json();
  }
);

export const insertarChollo = createAsyncThunk(
  "chollos/insertarChollo",
  //Función anónima encargada de realizar la función fetch
  async ({ precio, nombre, descripcion, enlace }) => {
    const datos = new URLSearchParams();
    datos.append("precio", precio);
    datos.append("nombre", nombre);
    datos.append("descripcion", descripcion);
    datos.append("enlace", enlace);

    const response = await fetch(
      "http://localhost:8080/chollos/addChollo.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: datos.toString(),
      }
    );
    return response.json();
  }
);

export const seleccionarChollo = createAsyncThunk(
  "chollos/seleccionarChollo",
  async (id) => {
    const data = new URLSearchParams();
    data.append("id", id);

    const response = await fetch(
      "http://localhost:8080/chollos/selectOneChollo.php",
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

export const eliminarChollo = createAsyncThunk(
  "chollos/eliminarChollo",
  async (id) => {
    const data = new URLSearchParams();
    data.append("id", id);
    const request = await fetch("http://localhost:8080/chollos/rmChollo.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });
    return request.json();
  }
);

export const modificarChollo = createAsyncThunk(
  "chollos/modificarChollo",
  async ({ id, descripcion, nombre, enlace, precio }) => {
    const data = new URLSearchParams();
    data.append("id", id);
    data.append("nombre", nombre);
    data.append("descripcion", descripcion);
    data.append("enlace", enlace);
    data.append("precio", precio);

    const request = await fetch(
      "http://localhost:8080/chollos/UpdateAllOfOneChollo.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      }
    );
    return request.json();
  }
);
