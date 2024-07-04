// src/Board.js
import React, { useState, useEffect } from "react";
import Square from "./Square";
import "./App.css";

const colors = [
  "blue",
  "red",
  "green",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "magenta",
];

const Board = () => {
  const [squares, setSquares] = useState(
    Array(9).fill({ color: "white", number: null })
  );
  const [clickedIndices, setClickedIndices] = useState([]);
  const [allClicked, setAllClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleSquareClick = (index) => {
    if (!allClicked && squares[index].color === "white") {
      const newSquares = [...squares];
      const newColor = colors[clickCount % colors.length];
      newSquares[index] = { color: newColor, number: clickCount + 1 };
      setSquares(newSquares);

      setClickedIndices((prev) => [...prev, index]);
      setClickCount((prevCount) => prevCount + 1);

      if (newSquares.every((square) => square.color !== "white")) {
        setAllClicked(true);
      }
    }
  };

  useEffect(() => {
    if (allClicked) {
      const timeout = setTimeout(() => {
        let i = clickedIndices.length - 1;
        const interval = setInterval(() => {
          if (i >= 0) {
            const index = clickedIndices[i];
            setSquares((prevSquares) => {
              const newSquares = [...prevSquares];
              newSquares[index] = {
                ...newSquares[index],
                color: "white",
                number: null,
              };
              return newSquares;
            });
            i--;
          } else {
            clearInterval(interval);
            setAllClicked(false);
            setClickedIndices([]);
            setClickCount(0);
          }
        }, 1000);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [allClicked, clickedIndices]);

  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          index={index}
          color={square.color}
          number={square.number}
          onClick={handleSquareClick}
        />
      ))}
    </div>
  );
};

export default Board;
