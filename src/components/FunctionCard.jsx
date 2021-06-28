import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FunctionCard = (datos) => {
  return (
    <>
      <div className="w-75 pb-3 justify-content-center">
        <Card>
          <Card.Body className="p-0">
            <Link to={datos.link}>
              <Button variant="primary" className="w-100 btn-funcion">
                <h4 className="text-center">{datos.title}</h4>
                <i className={datos.icon} aria-hidden="true"></i>
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FunctionCard;
