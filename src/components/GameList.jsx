import React from "react";
import Axios from "axios";
import Game from "./Game.jsx";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      changeButton: true
    };
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    Axios.get("https://wild-games.herokuapp.com/api/v1").then(response => {
      const games = response.data;
      this.setState({ games });
    });
  };

  rateGames() {
    const newGames = this.state.games.filter(game => game.rating >= 4.5);
    this.setState({ games: newGames, changeButton: !this.state.changeButton });
  }

  displayAllGames() {
    this.getGames();
    this.setState({ changeButton: !this.state.changeButton });
  }

  render() {
    return (
      <div className="GameList">
        <button
          id="one"
          onClick={
            this.state.changeButton
              ? toto => this.rateGames()
              : roobert => this.displayAllGames()
          }
          className="gameListButton"
        >
          {this.state.changeButton ? "All Games" : "Best games"}
        </button>
        {this.state.games.map(game => {
          return (
            <Game
              name={game.name}
              rating={game.rating}
              background_image={game.background_image}
            />
          );
        })}
      </div>
    );
  }
}

export default GameList;
