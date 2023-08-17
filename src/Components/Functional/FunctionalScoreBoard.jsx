import "./styles/score-board.css";

//  Where the score is presented

let incorrectCount = 0;
let correctCount = 0;

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard( {fish} ) {

  if (fish) {
    answersLeft.splice(0, 1);
    if (fish == answersLeft[0]) {
      correctCount++;
    } else if(fish != answersLeft[0]) {
      incorrectCount++;
    }
  }

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
