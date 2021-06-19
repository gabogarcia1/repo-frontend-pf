import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import imagenDefault from "../images/profile-image-default.png";

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
        <div className="">
          <div className="">
            <Row className="align-items-start flex-column">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item>Nombre y Apellido</ListGroup.Item>{" "}
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.nombre}
                  />{" "}
                </ListGroup>
              </Col>
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item>Fecha de Nacimiento</ListGroup.Item>{" "}
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

            <Row className="align-items-start flex-column">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item>Domicilio</ListGroup.Item>{" "}
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

            <Row className="align-items-start flex-column">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item>Contacto</ListGroup.Item>{" "}
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

            <Row className="align-items-start flex-column">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item>DNI</ListGroup.Item>{" "}
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

            <Row className="align-items-start flex-column">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item>Curso</ListGroup.Item>{" "}
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

            <Row className="align-items-start flex-column">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item>Calificaciones</ListGroup.Item>{" "}
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
          <div className="d-flex justify-content-end">
            <img src={imagenDefault} thumbnail className="w-25" />
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
