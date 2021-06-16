import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ListaAlumnos = () => {
  const dataPaises = [
    {
      expediente: 1,
      nombreyapellido: "Tom Hiddleston ",
      curso: "3° Año",
      domicilio: "Ecuador 4036",
      contacto: "3816561429",
      dni: "44372965",
    },
    {
      expediente: 2,
      nombreyapellido: "Gugu Mbatha-Raw",
      curso: "1° Año",
      domicilio: "Paraguay 4036",
      contacto: "3816561430",
      dni: "44372966",
    },
    {
      expediente: 3,
      nombreyapellido: "Wunmi Mosaku",
      curso: "2° Año",
      domicilio: "Colombia 4036",
      contacto: "3816561431",
      dni: "44372967",
    },
    {
      expediente: 4,
      nombreyapellido: "Eugene Cordero",
      curso: "1° Año",
      domicilio: "Peru 4036",
      contacto: "3816561432",
      dni: "44372968",
    },
    {
      expediente: 5,
      nombreyapellido: "Tara Strong",
      curso: "3° Año",
      domicilio: "Chile 4036",
      contacto: "3816561433",
      dni: "44372969",
    },
    {
      expediente: 6,
      nombreyapellido: "Owen Wilson",
      curso: "4° Año",
      domicilio: "Brasil 4036",
      contacto: "3816561434",
      dni: "44372970",
    },
  ];

  const [data, setData] = useState(dataPaises);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [AlumnoSeleccionado, setAlumnoSeleccionado] = useState({
    expediente: "",
    nombreyapellido: "",
    curso: "",
  });

  const seleccionarPais = (elemento, caso) => {
    setAlumnoSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumnoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    var dataNueva = data;
    dataNueva.map((pais) => {
      if (pais.expediente === AlumnoSeleccionado.expediente) {
        pais.curso = AlumnoSeleccionado.curso;
        pais.nombreyapellido = AlumnoSeleccionado.nombreyapellido;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setData(
      data.filter((pais) => pais.expediente !== AlumnoSeleccionado.expediente)
    );
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setAlumnoSeleccionado(null);
    setModalInsertar(true);
  };

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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.expediente}</td>
              <td>{elemento.nombreyapellido}</td>
              <td>{elemento.curso}</td>
              <td>
                <button
                  className="btn btn-info"
                  aria-hidden="true"
                  onClick={() => seleccionarPais(elemento, "Editar")}
                >
                  <i class="fa fa-info-circle"></i>
                </button>{" "}
                <button
                  className="btn btn-primary"
                  aria-hidden="true"
                  onClick={() => seleccionarPais(elemento, "Editar")}
                >
                  <i class="fa fa-pencil-square-o"></i>
                </button>{" "}
                <button
                  className="btn btn-danger"
                  aria-hidden="true"
                  onClick={() => seleccionarPais(elemento, "Eliminar")}
                >
                  <i class="fa fa-trash"></i>
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
