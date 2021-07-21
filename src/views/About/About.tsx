import styles from '../Views.module.css';

import Social from '../../components/Social/Social';
import Title from '../../components/Content/Title/Title';
import background from '../About/img/stats.png';

const About = () => {
  return (
    <div className={styles.View} style={{backgroundImage: `url(${background})`}}>
      <h2 className={styles.View__title}>About stats</h2>
      <div className={styles.View__content}>
        <Title value="RecoverToken Global Statistics"/>
        <div className={styles.View__container}>

        </div>
      </div>
      <Social/>
    </div>
  );
};

export default About;
