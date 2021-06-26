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
console.log(alumnos)
  return <div>
  
  </div>;
};

export default Alumno;
