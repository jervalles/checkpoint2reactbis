import React from "react";
import "./App.css";
import GameList from "./components/GameList.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameScreens from "./components/GameScreens";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/Game/:id" component={GameScreens} />
      </Switch>
    </Router>
  );
}

export default App;
