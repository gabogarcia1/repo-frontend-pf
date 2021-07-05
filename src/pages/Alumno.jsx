import React, { useEffect } from "react";
import { useState } from "react";
import { getAlumnos } from "../helpers/rutaAlumnos";

const Alumno = () => {
  const [alumnos, setAlumnos] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getAlumnos().then((datos) => {
      setAlumnos({
        data: datos,
        loading: false,
      });
    });
  }, []);

  // console.log(alumnos);
  console.log(alumnos.data.alumnos);

  return (
    <div>
      <h1>Hellow World</h1>
    </div>
  );
};

export default Alumno;
