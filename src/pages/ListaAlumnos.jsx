import React from "react";
import TablaAlumnos from "../components/TablaAlumnos";
import "../css/listaDeAlumnos.css";

const Admin = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Lista de Alumnos</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TablaAlumnos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
