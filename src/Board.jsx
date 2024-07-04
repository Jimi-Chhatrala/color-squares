// src/Board.js
import React, { useState, useEffect } from "react";
import Square from "./Square";
import "./App.css";

const Board = () => {
  const [colors, setColors] = useState(Array(9).fill("white"));
  const [clickedIndices, setClickedIndices] = useState([]);
  const [numbers, setNumbers] = useState(Array(9).fill(null));
  const [allClicked, setAllClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleSquareClick = (index) => {
    if (!allClicked && colors[index] === "white") {
      const newColors = [...colors];
      newColors[index] = "blue";
      setColors(newColors);

      const newNumbers = [...numbers];
      setClickCount((prevCount) => {
        newNumbers[index] = prevCount + 1;
        return prevCount + 1;
      });
      setNumbers(newNumbers);

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
            setNumbers((prevNumbers) => {
              const newNumbers = [...prevNumbers];
              newNumbers[index] = null;
              return newNumbers;
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
      {colors.map((color, index) => (
        <Square
          key={index}
          index={index}
          color={color}
          onClick={handleSquareClick}
          number={numbers[index]}
        />
      ))}
    </div>
  );
};

export default Board;
