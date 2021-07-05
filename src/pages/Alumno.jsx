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
  // console.log(alumnos.data.alumnos);

  let dataAlumnos;
  [dataAlumnos] = [alumnos.data.alumnos];
  console.log(dataAlumnos);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Alumno;
