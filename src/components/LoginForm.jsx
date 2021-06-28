import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../helpers/rutaUsuarios";
import { Link } from "react-router-dom";
import "../css/login.css";

const LoginForm = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState({
    data: { ok: null },
    loading: false,
  });

  useEffect(() => {
    if (user.data.ok) {
      localStorage.setItem("token", JSON.stringify(user.data.token));
      localStorage.setItem("id", JSON.stringify(user.data.usuario._id));
      localStorage.setItem("usuario", JSON.stringify(user.data.usuario.nombre));

      history.push("./home");
    }
  }, [user, history]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      loading: true,
    });

    postLogin(formValues).then((datos) => {
      setUser(datos);
    });
    setFormValues({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email">Correo electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su correo electrónico"
            className="form-control"
            name="email"
            value={formValues.email}
            onChange={handleChange}
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
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button
          type="submit"
          className="btn btn-warning btn-block ingresar"
          disabled={user.loading}
        >
          Iniciar
        </button>
        <Link>
          <p className="mt-4">Olvidaste tu contraseña?</p>
        </Link>
        {/* <button className="btn btn-info btn-block registrarse">
                <a href="">Registrarse</a>
              </button> */}
      </form>
      {user.data.ok === false && (
        <div className="alert alert-danger mt-3 text-center" role="alert">
          {user.data.err.message}
        </div>
      )}
    </>
  );
};

export default LoginForm;
