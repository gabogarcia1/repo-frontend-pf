import  {React, useEffect, useState } from "react";
import rutaAlumnos from "../helpers/rutaAlumnos";
import { useParams } from "react-router-dom";
import AlumnosItem from "../components/AlumnosItem";


// import "../css/curso.css";
// import CursoDetail from "../components/CursoDetail";

const Alumno = async () => {
  const {getAlumnos}=rutaAlumnos;

  const data=getAlumnos();
  console.log(data)
  // const [data, setData] = useState({
  //   ok: false,
  //   alumno: {},
  // });

  // let { id } = useParams();

  
  // useEffect(() => {
 
  // //console.log(data)
    
  // },);

  return (
    <div className="container mt-5">
      {data.ok ? (
         <AlumnosItem  data={data} />
      
      ) : (
        <div className="row">
          <div className="col">
            <div className="alert alert-danger text-center" role="alert">
              El alumno no existe
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Alumno;
