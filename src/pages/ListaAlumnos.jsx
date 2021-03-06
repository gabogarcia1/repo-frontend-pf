import React, { useState } from "react";
import ModalInfo from "../components/ModalInfo";
import ModalEditar from "../components/ModalEditar";
import ModalEliminar from "../components/ModalEliminar";
import ModalInsertar from "../components/ModalInsertar";
import TablaAlumnos from "../components/TablaAlumnos";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ListaAlumnos = () => {
  const dataAlumnos = [
    {
      expediente: 1,
      nombre: "Tom",
      apellido: "Hiddleston",
      curso: "3° Año",
      estadodecuota: "Cumplido",
      domicilio: "Ecuador 4036",
      contacto: "3816561429",
      dni: "44372965",
      nacimiento: "09/02/81",
    },
    {
      expediente: 2,
      nombre: "Chris",
      apellido: "Evans",
      curso: "1° Año",
      estadodecuota: "Cumplido",
      domicilio: "Paraguay 4036",
      contacto: "3816561430",
      dni: "44372966",
      nacimiento: "13/06/81",
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
      nacimiento: "11/08/83",
    },
    {
      expediente: 4,
      nombre: "Mark",
      apellido: "Ruffalo",
      curso: "1° Año",
      estadodecuota: "Cumplido",
      domicilio: "Peru 4036",
      contacto: "3816561432",
      dni: "44372968",
      nacimiento: "22/11/67",
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
      nacimiento: "06/04/69",
    },
    {
      expediente: 6,
      nombre: "Jeremy",
      apellido: "Renner",
      curso: "4° Año",
      estadodecuota: "Cumplido",
      domicilio: "Brasil 4036",
      contacto: "3816561434",
      dni: "44372970",
      nacimiento: "07/01/71",
    },
  ];

  // A la constate data le asigno el valor que tiene en dataAlumnos
  const [data, setData] = useState(dataAlumnos);

  // Controlan cuando se abren y cierran los modales, Esta en falso para que este cerrado hasta que no se lo diga yo
  const [modalVer, setModalVer] = React.useState(false);
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
    nacimiento: "",
  });

  // Le indico que modal tiene que abrir
  const seleccionarAlumno = (elemento, caso) => {
    setAlumnoSeleccionado(elemento);
    switch (caso) {
      case "Ver":
        setModalVer(true);
        break;
      case "Editar":
        setModalEditar(true);
        break;

      case "Eliminar":
        setModalEliminar(true);
        break;
    }
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
        alumno.nacimiento = AlumnoSeleccionado.nacimiento;
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
      <div className="botonCrear">
        <button
          className="btn btn-warning text-white"
          onClick={() => abrirModalInsertar()}
        >
          Crear Perfil de Alumno
        </button>
      </div>
      <br />
      <br />

      <TablaAlumnos
        data={data}
        seleccionarAlumno={seleccionarAlumno}
        setModalVer={setModalVer}
      />

      <ModalInfo
        modalVer={modalVer}
        setModalVer={setModalVer}
        AlumnoSeleccionado={AlumnoSeleccionado}
      />

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

export default ListaAlumnos;
