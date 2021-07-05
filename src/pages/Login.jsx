import React from "react";
import LoginForm from "../components/LoginForm";
import "../css/login.css";

const Login = () => {
  return (
    <div className="body-login">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 offset-md-3 box formulario">
            <h1 className="mt-3">Iniciar Sesion</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
