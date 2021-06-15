import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "../css/califications.css";
import SubjetModal from "./SubjetModal";
import handleShow from "./SubjetModal";

const SubjetCard = (materia, variant) => {
  return (
    <>
      <Col className="pb-3">
        <Card className="text-center p-auto m-auto cardMateria">
          <Button variant={variant} onClick={handleShow}>
            {materia}
          </Button>
          <SubjetModal />
        </Card>
      </Col>
    </>
  );
};

export default SubjetCard;
