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
            maxLength="20"
            name="expediente"
            value={AlumnoSeleccionado && AlumnoSeleccionado.nroexpediente}
          />
          <br />

          <label>Nombre</label>
          <input
            className="form-control"
            type="text"
            maxLength="20"
            name="nombre"
            value={AlumnoSeleccionado && AlumnoSeleccionado.nombre}
            onChange={handleChange}
          />
          <br />

          <label>Apellido</label>
          <input
            className="form-control"
            type="text"
            maxLength="20"
            name="apellido"
            value={AlumnoSeleccionado && AlumnoSeleccionado.apellido}
            onChange={handleChange}
          />
          <br />

          <label>Curso</label>
          <input
            className="form-control"
            type="text"
            maxLength="20"
            name="curso"
            value={AlumnoSeleccionado && AlumnoSeleccionado.aniocursado}
            onChange={handleChange}
          />
          <br />

          <label>Estado de Cuota</label>
          <input
            className="form-control"
            type="text"
            maxLength="20"
            name="estadodecuota"
            value={AlumnoSeleccionado && AlumnoSeleccionado.cuotaaldia}
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

          <label>Contacto</label>
          <input
            className="form-control"
            type="text"
            maxLength="20"
            name="contacto"
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
