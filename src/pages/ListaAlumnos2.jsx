import React, { useEffect, useState } from "react";
//import { getAlumnos } from "../helpers/rutaAlumnos";
import rutaAlumnos from "../helpers/rutaAlumnos";
import AlumnosItem from "../components/AlumnosItem";
// import CursoSearch from "../components/CursoSearch";

// import "../css/cursos.css";

const ListaAlumnos2 = () => {
    const {getAlumnos}=rutaAlumnos;
  const [alumnos, setAlumnos] = useState({
    data: {},
    loading: true,
  });

  const [inputValue, setInputValue] = useState("");
  let alumnosFilter = [];
  //estado para manejar el formulario

  useEffect(() => {
    getAlumnos().then((datos) => {
      setAlumnos({
        data: datos,
        loading: false,
      });
    });
  }, []);

  //Arreglo nuevo con el filtro

//   if (!alumnos.loading) {
//     alumnosFilter = alumnos.data.alumnos.filter((alumno) => {
//       return alumno.nombre.toLowerCase().includes(inputValue.toLowerCase());
//     });
//   }

  return (
    <div className="background-curso">
      <div className="container">
        <div className="row">
          <div className="col text-center my-5 ">
            <h3>Conoce nuestros cursos</h3>
        <AlumnosItem/>
          </div>
        </div>
       

        {/* {!alumnos.loading && (
          <div className="row">
            {alumnosFilter.map((alumno) => {
              return <AlumnosItem key={alumno._id} alumno={alumno} />;
            })}
          </div>
        )} */}
      </div>
    </div>
  );
        };

export default ListaAlumnos2;
