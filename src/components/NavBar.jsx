import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/toninHighSchoolLogo.png";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Link to="/">
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
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login" className="nav-link">
              Iniciar sesion
            </Link>
            <Link to="/alumnos" className="nav-link">
              Alumnos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
