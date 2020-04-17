import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import End from "./components/End/End";
import Game from "./components/Game/Game";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/end" component={End} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
