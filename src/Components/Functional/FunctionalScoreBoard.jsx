import "./styles/score-board.css";
//  Where the score is presented

const incorrectCount = 0;
const correctCount = 0;
let newCorrectCount = 0;
const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({ currentIndex }) {

  console.log(!currentIndex);
  if (currentIndex) {
    const newCorrectCount = correctCount + 1;
    answersLeft.slice(currentIndex, 1);
    return newCorrectCount;
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
      <div>Correct ✅: {newCorrectCount}</div>
    </div>
  );
}
