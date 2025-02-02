import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
//funcion que hace una petición al controlador trayendo al contexto todos los usuarios existentes en la base de datos
export const obtenerTodosUsuarios = createAsyncThunk(
  "usuarios/obtenerTodosUsuarios",
  async () => {
    const resp = await fetch(
      "http://localhost:8080/usuario/selectAllUsuario.php"
    );
    return resp.json();
  }
);

//Funcion que trae al contexto la información del usuario elegido dentro del contexto
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

//esta funcion se encarga de enviar un post con los datos de un usuario que se registra en la aplicacion al controlador
export const crearUsuario = createAsyncThunk(
  "usuarios/crearUsuario",
  async ({ edad, nombre, correo, username, contrasenya }) => {
    const datos = new URLSearchParams();
    datos.append("edad", edad);
    datos.append("nombre", nombre);
    datos.append("correo", correo);
    datos.append("username", username);
    datos.append("contrasenya", contrasenya);

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
//funcion encargada de eliminar los datos de un usuario mandando al controlador el id del usuario a eliminar
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
//funcion encargada de seleccionar un usuario por una serie de condiciones enviando la columna y el valor por el que selecciona al
//controlador hacia la base de datos
export const seleccionUsuarioSi = createAsyncThunk(
  "usuarios/seleccionUsuarioPor",
  async ({ columna, valor }) => {
    const datos = new URLSearchParams();
    datos.append("columna", columna);
    datos.append("valor", valor);

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
//funcion que modifica la informacion de un usuario recibe el id del usuario y los datos a modificar
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
//Duncion encargada de mandar al controlador la informacion de las credenciales de un usuario y recibir la respuesta con los datos
export const iniciarSesion = createAsyncThunk(
  "usuarios/inicioSesion",
  async ({ username, contrasenya }) => {
    const data = new URLSearchParams();
    data.append("username", username);
    data.append("contrasenya", contrasenya);
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
//esta funcion almacena en el contexto de la aplicacion el id del usuario que está logeado
export const sesionUsuario = createAction("usuarios/usuarioSesion", (id) => {
  return {
    payload: { id },
  };
});
