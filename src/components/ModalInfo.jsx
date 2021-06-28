import React from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import imagenDefault from "../images/imagen-perfil.jpg";
import "../css/listaDeAlumnos.css";
import "font-awesome/css/font-awesome.css";

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
          <div className="d-flex flex-column pl-4">
            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">
                    Nombre y Apellido
                  </ListGroup.Item>
                  <input
                    className="form-control input-style"
                    readOnly
                    type="text"
                    name="nombreyapellido"
                    value={
                      AlumnoSeleccionado &&
                      AlumnoSeleccionado.nombre +
                        " " +
                        AlumnoSeleccionado.apellido
                    }
                  />
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">
                    Numero de expediente
                  </ListGroup.Item>
                  <input
                    className="form-control input-style"
                    readOnly
                    type="text"
                    name="expediente"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.expediente}
                  />
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">
                    Fecha de Nacimiento
                  </ListGroup.Item>
                  <input
                    className="form-control input-style"
                    readOnly
                    type="text"
                    name="nacimiento"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.nacimiento}
                  />
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">Domicilio</ListGroup.Item>
                  <input
                    className="form-control input-style"
                    readOnly
                    type="text"
                    name="dimicilio"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.domicilio}
                  />
                </ListGroup>
              </Col>
            </Row>
          </div>
          <div className="d-flex flex-column pl-5">
            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">DNI</ListGroup.Item>
                  <input
                    className="form-control input-style"
                    readOnly
                    type="text"
                    name="dni"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.dni}
                  />
                </ListGroup>
              </Col>
            </Row>
            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">Curso</ListGroup.Item>
                  <input
                    className="form-control input-style"
                    readOnly
                    type="text"
                    name="curso"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.curso}
                  />
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0">Contacto</ListGroup.Item>
                  <input
                    className="form-control input-style"
                    readOnly
                    type="text"
                    name="contacto"
                    value={AlumnoSeleccionado && AlumnoSeleccionado.contacto}
                  />
                </ListGroup>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col xs="auto">
                <ListGroup variant="flush">
                  <ListGroup.Item className="pl-0 border-0">
                    Calificaciones
                  </ListGroup.Item>{" "}
                  <div className="w-100">
                    <Link to="/califications">
                      <Button className="back-btn w-100">
                        <i class="fa fa-book" aria-hidden="true"></i>
                      </Button>
                    </Link>
                  </div>
                </ListGroup>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-center align-items-center pb-3 pl-3">
            <img
              src={imagenDefault}
              thumbnail
              className="border-img imagenDeAlumno"
            />
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
