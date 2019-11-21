import React from "react";
import axios from "axios";
import Game from "./Game.jsx";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    // Send the request
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      // Extract the DATA from the received response
      .then(({ data }) => {
        console.log("Yay!");
        const results = data;
        console.log(results);
        this.setState({
          games: results
        });
      });
  }

  render() {
    return (
      <div className="GameList">
        {this.state.games.map(game => {
          console.log(game.name);
          return (
            <div>
              <Game
                name={game.name}
                rating={game.rating}
                background_image={game.background_image}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default GameList;