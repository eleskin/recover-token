import styles from '../Views.module.css';

import Social from '../../components/Social/Social';

const Paper = () => {
  return (
    <div className={styles.View}>
      <h2 className={styles.View__title}>White paper</h2>
      <Social/>
    </div>
  );
};

export default Paper;
