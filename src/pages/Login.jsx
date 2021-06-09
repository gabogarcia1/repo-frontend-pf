import React from "react";
// import LoginForm from "../components/LoginForm";

import "../css/login.css";
const Login = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-md-6 offset-md-3 box formulario">
            <h1 className="mt-3">Iniciar Sesion</h1>
            <form id="btnSubmit">
              <div className="form-group">
                <label for="email">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="form-group">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>

              <button type="submit" className="btn btn-info btn-block ingresar">
                Iniciar
              </button>
              <button className="btn btn-info btn-block registrarse">
                <a href="registro.html">Registrarse</a>
              </button>
            </form>
            <div className="mt-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
