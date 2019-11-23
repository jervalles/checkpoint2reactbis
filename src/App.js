import React from "react";
import "./App.css";
import GameList from "./components/GameList.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GameScreens from "./components/GameScreens";
function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/game/:id" component={GameScreens} />
      </Switch>
    </Router>
  );
}

export default App;
