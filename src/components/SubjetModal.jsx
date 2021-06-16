import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/califications.css";
import "font-awesome/css/font-awesome.css";
import SubjetModalAccordion from "./SubjetModalAccordion";
import "../css/modalCalifications.css";

function SubjetModal(datos) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="w-100 h-100 d-flex contenedor-materia rounded">
        <Button
          onClick={handleShow}
          className="w-100 h-100 buttonMateria rounded-0 d-flex justify-content-around p-0 align-items-center"
        >
          <div className="h5">{datos.materia}</div>
          <div>
            <i class={datos.class}></i>
          </div>
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="h-100 w-100">
            <div className="d-flex justify-content-between align-items-center">
              <div className="">{datos.materia}</div>
              <div className="modal-icon">
                <i class={datos.class}></i>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="pb-3">Notas finales</h5>
          <SubjetModalAccordion />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubjetModal;
