import styles from './Title.module.css';

interface ITitle {
  value: string;
}

const Title = ({value}: ITitle) => {
  return (
    <div className={styles.Title}>
      <h3>{value}</h3>
    </div>
  );
};

export default Title;
