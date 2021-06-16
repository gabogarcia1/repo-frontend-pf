import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "../css/califications.css";
import SubjetModal from "./SubjetModal";

const SubjetCard = (datos) => {
  return (
    <>
      <Col className="pb-3 ">
        <Card className="text-center p-auto m-auto cardMateria ">
          <SubjetModal
            variant={datos.variant}
            materia={datos.materia}
            class={datos.class}
          />
        </Card>
      </Col>
    </>
  );
};

export default SubjetCard;
