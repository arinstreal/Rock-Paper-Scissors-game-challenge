import { FC, useEffect, useState } from "react";
import styles from "./ResultsMode.module.scss";
import GestureWrapper from "../GestureWrapper/GestureWrapper";
import { GESTURES, GESTURES_ARRAY, GESTURES_TYPES, RESULTS } from "../../constants";

interface IResultsMode {
  userChoice: GESTURES_TYPES;
  addUserPoint: () => void;
  resetUserChoice: () => void;
}

const ResultsMode: FC<IResultsMode> = ({userChoice, resetUserChoice, addUserPoint}: IResultsMode) => {
  const [botChoice, setBotChoice] = useState<GESTURES_TYPES | null>(null);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (userChoice) {
      setTimeout(() => {
        const botChoiceTmp = GESTURES_ARRAY[Math.floor(Math.random() * GESTURES_ARRAY.length)];
        // @ts-ignore
        setBotChoice(botChoiceTmp);
      }, 500);
    }
  }, [userChoice]);

  const getWinner = () => {
    if (userChoice === botChoice) {
      setResult(RESULTS.DRAW)
    } else if (
      (userChoice === GESTURES.PAPER && botChoice === GESTURES.ROCK) ||
      (userChoice === GESTURES.ROCK && botChoice === GESTURES.SCISSORS) ||
      (userChoice === GESTURES.SCISSORS && botChoice === GESTURES.ROCK)) {
      setResult(RESULTS.WINNER);
      addUserPoint();
    } else setResult(RESULTS.LOSE);
  }

  useEffect(() => {
    if (botChoice) {
      setTimeout(() => {
        getWinner();
      }, 500);
    }
  }, [botChoice]);

  const handlePlayAgain = () => {
    resetUserChoice();
    setBotChoice(null);
  }

  return (
    <div className={styles.resultsMode}>
      <div>
        <span>You picked</span>
        <GestureWrapper type={userChoice}/>
      </div>
      <div>
        <div>{result}</div>
        <button onClick={handlePlayAgain}>Play again</button>
      </div>
      <div>
        <span>The house picked</span>
        {
          botChoice ? <GestureWrapper type={botChoice}/> : <div className={styles.generateChoice}/>
        }
      </div>
    </div>
  )
}

export default ResultsMode;