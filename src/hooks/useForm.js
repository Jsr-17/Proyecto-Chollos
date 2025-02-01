import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    //desestructuramos el evento del onChange cuando nos llega
    const { name, value } = target;
    //nos llegan los atributos name y value del jsx los cuales son utilizados para asignar el valor del name al que el usuario
    //va introduciendo
    setFormState({
      //desestructura el estado del input del formulario para introducir lo siguiente
      ...formState,
      //Aquí el [] es vital por que es lo que usa  js para reconocer como clave primaria para asignar el valor
      //es básicamente un array asociativo donde al "id" le asignamos el cambio del valor del input
      [name]: value,
      //El resultado final es mediante el array asociativo que teniamos arriba vamos modificando los datos de este mediante la
      //desestructuración y en vez de generar nuevas claves modificamos la clave indicada como "id"
      //ojo no es que rastree el name del jsx si no que mediante [] reconoce la clave
    });
  };

  const onResetForm = () => {
    //cuando se llame esta funcion se reiniciarán los inputs al state inicial básicamente estaran vacios
    setFormState(initialForm);
  };

  //Para poder tener estos métodos es necesario desestructurarlos y enviarlos para despues cuando llame al custom hook poder
  //desestructuralos y obtener las funcionalidad
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
