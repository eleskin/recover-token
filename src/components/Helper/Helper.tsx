import styles from './Helper.module.css';

interface IHelper {
  text: string;
}

const Helper = ({text}: IHelper) => {
  return (
    <div className={styles.Helper}>
      <span className={styles.Helper__title}>Help</span>
      <div className={styles.Helper__text}>{text}</div>
    </div>
  );
};

export default Helper;
