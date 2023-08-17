import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [fishIndex, setFishIndex] = useState('');
  const [fishName, setFishName] = useState('');


  return ( 
    <>
      <FunctionalScoreBoard 
        index={fishIndex}
        fish={fishName}
        />
      <FunctionalGameBoard 
        setFishIndex={(i) => setFishIndex(i)}
        setFishName={(f) => setFishName(f)}
        />
      {false && <FunctionalFinalScore />}
    </>
  );
}
