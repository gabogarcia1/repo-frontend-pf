import React from "react";
import { ListGroup } from "react-bootstrap";
import "../css/listadeestudiantes.css";

const ListaDeEstudiantes = () => {
  return (
    <div>
      <h2 className="text-center">Lista de Alumnos</h2>
      <div className="container">
        <div className="contenedorDeTabla">
          <ListGroup horizontal>
            <ListGroup.Item>Apellido y Nombre</ListGroup.Item>
            <ListGroup.Item>Curso</ListGroup.Item>
            <ListGroup.Item>N° de Expediente</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default ListaDeEstudiantes;
