import React from "react";

function Game(props) {
  return (
    <div className="Game">
      <h4>{props.name}</h4>
      Rating : {props.rating}
      <div>
        <img src={props.background_image} />
      </div>
    </div>
  );
}

export default Game;
