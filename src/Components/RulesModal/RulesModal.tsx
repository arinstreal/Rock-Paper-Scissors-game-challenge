import { FC } from "react";
import styles from "./RulesModal.module.scss";
import closeIcon from "../../images/icon-close.svg";
import rules from "../../images/image-rules.svg";

interface IRulesModal {
  isOpen?: boolean;
  toggleClose: () => void;
}

const RulesModal: FC<IRulesModal> = ({isOpen, toggleClose}: IRulesModal) => {
  return (
    <div className={`${styles.rulesModal} ${isOpen ? styles.open : ''}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>Rules</span><img className={styles.closeIcon} onClick={toggleClose} alt="close" src={closeIcon}/>
        </div>
        <img alt="rules" src={rules}/>
        <img className={`${styles.closeIcon} ${styles.mobile}`} onClick={toggleClose} alt="close" src={closeIcon}/>
      </div>
    </div>
  )
}

export default RulesModal;