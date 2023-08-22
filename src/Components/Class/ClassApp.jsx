import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

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

export class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctCount: 0,
      incorrectCount: 0,
    };
  }

  handleAnswer = (answer) => {
    const fishIndex = this.state.correctCount + this.state.incorrectCount;
    if (initialFishes[fishIndex].name === answer) {
      this.setState(prevState => ({ correctCount: prevState.correctCount + 1 }));
    } else {
      this.setState(prevState => ({ incorrectCount: prevState.incorrectCount + 1 }));
    }
  }

  render() {
    const { correctCount, incorrectCount } = this.state;
    const fishIndex = correctCount + incorrectCount;
    const newList = initialFishes.slice(fishIndex);
    const answersLeft = newList.map((fish) => fish.name);
    const isGameOver = fishIndex === initialFishes.length;

    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard 
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard 
              fishData={initialFishes[fishIndex]}
              handleAnswer={this.handleAnswer}
            />
          </>
        )}
        {isGameOver && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
