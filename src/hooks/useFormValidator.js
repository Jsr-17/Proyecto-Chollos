import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./useForm";
import {
  seleccionUsuarioSi,
  crearUsuario,
  sesionUsuario,
} from "../store/usuarioStore/thunk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  username: "",
  contrasenya: "",
  correo: "",
  nombre: "",
  edad: "",
};

export const useFormValidator = () => {
  const {
    onResetForm,
    onInputChange,
    username,
    contrasenya,
    correo,
    edad,
    nombre,
    formState,
  } = useForm(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nombreUsuario = { columna: "username", valor: username };
  const [existe, setExiste] = useState(false);

  useEffect(() => {
    if (existe) {
      console.log("no valiod");
    }
  }, [existe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const datos = await dispatch(seleccionUsuarioSi(nombreUsuario)).unwrap();
      if (datos.length > 0) {
        if (datos[0].username == username) {
          setExiste(true);
        } else {
          dispatch(crearUsuario(formState));
          navigate("/");

          const usuarioNuevo = await dispatch(
            seleccionUsuarioSi({ columna: "username", valor: username })
          ).unwrap();
          dispatch(sesionUsuario(usuarioNuevo[0].id));
        }
      } else {
        dispatch(crearUsuario(formState));
        navigate("/");
        const usuarioNuevo = await dispatch(
          seleccionUsuarioSi({ columna: "username", valor: username })
        ).unwrap();

        dispatch(sesionUsuario(usuarioNuevo[0].id));
        localStorage.setItem("usuario", usuarioNuevo[0].id);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return {
    formState,
    onInputChange,
    onResetForm,
    username,
    contrasenya,
    correo,
    edad,
    nombre,
    handleSubmit,
  };
};
