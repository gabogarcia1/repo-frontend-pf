import React from "react";
import { ListGroup } from "react-bootstrap";

const TablaAlumnos = () => {
  const list = [
    {
      id: "a",
      firstname: "Robin Wieruch",
      curso: "1° Año",
      numerodeexpediente: 1234,
    },
    {
      id: "b",
      firstname: "Dave Davidds",
      curso: "1° Año",
      numerodeexpediente: 1233,
    },
  ];

  return (
    <>
      <ListGroup className="" horizontal>
        <ListGroup.Item>Nombre y Apellido</ListGroup.Item>
        <ListGroup.Item>Curso</ListGroup.Item>
        <ListGroup.Item>N° de Expediente</ListGroup.Item>
      </ListGroup>

      {list.map((item) => (
        <ListGroup className="" key={item.id} horizontal>
          <ListGroup.Item>{item.firstname}</ListGroup.Item>
          <ListGroup.Item>{item.curso}</ListGroup.Item>
          <ListGroup.Item>{item.numerodeexpediente}</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
};

export default TablaAlumnos;
