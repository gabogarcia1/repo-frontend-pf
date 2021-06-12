import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ListaDeEstudiantes from "./pages/ListaDeEstudiantes";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/estudiantes" component={ListaDeEstudiantes} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
