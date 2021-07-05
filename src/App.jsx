import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Califications from "./pages/Califications";
import ListaAlumnos from "./pages/ListaAlumnos";
// import ListaAlumnos from "./pages/Alumno";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
            <NavBar />
            <Route exact path="/home" component={Home} />
            <Route exact path="/califications" component={Califications} />
            <Route exact path="/alumnos" component={ListaAlumnos} />
            <Footer />
          </div>
        </Switch>
      </Router>
    </>
  );
};

export default App;
