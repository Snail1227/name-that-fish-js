import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
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

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;

  const newList = initialFishes.slice(fishIndex);
  const answersLeft = newList.map((fish) => fish.name);

  const isGameOver = fishIndex == initialFishes.length;
  
  const handleAnswer = (answer) => {
    if (initialFishes[fishIndex].name === answer) {
      setCorrectCount(correctCount + 1);
    } else{
      setIncorrectCount(incorrectCount + 1);
    }
  }


  return ( 
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard 
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard 
            fishData={initialFishes[fishIndex]}
            handleAnswer={handleAnswer}
          />
        </>
      )}
      {isGameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
        )}
    </>
  );
}
