import React from "react";
import TablaAlumnos from "../components/TablaAlumnos";
import { Button } from "react-bootstrap";
import "../css/listaDeAlumnos.css";

const Admin = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Lista de Alumnos</h1>
          </div>
          <div className="botones">
            <Button variant="warning">
              <i class="fas fa-trash"></i>
            </Button>{" "}
            <Button variant="danger">
              <i class="fas fa-trash"></i>
            </Button>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TablaAlumnos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
