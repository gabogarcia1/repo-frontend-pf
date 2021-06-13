import React from "react";
import { ListGroup } from "react-bootstrap";
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
            <ListGroup className="tablaDeAlumnos" horizontal>
              <ListGroup.Item>Apellido y Nombre</ListGroup.Item>
              <ListGroup.Item>Curso</ListGroup.Item>
              <ListGroup.Item>N° de expediente</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
