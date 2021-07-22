import styles from './Navbar.module.css';

import {Link, useLocation} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faLayerGroup,
  faExchangeAlt,
  faInfo,
  faHome,
  faMapMarkedAlt,
  faSync
} from '@fortawesome/free-solid-svg-icons';
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
        data-text="Rug Migrator"
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
        data-text="Rug Oracle and Stats"
      >
        <FontAwesomeIcon icon={faInfo}/>
      </Link>
      <Link
        to="/roadmap"
        className={location.pathname === '/roadmap' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="Roadmap"
      >
        <FontAwesomeIcon icon={faMapMarkedAlt}/>
      </Link>
      <Link
        to="/oracle"
        className={location.pathname === '/oracle' ? styles.Navbar__link_active : styles.Navbar__link}
        data-text="Oracle page"
      >
        <FontAwesomeIcon icon={faSync}/>
      </Link>
    </nav>
  );
};

export default Navbar;
