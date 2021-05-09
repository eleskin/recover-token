import {Dispatch} from 'react';
import styles from './Header.module.css';
import image_logo from '../../assets/images/logo.svg';

import Container from '../Container/Container';
import Button from '../Button/Button';

import {Link} from 'react-router-dom';

interface IHeader {
  isVisibleNavbar: boolean;
  setIsVisibleNavbar: Dispatch<boolean>;
}

const Header = ({isVisibleNavbar, setIsVisibleNavbar}: IHeader) => {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.Header__grid}>
          <div className={isVisibleNavbar ? styles.Header__menu_active : styles.Header__menu}>
            <button onClick={() => setIsVisibleNavbar(!isVisibleNavbar)}/>
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
