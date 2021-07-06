import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "../css/listaDeAlumnos.css";

const ModalEditar = ({
  modalEditar,
  setModalEditar,
  AlumnoSeleccionado,
  handleChange,
  editar,
}) => {
  return (
    <Modal isOpen={modalEditar}>
      <ModalHeader>
        <div>
          <h3>Editar Perfil de Alumno</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>N° de Expediente</label>
          <input
            className="form-control"
            readOnly
            type="text"
            name="expediente"
            value={AlumnoSeleccionado && AlumnoSeleccionado.nroexpediente}
            maxLength="20"
          />
          <br />

          <label>Nombre</label>
          <input
            className="form-control"
            type="text"
            name="nombre"
            value={AlumnoSeleccionado && AlumnoSeleccionado.nombre}
            onChange={handleChange}
            maxLength="30"
          />
          <br />

          <label>Apellido</label>
          <input
            className="form-control"
            type="text"
            name="apellido"
            value={AlumnoSeleccionado && AlumnoSeleccionado.apellido}
            onChange={handleChange}
            maxLength="30"
          />
          <br />

          <label>Curso</label>
          <input
            className="form-control"
            type="text"
            name="curso"
            value={AlumnoSeleccionado && AlumnoSeleccionado.aniocursado}
            onChange={handleChange}
            maxLength="20"
          />
          <br />

          <label>Estado de Cuota</label>
          <input
            className="form-control"
            type="text"
            name="estadodecuota"
            value={AlumnoSeleccionado && AlumnoSeleccionado.estadodecuota}
            onChange={handleChange}
            maxLength="20"
          />
          <br />

          <label>Domicilio</label>
          <input
            className="form-control"
            type="text"
            name="domicilio"
            value={AlumnoSeleccionado && AlumnoSeleccionado.domicilio}
            onChange={handleChange}
            maxLength="20"
          />
          <br />

          <label>Contacto</label>
          <input
            className="form-control"
            type="email"
            name="contacto"
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
            // min="1920-01-01"
            // max="2011-12-31"
            value={AlumnoSeleccionado && AlumnoSeleccionado.nacimiento}
            onChange={handleChange}
            maxLength="20"
          />
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success" onClick={() => editar()}>
          Actualizar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setModalEditar(false)}
        >
          Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalEditar;
