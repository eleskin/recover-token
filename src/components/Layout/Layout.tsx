import styles from './Layout.module.css';

import Navbar from '../Navbar/Navbar';
import Container from '../Container/Container';

import {Switch, Route} from 'react-router-dom';

import Stacking from '../../views/Stacking/Stacking';
import Migration from '../../views/Migration/Migration';
import Paper from '../../views/Paper/Paper';
import About from '../../views/About/About';
import {Dispatch} from 'react';

interface ILayout {
  isVisibleNavbar: boolean;
  setIsVisibleNavbar: Dispatch<boolean>;
}

const Layout = ({isVisibleNavbar}: ILayout) => {
  return (
    <div className={styles.Layout}>
      <Container>
        <div className={isVisibleNavbar ? styles.Layout__grid_active : styles.Layout__grid}>
          <Navbar/>
          <div className={styles.Layout__subgrid}>
            <Switch>
              <Route exact path="/" component={Stacking} />
              <Route exact path="/migration" component={Migration} />
              <Route exact path="/white-paper" component={Paper} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
