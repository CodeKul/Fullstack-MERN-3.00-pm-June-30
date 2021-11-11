import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Game() {
  const history = useHistory();
  console.log(history);
  const [guess, setAnswer] = useState("");
  const [isCorrect, setCorrect] = useState(true);
  const element = <h3>Wrong</h3>;
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleClick = () => {
    if (guess === "React") {
      history.push("/result");
    } else {
      setCorrect(!isCorrect);
    }
  };
  return (
    <div>
      <h1>Guessing game</h1>
      <div>
        <label>
          <b>Name a frontend Library</b>
        </label>
      </div>
      <label htmlFor="guessLabel">Guess your Answer</label>
      <br />
      <input type="text" value={guess} onChange={handleChange} />

      <button onClick={handleClick}>Check Answer</button>

      <h3>{!isCorrect && element}</h3>
    </div>
  );
}

export default Game;
