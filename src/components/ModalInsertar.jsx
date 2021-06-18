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
              readOnly
              type="text"
              name="expediente"
              value={data[data.length - 1].expediente + 1}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.nombre : ""}
              onChange={handleChange}
            />
            <br />

            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              name="apellido"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.apellido : ""}
              onChange={handleChange}
            />
            <br />

            <label>Curso</label>
            <input
              className="form-control"
              type="text"
              name="curso"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.curso : ""}
              onChange={handleChange}
            />
            <br />

            <label>Estado de Cuota</label>
            <input
              className="form-control"
              type="text"
              name="estadodecuota"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.estadodecuota : ""}
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
