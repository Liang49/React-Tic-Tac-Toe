import "./styles.css";
import React, { useState, useEffect } from "react";
import Square from "./Square.js";
import Modal from "./Modal.js";
export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [place, setPlace] = useState("X");
  const [empty, setEmpty] = useState("A Tie, Try Again");
  const [game, setGame] = useState(false);

  const onclick = (i) => {
    console.log(board);
    setBoard(
      board.map((value, index) => {
        if (i === index && value === null) {
          return place;
        }

        return value;
      })
    );

    if (place === "X") {
      setPlace("O");
    }

    if (place === "O") {
      setPlace("X");
    }
  };

  const winCon = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] === board[b] && board[a] === board[c] && board[a] !== null) {
        setGame(true);
        setPlace(board[a]);
        setBoard(Array(9).fill(null));
        setPlace("X");
      }
    }
  };
  const tieCon = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === null) {
        filled = false;
      }
    });

    if (filled) {
      setGame(true);
      setBoard(Array(9).fill(null));
      setPlace("X");
      setPlace("No One");
    }
  };

  useEffect(() => {
    winCon();
    tieCon();
  });
  return (
    <div className="App">
      <h1>Tic Tac Toe </h1>
      <Modal
        close={() => {
          setGame(false);
        }}
        game={game}
        onclose={() => setGame(false)}
        place={place}
      />
      <div className="whole">
        <div className="board">
          <div className="row">
            <Square value={board[0]} onclick={() => onclick(0)} />
            <Square
              value={board[1]}
              onclick={() => {
                onclick(1);
              }}
            />
            <Square value={board[2]} onclick={() => onclick(2)} />
          </div>
          <div className="row">
            <Square value={board[3]} onclick={() => onclick(3)} />
            <Square value={board[4]} onclick={() => onclick(4)} />
            <Square value={board[5]} onclick={() => onclick(5)} />
          </div>
          <div className="row">
            <Square value={board[6]} onclick={() => onclick(6)} />
            <Square value={board[7]} onclick={() => onclick(7)} />
            <Square value={board[8]} onclick={() => onclick(8)} />
          </div>
        </div>
      </div>
    </div>
  );
}
