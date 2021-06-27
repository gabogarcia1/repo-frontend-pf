import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FunctionCard = (datos) => {
  return (
    <>
      <Col>
        <div className="d-flex justify-content-center w-100 h-100">
          <Card clasName=" h-100 w-100">
            <Card.Body className="p-0 h-100">
              <Link to={datos.link} className="h-100">
                <Button variant="primary" className="w-100 h-100 btn-funcion">
                  <h4 className="text-center">{datos.title}</h4>
                  <i className={datos.icon} aria-hidden="true"></i>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default FunctionCard;
