import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "../css/modalCalifications.css";

const SubjetModalAccordion = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Año 1
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="accordion-card">Nota final</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Año 2
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="accordion-card">Nota final</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Año 3
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="accordion-card">Nota final</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Año 4
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="accordion-card">Nota final</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default SubjetModalAccordion;
