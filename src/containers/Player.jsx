import React from "react";
import "../assets/styles/components/Player.scss";

const Player = (props) => {
  const { id } = props.match.params;
  return (
    <div className="Player">
      <h1>Player</h1>
      <video controls autoPlay="false">
        <source src="" type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regreasar
        </button>
      </div>
    </div>
  );
};

export default Player;
