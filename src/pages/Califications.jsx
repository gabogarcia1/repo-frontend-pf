import ReactDOM from "react-dom";
import React from "react";
import Logo from "../images/toninHighSchoolLogo.png";
import "../css/califications.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import SubjetCard from "../components/SubjetCard";

const Califications = () => {
  return (
    <>
      <div>
        <div className="container pt-5">
          <Card>
            <Card.Body>
              <Card.Title className="pb-2">Alumno</Card.Title>
              <Card.Text>Nombre:</Card.Text>
              <Card.Text>Apellido:</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="p-5 pt-5">
          <Row xs={1} md={2} className="g-4">
            <SubjetCard materia="Matematicas" variant="outline-primary" />
            <SubjetCard
              materia="Lengua y Literatura"
              variant="outline-success"
            />
            <SubjetCard materia="Biologia" variant="outline-success" />
            <SubjetCard materia="Fisica" variant="outline-danger" />
            <SubjetCard materia="Quimica" variant="outline-warning" />
            <SubjetCard materia="Economia" variant="outline-info" />
            <SubjetCard materia="Geografia" variant="outline-danger" />
            <SubjetCard materia="Historia" variant="outline-warning" />
            <SubjetCard materia="Educacion Fisica" variant="outline-primary" />
          </Row>
        </div>
      </div>
    </>
  );
};

export default Califications;
