import { createAsyncThunk } from "@reduxjs/toolkit";

export const obtenerTodosUsuarios = createAsyncThunk(
  "usuarios/obtenerTodosUsuarios",
  async () => {
    const resp = await fetch(
      "http://localhost:8080/usuario/selectAllUsuario.php"
    );
    return resp.json();
  }
);

export const obtenerUsuarioId = createAsyncThunk(
  "usuarios/obtenerUsuarioId",
  async (id) => {
    //Con el id que recibimos lo convertimos a un objeto de URL lo cual a su vez lo que con seguimos es simular un post con un Form

    const datos = new URLSearchParams();
    datos.append("id", id);

    const resp = await fetch(
      "http://localhost:8080/usuario/selectOneUsuario.php",
      {
        method: "POST",
        //Si estamos usando este método es muy importante el uso de este header no es un json es un form
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: datos.toString(),
      }
    );
    return resp.json();
  }
);
export const crearUsuario = createAsyncThunk(
  "usuarios/crearUsuario",
  async ({ edad, nombre, email, usuario, pass }) => {
    const datos = new URLSearchParams();
    datos.append("edad", edad);
    datos.append("nombre", nombre);
    datos.append("correo", email);
    datos.append("username", usuario);
    datos.append("contrasenya", pass);

    const resp = await fetch("http://localhost:8080/usuario/addUsuario.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: datos.toString(),
    });

    return resp.json();
  }
);

export const eliminarUsuario = createAsyncThunk(
  "usuarios/eliminarUsuario",
  async (id) => {
    const datos = new URLSearchParams();
    datos.append("id", id);

    const resp = await fetch("http://localhost:8080/usuario/rmUsuario.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: datos.toString(),
    });

    return resp.json();
  }
);
export const seleccionUsuarioSi = createAsyncThunk(
  "usuarios/seleccionUsuarioPor",
  async ({ columna, valor }) => {
    const datos = new URLSearchParams();
    datos.append("columna", columna);
    datos.append("valor", valor);
    console.log(...datos);

    const resp = await fetch(
      "http://localhost:8080/usuario/selectUsuarioby.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: datos.toString(),
      }
    );
    return resp.json();
  }
);

export const modificarUsuario = createAsyncThunk(
  "usuarios/modificarUsuario",
  async ({ id, edad, nombre, email, usuario, pass }) => {
    const datos = new URLSearchParams();
    datos.append("id", id);
    datos.append("edad", edad);
    datos.append("nombre", nombre);
    datos.append("correo", email);
    datos.append("username", usuario);
    datos.append("contrasenya", pass);

    const resp = await fetch(
      "http://localhost:8080/usuario/updateAllOfUser.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: datos.toString(),
      }
    );

    return resp.json();
  }
);

export const iniciarSesion = createAsyncThunk(
  "usuarios/inicioSesion",
  async ({ username, contrasenya }) => {
    const data = new URLSearchParams();
    data.append("username", username);
    data.append("contrasenya", contrasenya);
    console.log(...data);
    const res = await fetch("http://localhost:8080/usuario/inicioSesion.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });
    return res.json();
  }
);
