import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "../css/listaDeAlumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const ListaAlumnos = () => {
  const dataPaises = [
    { id: 1, nombre: "Filipinas", minutos: 241 },
    { id: 2, nombre: "Brasil", minutos: 225 },
    { id: 3, nombre: "Colombia", minutos: 216 },
    { id: 4, nombre: "Nigeria", minutos: 216 },
    { id: 5, nombre: "Argentina", minutos: 207 },
    { id: 6, nombre: "Indonesia", minutos: 195 },
    { id: 7, nombre: "Emiratos Árabes Unidos", minutos: 191 },
    { id: 8, nombre: "México", minutos: 190 },
    { id: 9, nombre: "Sudáfrica", minutos: 190 },
    { id: 10, nombre: "Egipto", minutos: 186 },
  ];

  const [data, setData] = useState(dataPaises);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [paisSeleccionado, setPaisSeleccionado] = useState({
    id: "",
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
      if (pais.id === paisSeleccionado.id) {
        pais.minutos = paisSeleccionado.minutos;
        pais.nombre = paisSeleccionado.nombre;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setData(data.filter((pais) => pais.id !== paisSeleccionado.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setPaisSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = paisSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  };

  return (
    <div className="App container">
      <h2>Lista de Alumnos</h2>
      <hr />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Crear Perfil de Alumno
      </button>
      <br />
      <br />
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>N° de Expediente</th>
            <th>Nombre y Apellido</th>
            <th>Estado de Cuota</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.minutos}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => seleccionarPais(elemento, "Editar")}
                >
                  <i class="fa fa-info-circle" aria-hidden="true"></i>
                </button>{" "}
                <button
                  className="btn btn-primary"
                  onClick={() => seleccionarPais(elemento, "Editar")}
                >
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => seleccionarPais(elemento, "Eliminar")}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
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
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={paisSeleccionado && paisSeleccionado.id}
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
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length - 1].id + 1}
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
