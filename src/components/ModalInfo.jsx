import React from "react";
import { Modal, Button, Row, Col, Image, ListGroup } from "react-bootstrap";
import logo from "../images/toninHighSchoolLogo.png";

function ModalInfo(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Perfil de Alumno
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="align-items-center">
          <Col xs="auto">
            <ListGroup variant="flush">
              <ListGroup.Item>Nombre y Apellido</ListGroup.Item>
              <ListGroup.Item>Nombre y Apellido</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs="auto">
            <ListGroup variant="flush">
              <ListGroup.Item>Fecha de Nacimiento</ListGroup.Item>
              <ListGroup.Item>Fecha de Nacimiento</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={6} md={4}>
            <Image src={logo} thumbnail />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs="auto">
            <ListGroup variant="flush">
              <ListGroup.Item>Domicilio</ListGroup.Item>
              <ListGroup.Item>Domicilio</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs="auto">
            <ListGroup variant="flush">
              <ListGroup.Item>Contacto</ListGroup.Item>
              <ListGroup.Item>Contacto</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs="auto">
            <ListGroup variant="flush">
              <ListGroup.Item>DNI</ListGroup.Item>
              <ListGroup.Item>DNI</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs="auto">
            <ListGroup variant="flush">
              <ListGroup.Item>Curso</ListGroup.Item>
              <ListGroup.Item>Curso</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs="auto">
            <ListGroup variant="flush">
              <ListGroup.Item>Calificaciones</ListGroup.Item>
              <ListGroup.Item>Calificaciones</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn btn-danger">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfo;
