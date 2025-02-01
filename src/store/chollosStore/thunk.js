import { createAsyncThunk } from "@reduxjs/toolkit";
//funcion encargada de sacar de la base de datos todos los chollos de la base de datos
export const obtenerChollos = createAsyncThunk(
  "chollos/obtenerChollos",
  //Función anónima encargada de realizar la función fetch lo que hace es un get al controlador
  async () => {
    const response = await fetch(
      "http://localhost:8080/chollos/selectAllChollos.php"
    );
    return response.json();
  }
);

//funcion encagada de crear un chollo
export const insertarChollo = createAsyncThunk(
  "chollos/insertarChollo",
  //Función anónima encargada de realizar la función fetch en este caso es un post
  //recibe un objeto desestructurado con los atributos del objeto que necesita el backend
  async ({ precio, nombre, descripcion, enlace }) => {
    // crea un Objeto de url cual almacena los datos en array aasocitivo como POST
    const datos = new URLSearchParams();
    datos.append("precio", precio);
    datos.append("nombre", nombre);
    datos.append("descripcion", descripcion);
    datos.append("enlace", enlace);

    // El fetch en la versión post
    const response = await fetch(
      "http://localhost:8080/chollos/addChollo.php",
      {
        //metodo que he utilizado
        method: "POST",
        //cabeceras que contiene para enviar al peticion
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        //datos que recibe en este caso recibe los datos del objeto
        body: datos.toString(),
      }
    );
    return response.json();
  }
);

//funcion encargada de seleccionar un chollo de la base de datos
export const seleccionarChollo = createAsyncThunk(
  "chollos/seleccionarChollo",
  async (id) => {
    //crea un objeto de tipo URL donde solamente le paso la id
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
//funcion cual recibirá el id de un chollo y lo eliminará de la base de datos
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
//Funcion que recbira toda la informacion de un chollo y será utilizada para modificarla mandando la petición al controlador
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
