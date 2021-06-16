import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ListaAlumnos = () => {
  const dataPaises = [
    { numerodeexpediente: 1, nombre: "Josh", minutos: 241 },
    { numerodeexpediente: 2, nombre: "Josh", minutos: 225 },
    { numerodeexpediente: 3, nombre: "Josh", minutos: 216 },
    { numerodeexpediente: 4, nombre: "Josh", minutos: 216 },
    { numerodeexpediente: 5, nombre: "Josh", minutos: 207 },
    { numerodeexpediente: 6, nombre: "Josh", minutos: 195 },
    { numerodeexpediente: 7, nombre: "Josh", minutos: 191 },
    { numerodeexpediente: 8, nombre: "Josh", minutos: 190 },
    { numerodeexpediente: 9, nombre: "Josh", minutos: 190 },
    { numerodeexpediente: 10, nombre: "Josh", minutos: 186 },
  ];

  const [data, setData] = useState(dataPaises);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [paisSeleccionado, setPaisSeleccionado] = useState({
    numerodeexpediente: "",
    nombre: "",
    minutos: "",
  });

  const seleccionarPais = (elemento, caso) => {
    setPaisSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaisSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    var dataNueva = data;
    dataNueva.map((pais) => {
      if (pais.numerodeexpediente === paisSeleccionado.numerodeexpediente) {
        pais.minutos = paisSeleccionado.minutos;
        pais.nombre = paisSeleccionado.nombre;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setData(
      data.filter(
        (pais) =>
          pais.numerodeexpediente !== paisSeleccionado.numerodeexpediente
      )
    );
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setPaisSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = paisSeleccionado;
    valorInsertar.numerodeexpediente =
      data[data.length - 1].numerodeexpediente + 1;
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
            <th>Estado de Cuota</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.numerodeexpediente}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.minutos}</td>
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
            <h3>Editar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>numerodeexpediente</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="numerodeexpediente"
              value={paisSeleccionado && paisSeleccionado.numerodeexpediente}
            />
            <br />

            <label>País</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={paisSeleccionado && paisSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />

            <label>Minutos</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={paisSeleccionado && paisSeleccionado.minutos}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
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
          Estás Seguro que deseas eliminar el país{" "}
          {paisSeleccionado && paisSeleccionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>numerodeexpediente</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="numerodeexpediente"
              value={data[data.length - 1].numerodeexpediente + 1}
            />
            <br />

            <label>País</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={paisSeleccionado ? paisSeleccionado.nombre : ""}
              onChange={handleChange}
            />
            <br />

            <label>Minutos</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={paisSeleccionado ? paisSeleccionado.minutos : ""}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar()}>
            Insertar
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
