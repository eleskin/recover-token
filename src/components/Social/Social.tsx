import styles from './Social.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faTelegramPlane, faMediumM, faEthereum} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className={styles.Social}>
      <a
        href="https://twitter.com/RecoverToken"
        className={styles.Social__link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a
        href="https://t.me/recovertoken/"
        className={styles.Social__link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTelegramPlane}/>
      </a>
      <a
        href="https://recovertoken.medium.com/"
        className={styles.Social__link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faMediumM}/>
      </a>
      <a
        href="https://bscscan.com/address/0x26D4552879CdCc32599E2Ff1c1e2A438d5c5323e"
        className={styles.Social__link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEthereum}/>
      </a>
    </div>
  );
};

export default Social;
