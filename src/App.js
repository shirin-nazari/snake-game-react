import React, { useState } from "react";
import Snake from "./Snake";
import Food from "./Food";
const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1)) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1)) / 2) * 2;
  return [x, y];
};
function App() {
  const [state] = useState({
    food: getRandomCoordinates(),
    snakeDots: [
      [0, 0],
      [2, 0],
    ],
  });
  return (
    <div className="game-area">
      <Snake snakeDots={state.snakeDots} />
      <Food dot={state.food} />
    </div>
  );
}

export default App;
