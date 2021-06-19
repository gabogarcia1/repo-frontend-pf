import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const TablaAlumnos = ({ data, seleccionarAlumno, setModalShow }) => {
  return (
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>N° de Expediente</th>
          <th>Nombre y Apellido</th>
          <th>Curso</th>
          <th>Estado de Cuota</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elemento) => (
          <tr>
            <td>{elemento.expediente}</td>
            <td>
              {elemento.nombre} {elemento.apellido}
            </td>
            <td>{elemento.curso}</td>
            <td>{elemento.estadodecuota}</td>
            <td>
              <Button
                className=""
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </Button>{" "}
              <button
                className="btn btn-warning"
                aria-hidden="true"
                onClick={() => seleccionarAlumno(elemento, "Editar")}
              >
                <i className="fa fa-pencil-square-o"></i>
              </button>{" "}
              <button
                className="btn btn-danger"
                aria-hidden="true"
                onClick={() => seleccionarAlumno(elemento, "Eliminar")}
              >
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaAlumnos;
