import React from "react";
import "../css/califications.css";
import { Button, Card, Row } from "react-bootstrap";
import SubjetCard from "../components/SubjetCard";
import "font-awesome/css/font-awesome.css";
import imgPerfil from "../images/imagen-perfil.jpg";
import { Link } from "react-router-dom";

const Califications = () => {
  return (
    <>
      <div>
        <div className="pt-5 container">
          <Link to="/alumnos">
            <Button className="back-btn">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Button>
          </Link>
        </div>
        <div className="container d-flex justify-content-center">
          <Card className="card-datos-alumno h-100 w-100">
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title className="">
                  <h4>Datos del alumno</h4>
                </Card.Title>
                <hr />
                <Card.Text>Nombre:</Card.Text>
                <Card.Text>Apellido:</Card.Text>
              </div>
              <div>
                <img src={imgPerfil} alt="a" className="perfil-img" />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="p-5 pt-5">
          <Row xs={1} md={2} className="g-4">
            <SubjetCard
              materia="Matematicas"
              className="fa fa-plus fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Lengua y Literatura"
              className="fa fa-book fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Biologia"
              className="fa fa-leaf fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Fisica"
              className="fa fa-graduation-cap fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Quimica"
              className="fa fa-flask fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Economia"
              className="fa fa-percent fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Geografia"
              className="fa fa-globe fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Historia"
              className="fa fa-compass fa-5x subjet-icon"
            />
            <SubjetCard
              materia="Educacion Fisica"
              className="fa fa-futbol-o fa-5x subjet-icon"
            />
          </Row>
        </div>
      </div>
    </>
  );
};

export default Califications;
