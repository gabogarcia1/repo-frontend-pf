import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const TablaAlumnos = ({ data, seleccionarAlumno }) => {
  return (
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>N° de Expediente</th>
          <th>Nombre y Apellio</th>
          <th>Curso</th>
          <th>Estado de Cuota</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elemento) => (
          <tr>
            <td>{elemento.expediente}</td>
            <td>{elemento.nombreyapellido}</td>
            <td>{elemento.curso}</td>
            <td>{elemento.estadodecuota}</td>
            <td>
              {/* <button
                className="btn btn-info"
                aria-hidden="true"
                onClick={() => seleccionarAlumno(elemento, "Ver")}
              >
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </button>{" "} */}
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
