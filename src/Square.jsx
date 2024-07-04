// src/Square.js
import React from "react";

const Square = ({ index, color, onClick, number }) => {
  const styles = {
    width: "100px",
    height: "100px",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    margin: "5px",
  };

  return (
    <div style={styles} onClick={() => onClick(index)}>
      {number !== null && number}
    </div>
  );
};

export default Square;
