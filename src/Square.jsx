const Square = ({ index, color, onClick }) => {
  const styles = {
    width: "100px",
    height: "100px",
    backgroundColor: color,
    display: "inline-block",
    margin: "5px",
    cursor: "pointer",
  };

  return <div style={styles} onClick={() => onClick(index)} />;
};

export default Square;
