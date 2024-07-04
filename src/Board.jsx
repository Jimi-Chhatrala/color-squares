// src/Board.js
import React, { useState, useEffect } from "react";
import Square from "./Square";
import "./App.css";

const Board = () => {
  const [colors, setColors] = useState(Array(9).fill("white"));
  const [clickedIndices, setClickedIndices] = useState([]);
  const [allClicked, setAllClicked] = useState(false);

  const handleSquareClick = (index) => {
    if (!allClicked) {
      const newColors = [...colors];
      newColors[index] = "blue";
      setColors(newColors);
      setClickedIndices((prev) => [...prev, index]);

      if (newColors.every((color) => color === "blue")) {
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
            setColors((prevColors) => {
              const newColors = [...prevColors];
              newColors[index] = "white";
              return newColors;
            });
            i--;
          } else {
            clearInterval(interval);
            setAllClicked(false);
            setClickedIndices([]);
          }
        }, 1000);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [allClicked, clickedIndices]);

  return (
    <div className="board">
      {colors.map((color, index) => (
        <Square
          key={index}
          index={index}
          color={color}
          onClick={handleSquareClick}
        />
      ))}
    </div>
  );
};

export default Board;
