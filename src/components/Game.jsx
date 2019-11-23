import React from "react";
import "../styles/Game.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GameScreens from "./GameScreens.jsx";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Game">
        <h4>{this.props.name}</h4>
        <div>
          <img className="backgroundimages" src={this.props.background_image} />
        </div>
        Rating : {this.props.rating}
        <div>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/jeu/screenshots/">ScreenShots</Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/jeu/screenshots/:id" component={GameScreens} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default Game;
