import React from "react";
import axios from "axios";

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
        test
        {this.state.games.map(game => {
          return (
            <div>
              <h4>{game.name}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GameList;
