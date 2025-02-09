import React from "react";
import { useSelector } from "react-redux";
import { ContenedorComponent } from "./components/ContenedorComponent";

export const UserChollosPage = () => {
  const { data } = useSelector((state) => state.user_chollo);
  return (
    <>
      <div className="d-flex justify-content-center aling-items-center">
        <h1 className="text-center my-3 text-white py-3 bg-dark w-50">
          Estos son tus chollos
        </h1>
      </div>

      <div className="container ">
        <div className="row d-flex aling-items-center justify-content-center">
          <div className="col-3 my-2 mb-5">
            <p className="my-3 text-white py-3">Precio</p>
            <button className="btn btn-secondary mx-2">Ascendente</button>
            <button className="btn btn-secondary mx-2">Descendente</button>
          </div>
          <div className="col-3 my-2 mb-5">
            <p className="my-3 text-white py-3">Fecha Obtencion</p>
            <button className="btn btn-secondary mx-2">Ascendente</button>
            <button className="btn btn-secondary mx-2">Descendente</button>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-2">
        {Object.values(data).map((el) => (
          <ContenedorComponent
            onHandleClickId={() => {
              console.log(el.id_chollo);
            }}
            key={el.id_chollo + Math.random()}
            {...el}
          />
        ))}
      </div>
    </>
  );
};
