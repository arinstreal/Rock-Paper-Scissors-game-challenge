import { FC, useState } from "react";
import styles from "./SelectionPanel.module.scss";
import { GESTURES_TYPES } from "../../constants";
import SelectionMode from "./SelectionMode";
import ResultsMode from "../ResultsMode/ResultsMode";

interface ISelectionPanel {
  addPoint: () => void;
  resetGame: () => void;
}

const SelectionPanel: FC<ISelectionPanel> = ({addPoint, resetGame}: ISelectionPanel) => {
  const [userChoice, setUserChoice] = useState<GESTURES_TYPES | null>(null);

  const handleResetUserChoice = () => {
    setUserChoice(null);
  }

  return (
    <div className={styles.selectionPanel}>
      {
        userChoice ?
          <ResultsMode userChoice={userChoice} resetUserChoice={handleResetUserChoice} addUserPoint={addPoint}/> :
          <SelectionMode setUserChoice={setUserChoice}/>
      }
    </div>
  )
}

export default SelectionPanel;