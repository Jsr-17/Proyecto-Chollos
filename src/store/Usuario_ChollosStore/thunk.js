import { createAsyncThunk } from "@reduxjs/toolkit";

//funcion encargada de realizar una petición al controlador esta recibirá el id de la compra del usuario que quiere eliminar
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
//función que se encargara de recibir u histórico de todas las compras que se han realizado
export const selectProcedimientosTotales = createAsyncThunk(
  "User_choll/procedimientosTotales",
  async () => {
    const response = await fetch(
      "http://localhost:8080/usuario_chollo/selectAllProcediments.php"
    );

    return response.json();
  }
);
//funcion que seleccionara por el id las compras de un usuario cual ha realizado históricamente
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

//función que se encarga de hacer una compra de un usuario recibe el id del usuario el del chollo y al fecha en el que se ha realizado

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
