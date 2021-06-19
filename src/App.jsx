import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Califications from "./pages/Califications";
import ListaAlumnos from "./pages/ListaAlumnos";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/alumnos" component={ListaAlumnos} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
