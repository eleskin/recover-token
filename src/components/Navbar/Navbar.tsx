import styles from './Navbar.module.css';

import {Link, useLocation} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLayerGroup, faExchangeAlt, faInfo, faHome} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote} from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.Navbar}>
      <Link
        to="/"
        className={location.pathname === '/' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="Home"
      >
        <FontAwesomeIcon icon={faHome}/>
      </Link>
      <Link
        to="/stacking"
        className={location.pathname === '/stacking' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="Staking Management"
      >
        <FontAwesomeIcon icon={faLayerGroup}/>
      </Link>
      <Link
        to="/migration"
        className={location.pathname === '/migration' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="Migration Management"
      >
        <FontAwesomeIcon icon={faExchangeAlt}/>
      </Link>
      <Link
        to="/white-paper"
        className={location.pathname === '/white-paper' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="RCVR White Paper"
      >
        <FontAwesomeIcon icon={faStickyNote}/>
      </Link>
      <Link
        to="/about"
        className={location.pathname === '/about' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="RCVR Statistics"
      >
        <FontAwesomeIcon icon={faInfo}/>
      </Link>
    </nav>
  );
};

export default Navbar;
