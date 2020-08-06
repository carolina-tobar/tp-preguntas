import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/Results";
import Questions from "./pages/questions";
import Admin from "./pages/admin";
import AgregarCategoria from "./pages/AgregarCategoria";
import AgregarPregunta from "./pages/AgregarPregunta";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/results" component={Results}></Route>
        <Route exact path="/questions/:id" component={Questions}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route
          exact
          path="/admin/agregarcategoria"
          component={AgregarCategoria}
        ></Route>
        <Route
          exact
          path="/admin/agregarpregunta"
          component={AgregarPregunta}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
