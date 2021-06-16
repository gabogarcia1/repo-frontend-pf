import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ListaAlumnos = () => {
  const dataAlumnos = [
    {
      expediente: 1,
      nombreyapellido: "Tom Hiddleston ",
      curso: "3° Año",
      estadodecuota: "Al Dia",
      domicilio: "Ecuador 4036",
      contacto: "3816561429",
      dni: "44372965",
    },
    {
      expediente: 2,
      nombreyapellido: "Gugu Mbatha-Raw",
      curso: "1° Año",
      estadodecuota: "Al Dia",
      domicilio: "Paraguay 4036",
      contacto: "3816561430",
      dni: "44372966",
    },
    {
      expediente: 3,
      nombreyapellido: "Wunmi Mosaku",
      curso: "2° Año",
      estadodecuota: "Retrasado",
      domicilio: "Colombia 4036",
      contacto: "3816561431",
      dni: "44372967",
    },
    {
      expediente: 4,
      nombreyapellido: "Eugene Cordero",
      curso: "1° Año",
      estadodecuota: "Al Dia",
      domicilio: "Peru 4036",
      contacto: "3816561432",
      dni: "44372968",
    },
    {
      expediente: 5,
      nombreyapellido: "Tara Strong",
      curso: "3° Año",
      estadodecuota: "Retrasado",
      domicilio: "Chile 4036",
      contacto: "3816561433",
      dni: "44372969",
    },
    {
      expediente: 6,
      nombreyapellido: "Owen Wilson",
      curso: "4° Año",
      estadodecuota: "Al Dia",
      domicilio: "Brasil 4036",
      contacto: "3816561434",
      dni: "44372970",
    },
  ];

  // A la constate data le asigno el valor que tiene en dataAlumnos
  const [data, setData] = useState(dataAlumnos);

  // Controlan cuando se abren y cierran los modales, Esta en falso para que este cerrado hasta que no se lo diga yo
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  // Le damos un estado al Alumno seleccionado
  const [AlumnoSeleccionado, setAlumnoSeleccionado] = useState({
    expediente: "",
    nombreyapellido: "",
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
        alumno.nombreyapellido = AlumnoSeleccionado.nombreyapellido;
        alumno.domicilio = AlumnoSeleccionado.domicilio;
        alumno.contacto = AlumnoSeleccionado.contacto;
        alumno.dni = AlumnoSeleccionado.dni;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };

  //Elimina unicamente a los paises que no estan seleccionados
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
    <div className="App container">
      <h2>Lista de Alumnos</h2>
      <hr />
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
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>N° de Expediente</th>
            <th>Nombre y Apellio</th>
            <th>Curso</th>
            <th>Estado de Cuota</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.expediente}</td>
              <td>{elemento.nombreyapellido}</td>
              <td>{elemento.curso}</td>
              <td>{elemento.estadodecuota}<i class="fa fa-exclamation" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true"></i></td>
              <td>
                <button
                  className="btn btn-primary"
                  aria-hidden="true"
                  onClick={() => seleccionarAlumno(elemento, "Editar")}
                >
                  <i className="fa fa-pencil-square-o"></i>
                </button>{" "}
                <button
                  className="btn btn-danger"
                  aria-hidden="true"
                  onClick={() => seleccionarAlumno(elemento, "Eliminar")}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Perfil de Alumno</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>N° de Expediente</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="expediente"
              value={AlumnoSeleccionado && AlumnoSeleccionado.expediente}
            />
            <br />

            <label>Nombre y Apellido</label>
            <input
              className="form-control"
              type="text"
              name="nombreyapellido"
              value={AlumnoSeleccionado && AlumnoSeleccionado.nombreyapellido}
              onChange={handleChange}
            />
            <br />

            <label>Curso</label>
            <input
              className="form-control"
              type="text"
              name="curso"
              value={AlumnoSeleccionado && AlumnoSeleccionado.curso}
              onChange={handleChange}
            />
            <br />

            <label>Domicilio</label>
            <input
              className="form-control"
              type="text"
              name="domicilio"
              value={AlumnoSeleccionado && AlumnoSeleccionado.domicilio}
              onChange={handleChange}
            />
            <br />

            <label>Contacto</label>
            <input
              className="form-control"
              type="text"
              name="contacto"
              value={AlumnoSeleccionado && AlumnoSeleccionado.contacto}
              onChange={handleChange}
            />
            <br />

            <label>DNI</label>
            <input
              className="form-control"
              type="text"
              name="dni"
              value={AlumnoSeleccionado && AlumnoSeleccionado.dni}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-success" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas Dar de Baja al Alumno N°{" "}
          {AlumnoSeleccionado && AlumnoSeleccionado.expediente}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-warning" onClick={() => eliminar()}>
            Aceptar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEliminar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Nuevo Perfil de Alumno</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>N° de Expediente</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="expediente"
              //Le suma 1 al numero de expediente anterior
              value={data[data.length - 1].expediente + 1}
            />
            <br />

            <label>Nombre y Apellido</label>
            <input
              className="form-control"
              type="text"
              name="nombreyapellido"
              value={
                AlumnoSeleccionado ? AlumnoSeleccionado.nombreyapellido : ""
              }
              onChange={handleChange}
            />
            <br />

            <label>Curso</label>
            <input
              className="form-control"
              type="text"
              name="curso"
              value={AlumnoSeleccionado ? AlumnoSeleccionado.curso : ""}
              onChange={handleChange}
            />
            <br />

            <label>Domicilio</label>
            <input
              className="form-control"
              type="text"
              name="domicilio"
              value={AlumnoSeleccionado && AlumnoSeleccionado.domicilio}
              onChange={handleChange}
            />
            <br />

            <label>Contacto</label>
            <input
              className="form-control"
              type="text"
              name="contacto"
              value={AlumnoSeleccionado && AlumnoSeleccionado.contacto}
              onChange={handleChange}
            />
            <br />

            <label>DNI</label>
            <input
              className="form-control"
              type="text"
              name="dni"
              value={AlumnoSeleccionado && AlumnoSeleccionado.dni}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-success" onClick={() => insertar()}>
            Crear
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ListaAlumnos;
