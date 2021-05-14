import styles from './Layout.module.css';

import Navbar from '../Navbar/Navbar';
import Container from '../Container/Container';

import {Switch, Route, Redirect} from 'react-router-dom';

import Stacking from '../../views/Stacking/Stacking';
import Migration from '../../views/Migration/Migration';
import Paper from '../../views/Paper/Paper';
import About from '../../views/About/About';
import {Dispatch, useState} from 'react';
import Home from '../../views/Home/Home';

interface ILayout {
  isVisibleNavbar: boolean;
  setIsVisibleNavbar: Dispatch<boolean>;
  windowWeb3: any;
  setWindowWeb3: Dispatch<any>;
  web3Modal: any;
  account: string;
  setAccount: Dispatch<string>;
  totalSafe: number;
  totalRisky: number;
  lastsaferebase: string;
  lastriskyrebase: string;
  networkId: string;
  setNetworkId: Dispatch<string>;
  deadtokenBalance: string;
  stakedBalance: number;
  riskystakedBalance: number;
  rewardBalance: number;
  riskyrewardBalance: number;
}

const Layout = ({
                  isVisibleNavbar,
                  windowWeb3,
                  setWindowWeb3,
                  web3Modal,
                  account,
                  setAccount,
                  totalSafe,
                  totalRisky,
                  lastsaferebase,
                  lastriskyrebase,
                  networkId,
                  setNetworkId,
                  deadtokenBalance,
                  stakedBalance,
                  riskystakedBalance,
                  rewardBalance,
                  riskyrewardBalance
                }: ILayout) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.Layout}>
      <Container>
        <div className={isVisibleNavbar ? styles.Layout__grid_active : styles.Layout__grid}>
          <Navbar/>
          <div className={styles.Layout__subgrid}>
            <Switch>
              <Route exact path="/"><Home/></Route>
              <Route exact path="/stacking">
                <Stacking
                  networkId={networkId}
                  setNetworkId={setNetworkId}
                  loading={loading}
                  setLoading={setLoading}
                  account={account}
                  setAccount={setAccount}
                  web3Modal={web3Modal}
                  windowWeb3={windowWeb3}
                  setWindowWeb3={setWindowWeb3}
                  stakedBalance={stakedBalance}
                  riskystakedBalance={riskystakedBalance}
                  rewardBalance={rewardBalance}
                  riskyrewardBalance={riskyrewardBalance}
                />
              </Route>
              <Route exact path="/migration">
                <Migration
                  networkId={networkId}
                  setNetworkId={setNetworkId}
                  loading={loading}
                  setLoading={setLoading}
                  account={account}
                  setAccount={setAccount}
                  web3Modal={web3Modal}
                  deadtokenBalance={deadtokenBalance}
                />
              </Route>
              <Route exact path="/white-paper"><Paper/></Route>
              <Route exact path="/about">
                <About
                  totalSafe={totalSafe}
                  totalRisky={totalRisky}
                  lastsaferebase={lastsaferebase}
                  lastriskyrebase={lastriskyrebase}
                />
              </Route>
              <Route exact path="*"><Redirect to="/"/></Route>
            </Switch>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
