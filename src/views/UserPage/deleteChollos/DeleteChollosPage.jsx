import React, { useEffect, useState } from "react";
import { ContenedorComponent } from "./components/ContenedorComponent/ContenedorComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  devolution,
  selectOneProcedimiento,
} from "../../../store/Usuario_ChollosStore/thunk";

export const DeleteChollosPage = () => {
  const { data, loading } = useSelector((state) => state.user_chollo);
  const { usuarioSesion } = useSelector((state) => state.usuarios);
  const dispatch = useDispatch();
  const [elimina, setElimina] = useState(false);

  useEffect(() => {
    dispatch(selectOneProcedimiento(usuarioSesion));
    setElimina(false);
  }, [elimina]);

  return (
    <>
      <h1 className="text-center my-3">
        Estos son tus chollos , elimina uno!!
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-2">
        {Object.values(data).map((el) => (
          <ContenedorComponent
            onHandleClickId={() => {
              dispatch(devolution(el.id));
              setElimina(true);
            }}
            key={el.id_chollo + Math.random()}
            {...el}
          />
        ))}
      </div>
    </>
  );
};
