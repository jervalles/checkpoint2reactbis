import React from "react";
import "../styles/Game.scss";
import { Link } from "react-router-dom";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Game">
        <h4>{this.props.name}</h4>
        <Link to={`/Game/${this.props.id}`}>
          <div>
            <img
              className="backgroundimages"
              src={this.props.background_image}
            />
          </div>
        </Link>
        Rating : {this.props.rating}
        <div></div>
      </div>
    );
  }
}

export default Game;
