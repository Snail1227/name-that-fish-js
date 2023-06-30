import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handelIndexChange = (newIndex) => { 
    setCurrentIndex(newIndex);
  }

  
  return ( 
    <>
      <FunctionalScoreBoard 
        currentIndex={currentIndex}
        />
      <FunctionalGameBoard 
        onIndexChange={handelIndexChange}
        />
      {false && <FunctionalFinalScore />}
    </>
  );
}
