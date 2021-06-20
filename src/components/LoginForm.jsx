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

      history.push("./");
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
      
          
              <form onSubmit={handleSubmit} id="btnSubmit">
                <div className="form-group">
                  <label className="text-muted" for="email">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    autocomplete="off"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="text-muted">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="Ingrese su contraseña"
                    required
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
              </form>
              {user.data.ok === false && (
                <div
                  className="alert alert-danger mt-3 text-center"
                  role="alert"
                >
                  {user.data.err.message}
                </div>
              )}
            
        
    </>
  );
};

export default LoginForm;
