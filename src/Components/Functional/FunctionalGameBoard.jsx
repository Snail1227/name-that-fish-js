import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { incorrectCount } from './FunctionalScoreBoard';

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


export function FunctionalGameBoard({guessFishName, setGuessFishName, correctCount, setCorrectCount, incorrectCount, setIncorrectCount}) {

  const handleChanges = (event) => {
    setGuessFishName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (guessFishName.trim() === '') {
      setGuessFishName('');
      return;
    }

    if (guessFishName == nextFishToName.name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    setGuessFishName('');
  }

  const nextFishToName = initialFishes[2];
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={guessFishName} onChange={handleChanges} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
