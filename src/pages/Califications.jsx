import ReactDOM from "react-dom";
import React from "react";
import Logo from "../images/toninHighSchoolLogo.png";
import "../css/califications.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import SubjetCard from "../components/SubjetCard";
import "font-awesome/css/font-awesome.css";
import imgPerfil from "../images/imagen-perfil.jpg";

const Califications = () => {
  return (
    <>
      <div>
        <div className="container pt-5">
          <Card className="card-datos-alumno">
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title className="pb-2">Datos del alumno</Card.Title>
                <hr />
                <Card.Text>Nombre:</Card.Text>
                <Card.Text>Apellido:</Card.Text>
              </div>
              <div>
                <img
                  src={imgPerfil}
                  alt="a"
                  className="perfil-img rounded-circle"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="p-5 pt-5">
          <Row xs={1} md={2} className="g-4">
            <SubjetCard
              materia="Matematicas"
              class="fa fa-plus fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Lengua y Literatura"
              class="fa fa-book fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Biologia"
              class="fa fa-leaf fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Fisica"
              class="fa fa-graduation-cap fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Quimica"
              class="fa fa-flask fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Economia"
              class="fa fa-percent fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Geografia"
              class="fa fa-globe fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Historia"
              class="fa fa-compass fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Educacion Fisica"
              class="fa fa-futbol-o fa-5x subjet-icon"
            />
          </Row>
        </div>
      </div>
    </>
  );
};

export default Califications;
