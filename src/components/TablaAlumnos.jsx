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
      
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <div>{item.firstname}</div>
            <div>{item.curso}</div>
            <div>{item.numerodeexpediente}</div>
          </li>
        ))}
      </ul>

    </>
  );
};

export default TablaAlumnos;
