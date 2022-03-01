import React from "react";
export default function Modal(props) {
  const { place, close } = props;
  if (!props.game) {
    return null;
  }

  return (
    <div
      onClick={() => {
        close();
      }}
      className="modal"
    >
      <h1>Congratulations</h1>
      <h3> {place} Wins</h3>
      <div>
        <button onClick={props.onclose} className="modalclose">
          Play Again
        </button>
      </div>
    </div>
  );
}
