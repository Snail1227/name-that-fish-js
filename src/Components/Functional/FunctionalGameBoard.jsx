import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna, 
  },
  {
    name: "shark",
    url: Images.shark,
  },
];


export function FunctionalGameBoard( {setFishName} ) {
  const [guessFishName, setGuessFishName] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  
  const nextFishToName = initialFishes[guessCount];

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setGuessFishName(event.target.value);

    if (guessFishName == nextFishToName.name) {
      console.log("i wrote RIGHT " + guessFishName);
      setGuessCount((prevCount) => prevCount + 1);
      setFishName(guessFishName);
    } else if(guessFishName != nextFishToName.name) {
      console.log("i wrote WRONG " + guessFishName);
      setGuessCount((prevCount) => prevCount + 1);
      setFishName(-1);
    }
    setGuessFishName('');
  }

  
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
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
