import React from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Row, Col, ListGroup, Button, Image } from "react-bootstrap";
import imgPerfil from "../images/imagen-perfil.jpg";
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
        <div class="container">
          <div class="row">
            <div class="col-sm">
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
                      value={
                        AlumnoSeleccionado && AlumnoSeleccionado.nroexpediente
                      }
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
                      name="diafechanac"
                      value={
                        AlumnoSeleccionado && AlumnoSeleccionado.diafechanac
                      }
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
            <div class="col-sm">
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
                      value={AlumnoSeleccionado && AlumnoSeleccionado.aniocursado}
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
                      type="email"
                      name="contacto"
                      value={AlumnoSeleccionado && AlumnoSeleccionado.email}
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
            <div class="col-sm">
              <Row className="align-items-start px-5 py-5">
                <Col xs="auto">
                  <Image className="imgPerfil" src={imgPerfil} roundedCircle />
                </Col>
              </Row>
            </div>
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
