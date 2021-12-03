import { FC } from "react";
import bgTriangle from "../../images/bg-triangle.svg";
import GestureWrapper from "../GestureWrapper/GestureWrapper";
import { GESTURES_TYPES } from "../../constants";


interface ISelectionMode {
  setUserChoice: (choice: GESTURES_TYPES) => void;
}

const SelectionMode: FC<ISelectionMode> = ({setUserChoice}: ISelectionMode) => {

  const handleUserChoice = (choice: GESTURES_TYPES) => {
    setUserChoice(choice);
  }

  return (
    <div>
      <img className="triangle" src={bgTriangle} alt="bgTriangle"/>
      <GestureWrapper onClick={handleUserChoice} type="paper" position={{left: 0, top: 0}}/>
      <GestureWrapper onClick={handleUserChoice} type="scissors" position={{top: 0, right: 0}}/>
      <GestureWrapper onClick={handleUserChoice} type="rock" position={{bottom: 0, left: '30%'}}/>
    </div>
  )
}

export default SelectionMode;