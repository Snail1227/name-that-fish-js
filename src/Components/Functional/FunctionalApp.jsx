import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from 'react';

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [guessFishName, setGuessFishName] = useState('');

  return ( 
    <>
      <FunctionalScoreBoard 
        correctCount={correctCount} 
        incorrectCount={incorrectCount}
        />
      <FunctionalGameBoard 
        correctCount={correctCount} 
        setCorrectCount={setCorrectCount}
        incorrectCount={incorrectCount}
        setIncorrectCount={setIncorrectCount}
        guessFishName={guessFishName}
        setGuessFishName={setGuessFishName}
        />
      {false && <FunctionalFinalScore />}
    </>
  );
}
