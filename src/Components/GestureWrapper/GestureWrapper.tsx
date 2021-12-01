import { FC } from "react";
import styles from "./GestureWrapper.module.scss";
import paper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";
import scissors from "../../images/icon-scissors.svg";

interface IPosition {
top?: number | string, right?: number | string,
  bottom?: number | string, left?: number | string
}
interface IGestureWrapper {
  type: 'paper' | 'rock' | 'scissor';
  position: IPosition;
}

const GestureWrapper: FC<IGestureWrapper> = ({type, position}: IGestureWrapper) => {
  const image = () => {
    switch (type) {
      case "paper":
        return paper;
      case "rock":
        return rock;
      case "scissor":
        return scissors;
      default:
        return paper;
    }
  }
  return (
    <div className={styles.gestureWrapper} style={position}>
      <img src={image()} alt={type}/>
    </div>
  )
}

export default GestureWrapper;