import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const usuarioSlice = createSlice({
  name: "usuario",
  //El initialState son las variables donde voy a guardar la información si quiero mostrar algo diferente tengo que usar una dedicada
  initialState: { usuarios: [], loading: false, usuario: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Esto sirve para añadir un caso al builder de los reducers  en el caso de que esté pendiente se ejecutará este código
      .addCase(obtenerTodosUsuarios.pending, (state) => {
        //Esto sirve para colocar el state como cargando lo cual produce que en el html podamos colocar información referente a la
        //carga de esta la sea colocar un spinner o un cargando....
        state.loading = true;
      })
      //Este caso ya ha sido cumplimentada la solicitud satisfactoriamente
      .addCase(obtenerTodosUsuarios.fulfilled, (state, action) => {
        //El state de usuarios colocamos la información que en este caso serán todos los usuarios de la base de datos
        state.usuarios = action.payload;
        //Modificamos el valor del loading para que en el caso de que haya finalizado la busqueda podamos volver a mostrar
        //los datos que el usuario solicitó o necesita
        state.loading = false;
      })
      //En este caso el proceso a sido rechazado por algún tipo de error
      .addCase(obtenerTodosUsuarios.rejected, (state) => {
        state.loading = false;
      })
      //En este caso la petición se realiza a un solo usuario
      .addCase(obtenerUsuarioId.pending, (state) => {
        state.loading = true;
      })
      .addCase(obtenerUsuarioId.fulfilled, (state, action) => {
        state.usuario = action.payload;
        state.loading = false;
      })
      .addCase(obtenerUsuarioId.rejected, (state) => {
        state.loading = false;
      })
      .addCase(crearUsuario.pending, (state) => {
        state.loading = true;
      })
      .addCase(crearUsuario.fulfilled, (state, action) => {
        state.loading = false;
        state.usuario = action.payload;
      })
      .addCase(eliminarUsuario.pending, (state) => {
        state.loading = true;
      })
      .addCase(eliminarUsuario.fulfilled, (state, action) => {
        state.loading = false;
        state.usuario = action.payload;
      })
      .addCase(seleccionUsuarioSi.pending, (state) => {
        state.loading = true;
      })
      .addCase(seleccionUsuarioSi.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios = action.payload;
      })
      .addCase(modificarUsuario.pending, (state) => {
        state.loading = false;
      })
      .addCase(modificarUsuario.fulfilled, (state, action) => {
        state.loading = true;
        state.usuario = action.payload;
      });
  },
});
//El state es  un objeto que almacena la información de tanto los usuarios almacenados en la base de datos en el array
//como del estado de la búsqueda de ahí el uso de una variable boleana que hacemos uso para informar

export default usuarioSlice.reducer;
