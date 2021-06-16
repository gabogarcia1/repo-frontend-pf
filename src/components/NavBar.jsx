import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/toninHighSchoolLogo.png";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt="Tonin High School"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Alumnos</Nav.Link>
            <Nav.Link href="#link">Profesores</Nav.Link>
            <Nav.Link href="#califications">Notas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
