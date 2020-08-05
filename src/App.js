import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/Results";
import Questions from "./pages/questions";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/results" component={Results}></Route>
        <Route exact path="/questions/:id" component={Questions}></Route>
      </Switch>
    </Router>
  );
}

export default App;
