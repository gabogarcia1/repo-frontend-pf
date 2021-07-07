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
              type="text"
              maxLength="20"
              name="expediente"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.nroexpediente : ""}
              onChange={handleChange}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              maxLength="20"
              name="nombre"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.nombre : ""}
              onChange={handleChange}
            />
            <br />

            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              maxLength="20"
              name="apellido"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.apellido : ""}
              onChange={handleChange}
            />
            <br />

            <label>Curso</label>
            <input
              className="form-control"
              type="text"
              maxLength="20"
              name="curso"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.aniocursado : ""}
              onChange={handleChange}
            />
            <br />

            <label>Estado de Cuota</label>
            <input
              className="form-control"
              type="text"
              maxLength="20"
              name="cuotaaldia"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.cuotaaldia : ""}
              onChange={handleChange}
            />
            <br />

            <label>Domicilio</label>
            <input
              className="form-control"
              type="text"
              maxLength="20"
              name="domicilio"
              value={AlumnoSeleccionado && AlumnoSeleccionado.domicilio}
              onChange={handleChange}
            />
            <br />

            <label>Email</label>
            <input
              className="form-control"
              type="text"
              maxLength="20"
              name="email"
              value={AlumnoSeleccionado && AlumnoSeleccionado.email}
              onChange={handleChange}
            />
            <br />

            <label>DNI</label>
            <input
              className="form-control"
              type="text"
              maxLength="20"
              name="dni"
              value={AlumnoSeleccionado && AlumnoSeleccionado.dni}
              onChange={handleChange}
            />
            <br />

            <label>Fecha de Nacimiento</label>
            <input
              className="form-control"
              type="text"
              maxLength="20"
              name="nacimiento"
              value={AlumnoSeleccionado && AlumnoSeleccionado.diafechanac}
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
