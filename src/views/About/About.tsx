import styles from '../Views.module.css';

import Social from '../../components/Social/Social';
import Title from '../../components/Content/Title/Title';
import background from '../About/img/stats.png';

interface IAbout {
  totalSafe: number;
  totalRisky: number;
  lastsaferebase: string;
  lastriskyrebase: string;
}

const About = ({totalSafe, totalRisky, lastsaferebase, lastriskyrebase}: IAbout) => {
  return (
    <div className={styles.View} style={{backgroundImage: `url(${background})`}}>
      <h2 className={styles.View__title}>About stats</h2>
      <div className={styles.View__content}>
        <Title value="RecoverToken Global Statistics"/>
        <div className={styles.View__container}>
          <div className={styles.View__stats}>
            <span>
              [Safe Stake Pool: <i>{totalSafe}</i>]
            </span>
            <span>
              [Risky Stake Pool: <i>{totalRisky}</i>]
            </span>
            <span>
              [RCVR Next Claim Date: <i>x/x/x</i>]
            </span>
            <span>
              [Number of claims: <i>0</i>]
            </span>
            <span>
              [Last Safe Rebase(Valid Change): <i>{lastsaferebase}</i>]
            </span>
            <span>
              [Last Risky Rebase(Valid Change): <i>{lastriskyrebase}</i>]
            </span>
          </div>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default About;
