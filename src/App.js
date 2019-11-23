import React from "react";
import "./App.css";
import GameList from "./components/GameList.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-profile">Profile</Link>
            </li>
            <li>
              <Link to="/user-profile/Philaam">Philippe</Link>
            </li>
            <li>
              <Link to="/user-profile/laurentmahieu">Laurent</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <GameList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
