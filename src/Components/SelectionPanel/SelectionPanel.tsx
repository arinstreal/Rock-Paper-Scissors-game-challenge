import { FC } from "react";
import styles from "./SelectionPanel.module.scss";
import bgTriangle from "../../images/bg-triangle.svg";
import GestureWrapper from "../GestureWrapper/GestureWrapper";

interface ISelectionPanel {

}

const SelectionPanel: FC<ISelectionPanel> = ({}: ISelectionPanel) => {
  return (
    <div className={styles.selectionPanel}>
      <div>
        <img className="triangle" src={bgTriangle} alt="bgTriangle"/>
        <GestureWrapper type="paper" position={{left: 0, top: 0}}/>
        <GestureWrapper type="scissor" position={{top: 0, right: 0}}/>
        <GestureWrapper type="rock" position={{bottom: 0, left: '30%'}}/>
      </div>
    </div>
  )
}

export default SelectionPanel;