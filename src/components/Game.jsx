import React from "react";
import "../styles/Game.scss";

function Game(props) {
  return (
    <div className="Game">
      <h4>{props.name}</h4>
      <div>
        <img className="backgroundimages" src={props.background_image} />
      </div>
      Rating : {props.rating}
      <div></div>
    </div>
  );
}

export default Game;
