//Para hacer un custom hook es tan simple como la lógica que vas desarrollando para hacerla simplemente enviarla con return
//la pregunta es por que hacer un Custom Hook?
//Sencillo para una mayor manteninimiento del codigo , un código mucho mas ordenado y menos dependendiente entre sí

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iniciarSesion, sesionUsuario } from "../store/usuarioStore/thunk";
import { useNavigate } from "react-router";
import { useForm } from "./useForm";

//objeto que contiene el estado inicial del formulario
const formDatos = {
  username: "",
  contrasenya: "",
};

export const useInicioSesion = () => {
  //este hook lo utilizo para reconocer si el usuario a colocado correctamente las credenciales o no
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //funcion necesaria para el contexto de react la realizacion del dispatch
  const dispatch = useDispatch();
  //funcion para sacar los datos del state de usuarios
  const { usuario, loading } = useSelector((state) => state.usuarios);
  //custom hook que trata los campos de los formularios dando el control sobre el estado de  los datos
  const { username, contrasenya, onInputChange, formState, onResetForm } =
    useForm(formDatos);

  //función necesaria para navegar entre las diferentes páginas web
  const navigate = useNavigate();

  // Función que maneja el submit del formulario
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //consulta a la base de datos con los datos recogidos del formulario
    dispatch(iniciarSesion(formState));
    //resetea la información del formulario
    onResetForm();
  };
  //aquí me encargo de tener en cuenta los cambios del state de la peticion de la base de datos y conforme mostrar informacion
  //tanto a la aplicacion cliente como al usuario
  useEffect(() => {
    //Hasta que el contexto no llegue
    if (!loading) {
      //mientras que la variable del contexto no tenga la información del usuario
      if (usuario != null) {
        //compueba que el usuario no haya fallado la contraseña o el nombre del usuario
        if (usuario.status === "failed") {
          //En el caso de que haya fallado modificamos el state  a fallado para informar al usuario de un error de credenciales
          setIsAuthenticated(true);
        } else {
          if (usuario.user != undefined) {
            console.log(usuario);
            //Aquí el usuario ha colocado correctamente sus credenciales
            navigate("/");
            //saco de la variable del contexto el id del usuario
            const { id } = usuario.user;
            //almaceno la variable con el id del usuario con el objetivo de presentarle la informacion personalizada
            dispatch(sesionUsuario(id));
            localStorage.setItem("usuario", id);
          }
        }
      }
    }
    //controlo el state de tanto los cambios que tenga el usuario como los que pueda tener la peticion del contexto através simplemente del loading
  }, [loading]);
  //retornamos los datos del usuario para que puedan ser controllados por el hoos custom que tengo aqui, y las demas funciones que
  //tengo definidas que producen algun cambio o accion en el state
  return {
    username,
    contrasenya,
    onInputChange,
    handleOnSubmit,
    isAuthenticated,
  };
};
