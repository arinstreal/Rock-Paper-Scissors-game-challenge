import { FC } from "react";
import styles from "./ScorePanel.module.scss";
import logo from "../../images/logo.svg";

interface IScorePanel {
  score: number;
}

const ScorePanel: FC<IScorePanel> = ({score}: IScorePanel) => {
  return (
    <div className={styles.scorePanel}>
      <img src={logo} alt="logo"/>
      <div className={styles.score}>
        <div>Score</div>
        <div>{score}</div>
      </div>
    </div>
  )
};

export default ScorePanel;