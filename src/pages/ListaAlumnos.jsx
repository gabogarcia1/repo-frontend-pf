import React, { useState, useEffect } from "react";
import { getAlumnos } from "../helpers/rutaAlumnos";
import ModalInfo from "../components/ModalInfo";
import ModalEditar from "../components/ModalEditar";
import ModalEliminar from "../components/ModalEliminar";
import ModalInsertar from "../components/ModalInsertar";
import TablaAlumnos from "../components/TablaAlumnos";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getAlumnos().then((datos) => {
      setAlumnos({
        data: datos.alumnos,
        loading: false,
      });
      console.log(datos.alumnos);
    });
  }, []);

  let dataAlumnos;
  [dataAlumnos] = [alumnos.data.alumnos];
  console.log(dataAlumnos);

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

      {alumnos.loading === false && (
        <TablaAlumnos
          data={alumnos.data}
          seleccionarAlumno={seleccionarAlumno}
          setModalVer={setModalVer}
        />
      )}

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
