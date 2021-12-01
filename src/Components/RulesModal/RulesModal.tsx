import { FC } from "react";
import styles from "./RulesModal.module.scss";
import closeIcon from "../../images/icon-close.svg";

interface IRulesModal {
  isOpen?: boolean;
  toggleClose: () => void;
}

const RulesModal: FC<IRulesModal> = ({isOpen, toggleClose}: IRulesModal) => {
  return (
    <div className={`${styles.rulesModal} ${isOpen ? 'open' : ''}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>Rules</span><img alt="close" src={closeIcon}/>
        </div>
      </div>
    </div>
  )
}

export default RulesModal;