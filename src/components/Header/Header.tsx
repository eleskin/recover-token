import styles from './Header.module.css';
import image_logo from '../../assets/images/logo.svg';

import Container from '../Container/Container';
import Button from '../Button/Button';

import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.Header__grid}>
          <div className={styles.Header__menu}>
            <button/>
          </div>
          <div className={styles.Header__logo}>
            <Link to="/"><img src={image_logo} alt=""/></Link>
          </div>
          <div className={styles.Header__button}>
            <Button>Connect</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
