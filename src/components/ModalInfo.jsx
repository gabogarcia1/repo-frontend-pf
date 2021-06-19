import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import imagenDefault from "../images/profile-image-default.png";
import "../css/listaDeAlumnos.css";
const ModalInfo = ({ modalVer, setModalVer, AlumnoSeleccionado }) => {
  return (
    <Modal
      isOpen={modalVer}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader>
        <div>
          <h3>Perfil de Alumno</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column pl-5">
            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">
                    Nombre y Apellido
                  </ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.nombre}
                  />{" "}
                </ListGroup>
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">
                    Fecha de Nacimiento
                  </ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.apellido}
                  />{" "}
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">Domicilio</ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.domicilio}
                  />{" "}
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">Contacto</ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.contacto}
                  />{" "}
                </ListGroup>
              </Col>
            </Row>
          </div>
          <div className="d-flex flex-column pl-5">
            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">DNI</ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.dni}
                  />{" "}
                </ListGroup>
              </Col>
            </Row>
            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">Curso</ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.curso}
                  />{" "}
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">
                    Numero de expediente
                  </ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.expediente}
                  />{" "}
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">
                    Calificaciones
                  </ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                  />{" "}
                </ListGroup>
              </Col>
            </Row>
          </div>

          <div className="d-flex justify-content-center align-items-center pb-3">
            <img src={imagenDefault} thumbnail className="w-75 h-75" />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={() => setModalVer(false)}>
          Cerrar
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalInfo;
