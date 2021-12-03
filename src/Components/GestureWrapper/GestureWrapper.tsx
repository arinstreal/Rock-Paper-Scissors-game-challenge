import { FC, useMemo } from "react";
import styles from "./GestureWrapper.module.scss";
import paper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";
import scissors from "../../images/icon-scissors.svg";
import { GESTURES, GESTURES_TYPES } from "../../constants";

interface IPosition {
  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  left?: number | string
}

interface IGestureWrapper {
  type: GESTURES_TYPES;
  position?: IPosition;
  onClick?: (choice: GESTURES_TYPES) => void;
}

const GestureWrapper: FC<IGestureWrapper> = ({type, position, onClick}: IGestureWrapper) => {
  const typeStyle = useMemo(() => {
    switch (type) {
      case GESTURES.PAPER:
        return {image: paper, className: styles.paper};
      case GESTURES.ROCK:
        return {image: rock, className: styles.rock};
      case GESTURES.SCISSORS:
        return {image: scissors, className: styles.scissors};
      default:
        return {image: paper, className: styles.paper};
    }
  }, [type]);

  const handleOnClick = () => {
    onClick && onClick(type);
  }

  return (
    <div
      className={`${styles.gestureWrapper} ${typeStyle.className}`} style={position}
      {...handleOnClick && {onClick: handleOnClick}}
    >
      <img src={typeStyle.image} alt={type}/>
    </div>
  )
}

export default GestureWrapper;