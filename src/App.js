import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import 'font-awesome/css/font-awesome.css'

const data = [
  { expediente: 1, nombreyapellido: "Tom Hiddleston ", curso: "3°Año", domicilio: "Ecuador 4036", contacto: "3816561429", dni: "44372965" },
  { expediente: 2, nombreyapellido: "Gugu Mbatha-Raw", curso: "1°Año", domicilio: "Paraguay 4036", contacto: "3816561430", dni: "44372966" },
  { expediente: 3, nombreyapellido: "Wunmi Mosaku", curso: "2°Año", domicilio: "Colombia 4036", contacto: "3816561431", dni: "44372967" },
  { expediente: 4, nombreyapellido: "Eugene Cordero", curso: "1°Año", domicilio: "Peru 4036", contacto: "3816561432", dni: "44372968" },
  { expediente: 5, nombreyapellido: "Tara Strong", curso: "3°Año", domicilio: "Chile 4036", contacto: "3816561433", dni: "44372969" },
  { expediente: 6, nombreyapellido: "Owen Wilson", curso: "4°Año", domicilio: "Brasil 4036", contacto: "3816561434", dni: "44372970" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      expediente: "",
      nombreyapellido: "",
      curso: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.expediente == registro.expediente) {
        arreglo[contador].nombreyapellido = dato.nombreyapellido;
        arreglo[contador].curso = dato.curso;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Dar de Baja al Alumno " + dato.expediente);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.expediente == registro.expediente) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.expediente = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>N° de Expediente</th>
                <th>Nombre y Apellido</th>
                <th>Curso</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.expediente}>
                  <td>{dato.expediente}</td>
                  <td>{dato.nombreyapellido}</td>
                  <td>{dato.curso}</td>
                  <td>
                    <Button color="info" onClick={() => this.mostrarModalActualizar(dato)}><i class="fa fa-search-plus" aria-hidden="true"></i></Button>{" "}
                    <Button
                      color="secondary "
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}><i class="fa fa-trash" aria-hidden="true"></i></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                N° de Expediente:
              </label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.expediente}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre y Apellido:
              </label>
              <input
                className="form-control"
                name="nombreyapellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombreyapellido}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Curso:
              </label>
              <input
                className="form-control"
                name="curso"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.curso}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Domicilio:
              </label>
              <input
                className="form-control"
                name="domicilio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.domicilio}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Contacto:
              </label>
              <input
                className="form-control"
                name="contacto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.contacto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                DNI:
              </label>
              <input
                className="form-control"
                name="dni"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.dni}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>

        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Nuevo Perfil de Alumno</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                N°de Expediente:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre y Apellido:
              </label>
              <input
                className="form-control"
                name="nombreyapellido"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Curso:
              </label>
              <input
                className="form-control"
                name="curso"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Domicilio:
              </label>
              <input
                className="form-control"
                name="domicilio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Contacto:
              </label>
              <input
                className="form-control"
                name="contacto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                DNI:
              </label>
              <input
                className="form-control"
                name="dni"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              onClick={() => this.insertar()}
            >
              Crear
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
