import styles from './Layout.module.css';

import Navbar from '../Navbar/Navbar';
import Container from '../Container/Container';

import {Switch, Route} from 'react-router-dom';

import Stacking from '../../views/Stacking/Stacking';
import Migration from '../../views/Migration/Migration';
import Paper from '../../views/Paper/Paper';
import About from '../../views/About/About';
import {Dispatch, useState} from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

interface ILayout {
  isVisibleNavbar: boolean;
  setIsVisibleNavbar: Dispatch<boolean>;
}

const Layout = ({isVisibleNavbar}: ILayout) => {
  const [networkId, setNetworkId] = useState('');
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState('');

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        //infuraId: "3e2412ff21a04fa79094facb7e20d56b" // required
      }
    }
  };

  const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions // required
  });

  return (
    <div className={styles.Layout}>
      <Container>
        <div className={isVisibleNavbar ? styles.Layout__grid_active : styles.Layout__grid}>
          <Navbar/>
          <div className={styles.Layout__subgrid}>
            <Switch>
              <Route exact path="/">
                <Stacking
                  networkId={networkId}
                  setNetworkId={setNetworkId}
                  loading={loading}
                  setLoading={setLoading}
                  account={account}
                  setAccount={setAccount}
                  web3Modal={web3Modal}
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
                />
              </Route>
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
