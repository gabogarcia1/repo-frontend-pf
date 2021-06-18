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
            value={AlumnoSeleccionado && AlumnoSeleccionado.expediente}
          />
          <br />
          <label>Nombre y Apellido</label>
          <input
            className="form-control"
            type="text"
            name="nombreyapellido"
            value={AlumnoSeleccionado && AlumnoSeleccionado.nombreyapellido}
            onChange={handleChange}
          />
          <br />
          <label>Curso</label>
          <input
            className="form-control"
            type="text"
            name="curso"
            value={AlumnoSeleccionado && AlumnoSeleccionado.curso}
            onChange={handleChange}
          />
          <br />

          <label>Estado de Cuota</label>
          <input
            className="form-control"
            type="text"
            name="estadodecuota"
            value={AlumnoSeleccionado && AlumnoSeleccionado.estadodecuota}
            onChange={handleChange}
          />
          <br />

          <label>Domicilio</label>
          <input
            className="form-control"
            type="text"
            name="domicilio"
            value={AlumnoSeleccionado && AlumnoSeleccionado.domicilio}
            onChange={handleChange}
          />
          <br />
          <label>Contacto</label>
          <input
            className="form-control"
            type="text"
            name="contacto"
            value={AlumnoSeleccionado && AlumnoSeleccionado.contacto}
            onChange={handleChange}
          />
          <br />
          <label>DNI</label>
          <input
            className="form-control"
            type="text"
            name="dni"
            value={AlumnoSeleccionado && AlumnoSeleccionado.dni}
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
