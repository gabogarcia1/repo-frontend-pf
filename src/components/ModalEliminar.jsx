import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ModalEliminar = () => {
  return (
    <>
      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas Dar de Baja al Alumno N°{" "}
          {AlumnoSeleccionado && AlumnoSeleccionado.expediente}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-warning" onClick={() => eliminar()}>
            Aceptar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEliminar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalEliminar;
