import styles from './Social.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faTelegramPlane, faMediumM, faEthereum} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className={styles.Social}>
      <a
        href="https://twitter.com"
        className={styles.Social__link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a
        href="https://web.telegram.org/"
        className={styles.Social__link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTelegramPlane}/>
      </a>
      <a
        href="https://medium.com/"
        className={styles.Social__link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faMediumM}/>
      </a>
      <a
        href="https://wikipedia.org/wiki/Ethereum"
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
