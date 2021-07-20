import styles from '../Views.module.css';
import background from '../Stacking/img/staking.png';
import Title from '../../components/Content/Title/Title';
import Social from '../../components/Social/Social';
import RoadmapComponent from '../../components/Roadmap/Roadmap';

const Roadmap = () => {
  return (
    <div className={styles.View} style={{backgroundImage: `url(${background})`}}>
      <h2 className={styles.View__title}>Roadmap</h2>
      <div className={styles.View__content}>
        <Title value="Roadmap"/>
        <div className={styles.View__container}>
          <RoadmapComponent
            points={[
              {title: 'Q3 2021', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q4 2021', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q1 2022', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q2 2022', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q3 2022', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q4 2022', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q1 2023', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q2 2023', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q3 2021', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q4 2021', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q1 2022', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q2 2022', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q3 2022', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q4 2022', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q1 2023', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
              {title: 'Q2 2023', text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
            ]}
          />
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Roadmap;
