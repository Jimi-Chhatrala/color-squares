import Board from "./Board";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Color Squares</h1>
      <div>
        <p>
          <em>How it works?</em>
          <br />
          This is a simple React application that displays a 3x3 grid of
          squares. Each square can be clicked to change its color from white to
          a different color and display a number indicating the order in which
          it was clicked. Once all squares have been clicked and turned to
          different colors, they will revert back to white one by one in the
          reverse order of the clicks, after a 2-second delay, and the numbers
          will disappear.
        </p>
      </div>
      <Board />
    </div>
  );
};

export default App;
