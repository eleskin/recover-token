import styles from '../Views.module.css';

import Social from '../../components/Social/Social';
import Title from '../../components/Content/Title/Title';

const About = () => {
  return (
    <div className={styles.View}>
      <h2 className={styles.View__title}>About stats</h2>
      <div className={styles.View__content}>
        <Title value="RecoverToken Global Statistics"/>
        <div className={styles.View__container}>
          <div className={styles.View__stats}>
            <span>
              [Safe Stake Pool: <i>501477.94116610421875</i>]
            </span>
            <span>
              [Risky Stake Pool: <i>503224.442710094300325863</i>]
            </span>
            <span>
              [RCVR Next Claim Date: <i>x/x/x</i>]
            </span>
            <span>
              [Number of claims: <i>0</i>]
            </span>
            <span>
              [Last Safe Rebase(Valid Change): <i>04/05/2021, 14:18:00</i>]
            </span>
            <span>
              [Last Risky Rebase(Valid Change): <i>04/05/2021, 14:30:39</i>]
            </span>
          </div>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default About;
