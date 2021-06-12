import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
