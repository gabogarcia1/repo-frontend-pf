import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../images/toninHighSchoolLogo.png";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Link to="/home">
          <Navbar.Brand>
            <img
              alt="Tonin High School"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-lg-flex w-100">
            <div className="d-lg-flex flex-lg-row w-100">
              <div>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/alumnos" className="nav-link">
                  Alumnos
                </Link>
              </div>
              <div>
                <Link to="/califications" className="nav-link">
                  Notas (Temporal)
                </Link>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-end w-100">
              <Button className="login-btn h-auto p-0">
                <Link to="/" className="nav-link p-1">
                  Iniciar sesion
                </Link>
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
