import React from "react";
import logo from "../images/toninHighSchoolLogo.png";
import "../css/home.css";
import "font-awesome/css/font-awesome.css";
import FunctionCard from "../components/FunctionCard";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="pb-5">
      <div>
        <h1 className="text-center pt-5"> Pagina administrativa </h1>

        <div className="text-center">
          <img className="logoCampus" src={logo} alt="portada" />
        </div>
        <h2 className="text-center text-danger">
          Esta pagina es solo apta para uso administrativo
        </h2>
        <h2 className="text-center p-5">Funciones</h2>
      </div>

      <div className="d-flex flex-row justify-content-around">
        <Row>
          <FunctionCard
            title="Lista alumnos"
            icon="fa fa-user-circle fa-5x"
            link="/alumnos"
          />

          <FunctionCard
            title="Agregar alumnos"
            icon="fa fa-plus-circle fa-5x home-function-icon"
            link="/alumnos"
          />

          <FunctionCard
            title="Agregar docente"
            icon="fa fa-graduation-cap fa-5x"
          />
        </Row>
      </div>
    </div>
  );
};

export default Home;
