import "./styles/game-board.css";

import { useState } from "react";




export function FunctionalGameBoard( {fishData, handleAnswer} ) {
  const [guessFishName, setGuessFishName] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleAnswer(guessFishName)
    setGuessFishName('');
  }

  
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input 
          type="text" 
          name="fish-guess" 
          value={guessFishName} 
          onChange={(e) => {
            setGuessFishName(e.target.value);
            }}
          />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
