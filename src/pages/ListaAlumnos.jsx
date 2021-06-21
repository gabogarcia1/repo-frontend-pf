import React, { useState, useEffect } from "react";
import ModalEditar from "../components/ModalEditar";
import ModalEliminar from "../components/ModalEliminar";
import ModalInsertar from "../components/ModalInsertar";
import TablaAlumnos from "../components/TablaAlumnos";
import AlumnosItem from "../components/AlumnosItem";
import { getAlumnos } from "../helpers/rutaAlumnos";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ListaAlumnos = () => {
  // A la constate data le asigno el valor que tiene en dataAlumnos
  const dataAlumnos = [
  {
    expediente: 1,
    nombre: "Tom",
    apellido: "Hiddleston ",
    curso: "3° Año",
    estadodecuota: "Al Dia",
    domicilio: "Ecuador 4036",
    contacto: "3816561429",
    dni: "44372965",
  },
  {
    expediente: 2,
    nombre: "Chris",
    apellido: "Evans",
    curso: "1° Año",
    estadodecuota: "Al Dia",
    domicilio: "Paraguay 4036",
    contacto: "3816561430",
    dni: "44372966",
  },
  {
    expediente: 3,
    nombre: "Chris",
    apellido: "Hemsworth",
    curso: "2° Año",
    estadodecuota: "Retrasado",
    domicilio: "Colombia 4036",
    contacto: "3816561431",
    dni: "44372967",
  },
  {
    expediente: 4,
    nombre: "Mark",
    apellido: "Ruffalo",
    curso: "1° Año",
    estadodecuota: "Al Dia",
    domicilio: "Peru 4036",
    contacto: "3816561432",
    dni: "44372968",
  },
  {
    expediente: 5,
    nombre: "Paul",
    apellido: "Rudd",
    curso: "3° Año",
    estadodecuota: "Retrasado",
    domicilio: "Chile 4036",
    contacto: "3816561433",
    dni: "44372969",
  },
  {
    expediente: 6,
    nombre: "Jeremy",
    apellido: "Renner",
    curso: "4° Año",
    estadodecuota: "Al Dia",
    domicilio: "Brasil 4036",
    contacto: "3816561434",
    dni: "44372970",
  },
];

  const [data, setData] = useState(dataAlumnos);
  const Alumnos = () => {
    const [alumnos, setAlumnos] = useState({
      data: {},
      loading: true,
    });

    const [inputValue, setInputValue] = useState("");
    let alumnosFilter = [];
    useEffect(() => {
      getAlumnos().then((datos) => {
        setAlumnos({
          data: datos,
          loading: false,
        });
      });
    }, []);
    
  // if (!alumnos.loading) {
  //   alumnosFilter = alumnos.data.alumnos.filter((alumno) => {
  //     return curso.title.toLowerCase().includes(inputValue.toLowerCase());
  //   });
  // }

    // Controlan cuando se abren y cierran los modales, Esta en falso para que este cerrado hasta que no se lo diga yo
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);

    // Le damos un estado al Alumno seleccionado
    const [AlumnoSeleccionado, setAlumnoSeleccionado] = useState({
      expediente: "",
      nombre: "",
      apellido: "",
      curso: "",
      estadodecuota: "",
      domicilio: "",
      contacto: "",
      dni: "",
    });

    // Le indico que modal tiene que abrir, ya sea editar o dar de baja
    const seleccionarAlumno = (elemento, caso) => {
      setAlumnoSeleccionado(elemento);
      caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
    };

    // Con esto guardo lo que el moderador esta escribiendo en los inputs
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAlumnoSeleccionado((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    //Edita los datos puestos por el Mod y refresca los datos del Modal
    const editar = () => {
      var dataNueva = data;
      dataNueva.map((alumno) => {
        if (alumno.expediente === AlumnoSeleccionado.expediente) {
          alumno.curso = AlumnoSeleccionado.curso;
          alumno.estadodecuota = AlumnoSeleccionado.estadodecuota;
          alumno.nombre = AlumnoSeleccionado.nombre;
          alumno.apellido = AlumnoSeleccionado.apellido;
          alumno.domicilio = AlumnoSeleccionado.domicilio;
          alumno.contacto = AlumnoSeleccionado.contacto;
          alumno.dni = AlumnoSeleccionado.dni;
        }
      });
      setData(dataNueva);
      setModalEditar(false);
    };

    //Elimina unicamente a los alumnos que no estan seleccionados
    const eliminar = () => {
      setData(
        data.filter(
          (alumno) => alumno.expediente !== AlumnoSeleccionado.expediente
        )
      );
      setModalEliminar(false);
    };

    //Abre el modal para crear un Perfil de un Alumno y limpia la data del Alumno seleccionado
    const abrirModalInsertar = () => {
      setAlumnoSeleccionado(null);
      setModalInsertar(true);
    };

    //Crean un nuevo perfil de alumno
    const insertar = () => {
      var valorInsertar = AlumnoSeleccionado;
      valorInsertar.expediente = data[data.length - 1].expediente + 1;
      var dataNueva = data;
      dataNueva.push(valorInsertar);
      setData(dataNueva);
      setModalInsertar(false);
    };

    return (
      <div className="App container mt-2">
        <h2>Lista de Alumnos</h2>
        <hr /> 
        {!alumnos.loading && (
          <div className="row">
            {alumnosFilter.map((alumno) => {
              return <AlumnosItem key={alumno._id} alumno={alumno} />;
            })}
          </div>
        )}


        <div className="botonCrear">
          <button
            className="btn btn-success"
            onClick={() => abrirModalInsertar()}
          >
            Crear Perfil de Alumno
          </button>
        </div>
        <br />
        <br />

        <TablaAlumnos data={data} seleccionarAlumno={seleccionarAlumno} />

        <ModalEditar
          modalEditar={modalEditar}
          setModalEditar={setModalEditar}
          AlumnoSeleccionado={AlumnoSeleccionado}
          handleChange={handleChange}
          editar={editar}
        />

        <ModalEliminar
          modalEliminar={modalEliminar}
          setModalEliminar={setModalEliminar}
          AlumnoSeleccionado={AlumnoSeleccionado}
          eliminar={eliminar}
        />

        <ModalInsertar
          modalInsertar={modalInsertar}
          setModalInsertar={setModalInsertar}
          AlumnoSeleccionado={AlumnoSeleccionado}
          handleChange={handleChange}
          insertar={insertar}
          data={data}
        />
      </div>
    );
  };
};

export default ListaAlumnos;

// const dataAlumnos = [
//   {
//     expediente: 1,
//     nombre: "Tom",
//     apellido: "Hiddleston ",
//     curso: "3° Año",
//     estadodecuota: "Al Dia",
//     domicilio: "Ecuador 4036",
//     contacto: "3816561429",
//     dni: "44372965",
//   },
//   {
//     expediente: 2,
//     nombre: "Chris",
//     apellido: "Evans",
//     curso: "1° Año",
//     estadodecuota: "Al Dia",
//     domicilio: "Paraguay 4036",
//     contacto: "3816561430",
//     dni: "44372966",
//   },
//   {
//     expediente: 3,
//     nombre: "Chris",
//     apellido: "Hemsworth",
//     curso: "2° Año",
//     estadodecuota: "Retrasado",
//     domicilio: "Colombia 4036",
//     contacto: "3816561431",
//     dni: "44372967",
//   },
//   {
//     expediente: 4,
//     nombre: "Mark",
//     apellido: "Ruffalo",
//     curso: "1° Año",
//     estadodecuota: "Al Dia",
//     domicilio: "Peru 4036",
//     contacto: "3816561432",
//     dni: "44372968",
//   },
//   {
//     expediente: 5,
//     nombre: "Paul",
//     apellido: "Rudd",
//     curso: "3° Año",
//     estadodecuota: "Retrasado",
//     domicilio: "Chile 4036",
//     contacto: "3816561433",
//     dni: "44372969",
//   },
//   {
//     expediente: 6,
//     nombre: "Jeremy",
//     apellido: "Renner",
//     curso: "4° Año",
//     estadodecuota: "Al Dia",
//     domicilio: "Brasil 4036",
//     contacto: "3816561434",
//     dni: "44372970",
//   },
// ];
