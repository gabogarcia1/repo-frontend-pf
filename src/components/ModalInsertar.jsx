import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ModalInsertar = ({
  modalInsertar,
  setModalInsertar,
  AlumnoSeleccionado,
  handleChange,
  insertar,
  data,
}) => {
  return (
    <>
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Nuevo Perfil de Alumno</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>N° de Expediente</label>
            <input
              className="form-control"
              type="number"
              name="expediente"
              maxLength="30"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.nroexpediente : ""}
              onChange={handleChange}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              maxLength="30"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.nombre : ""}
              onChange={handleChange}
            />
            <br />

            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              name="apellido"
              maxLength="30"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.apellido : ""}
              onChange={handleChange}
            />
            <br />

            <label>Curso</label>
            <input
              className="form-control"
              type="text"
              name="curso"
              maxLength="30"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.aniocursado : ""}
              onChange={handleChange}
            />
            <br />

            <label>Estado de Cuota</label>
            <input
              className="form-control"
              type="text"
              name="cuotaaldia"
              maxLength="30"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.cuotaaldia : ""}
              onChange={handleChange}
            />
            <br />

            <label>Domicilio</label>
            <input
              className="form-control"
              type="text"
              name="domicilio"
              maxLength="30"
              value={AlumnoSeleccionado && AlumnoSeleccionado.domicilio}
              onChange={handleChange}
            />
            <br />

            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={AlumnoSeleccionado && AlumnoSeleccionado.email}
              onChange={handleChange}
            />
            <br />

            <label>DNI</label>
            <input
              className="form-control"
              type="number"
              name="dni"
              value={AlumnoSeleccionado && AlumnoSeleccionado.dni}
              onChange={handleChange}
            />
            <br />

            <label>Fecha de Nacimiento</label>
            <input
              className="form-control"
              type="text"
              name="nacimiento"
              value={AlumnoSeleccionado && AlumnoSeleccionado.nacimiento}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-success" onClick={() => insertar()}>
            Crear
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalInsertar;
