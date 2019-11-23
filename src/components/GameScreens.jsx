import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class GameScreens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: []
    };
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    Axios.get(`https://wild-games.herokuapp.com/api/v1`).then(response => {
      const games = response.data;
      const id = this.props.match.params.id;
      const newGame = games.filter(game => game.id == id);
      this.setState({ game: newGame[0].short_screenshots }, () =>
        console.log(this.state.game)
      );
    });
  };

  render() {
    return (
      <div className="gamePage">
        <Link to={`/`}>Back Home</Link>
        <h1>Screenshots</h1>
        <div>
          {this.state.game.map(screen => {
            return <img src={screen.image} alt="Screenshot"></img>;
          })}
        </div>
      </div>
    );
  }
}
export default GameScreens;
