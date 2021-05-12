import styles from './Navbar.module.css';

import {Link, useLocation} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLayerGroup, faExchangeAlt, faInfo} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote} from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.Navbar}>
      <Link
        to="/"
        className={location.pathname === '/' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="Stacking LP"
      >
        <FontAwesomeIcon icon={faLayerGroup}/>
      </Link>
      <Link
        to="/migration"
        className={location.pathname === '/migration' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="Migration"
      >
        <FontAwesomeIcon icon={faExchangeAlt}/>
      </Link>
      <Link
        to="/white-paper"
        className={location.pathname === '/white-paper' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="White paper"
      >
        <FontAwesomeIcon icon={faStickyNote}/>
      </Link>
      <Link
        to="/about"
        className={location.pathname === '/about' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="About stats"
      >
        <FontAwesomeIcon icon={faInfo}/>
      </Link>
    </nav>
  );
};

export default Navbar;
