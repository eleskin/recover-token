import styles from '../Views.module.css';
import Social from '../../components/Social/Social';

const Home = () => {
  return (
    <div className={styles.View}>
      <h2 className={styles.View__title}>Recover Token - For the community by the Community</h2>
      <div className={styles.View__content}>
        <div className={styles.View__container}>
          <p
            className={styles.View__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea. Lacus sed viverra tellus in. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Sed libero enim sed faucibus turpis in eu mi bibendum. Sed cras ornare arcu dui vivamus arcu felis bibendum. Tortor at auctor urna nunc id cursus metus. Egestas dui id ornare arcu odio ut sem nulla. Sagittis orci a scelerisque purus semper eget. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Morbi tincidunt ornare massa eget. Integer feugiat scelerisque varius morbi enim. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Consequat interdum varius sit amet mattis vulputate. Aliquam faucibus purus in massa.</p>
          <p
            className={styles.View__text}>Duis tristique sollicitudin nibh sit. Nibh cras pulvinar mattis nunc sed blandit. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Porttitor eget dolor morbi non arcu risus quis varius. Id leo in vitae turpis massa sed elementum. Cras semper auctor neque vitae tempus quam. Sociis natoque penatibus et magnis dis. Hac habitasse platea dictumst vestibulum rhoncus. Malesuada proin libero nunc consequat interdum. Consectetur adipiscing elit ut aliquam purus sit. Euismod quis viverra nibh cras pulvinar mattis. Amet mattis vulputate enim nulla aliquet. Sit amet dictum sit amet justo donec enim. Massa tincidunt nunc pulvinar sapien et ligula. Magnis dis parturient montes nascetur ridiculus mus. Vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
          <p
            className={styles.View__text}>Duis tristique sollicitudin nibh sit. Nibh cras pulvinar mattis nunc sed blandit. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Porttitor eget dolor morbi non arcu risus quis varius. Id leo in vitae turpis massa sed elementum. Cras semper auctor neque vitae tempus quam. Sociis natoque penatibus et magnis dis. Hac habitasse platea dictumst vestibulum rhoncus. Malesuada proin libero nunc consequat interdum. Consectetur adipiscing elit ut aliquam purus sit. Euismod quis viverra nibh cras pulvinar mattis. Amet mattis vulputate enim nulla aliquet. Sit amet dictum sit amet justo donec enim. Massa tincidunt nunc pulvinar sapien et ligula. Magnis dis parturient montes nascetur ridiculus mus.</p>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Home;
