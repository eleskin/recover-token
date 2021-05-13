import styles from './App.module.css';

import liquidity from './contracts/Liquidity.json';
import deadtoken from './contracts/DeadToken.json';
import staking from './contracts/Staking.json';
import rcvr from './contracts/RCVR.json';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Preloader from './components/Preloader/Preloader';

import {BrowserRouter} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';

const App = () => {
  const [isVisibleNavbar, setIsVisibleNavbar] = useState(false);
  const [windowWeb3, setWindowWeb3]: any = useState(null);
  const [account, setAccount] = useState('');
  const [totalSafe, setTotalSafe]: any = useState(501477.94116610421875);
  const [totalRisky, setTotalRisky]: any = useState(503224.442710094300325863);
  const [lastriskyrebase, setLastRiskyRebase]: any = useState('04/05/2021, 14:18:00');
  const [lastsaferebase, setLastSafeRebase]: any = useState('04/05/2021, 14:30:39');
  const [networkId, setNetworkId] = useState('');
  const [lptokenBalance, setlpTokenBalance]: any = useState('');
  const [balance, setBalance]: any = useState(0);
  const [deadtokenBalance, setDeadTokenBalance]: any = useState('');
  const [stakedBalance, setStakedBalance]: any = useState(0);
  const [riskystakedBalance, setRiskyStakedBalance]: any = useState(0);
  const [rewardBalance, setRewardBalance]: any = useState(0);
  const [riskyrewardBalance, setRiskyRewardBalance]: any = useState(0);
  const [locked, setLocked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  let temp: any = '';
  let temp2: any = 0.0;

  useEffect(() => {
    const effectFunc = async () => {
      // const metamaskInstalled = typeof windowWeb3 !== 'undefined'
      if (windowWeb3) {
        const accounts = await windowWeb3.eth.getAccounts();
        if (typeof accounts != 'undefined' && accounts.length > 0) {
          const networkId = await windowWeb3.eth.net.getId();
          if (networkId == '56') {
            const account = accounts[0];
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const rvcContract = await new windowWeb3.eth.Contract(rcvr.abi, rcvr.address);
            const deadTokenContract = await new window.web3.eth.Contract(deadtoken.abi, deadtoken.address);
            const stkcontract = await new window.web3.eth.Contract(staking.abi, staking.address);
            const lpcontract = await new window.web3.eth.Contract(liquidity.abi, liquidity.address);
            const _balance = await rvcContract.methods.balanceOf(account).call();
            const _deadtokenbalance = await deadTokenContract.methods.balanceOf(account).call();
            const _lptokenbalance = await lpcontract.methods.balanceOf(account).call();
            const _stakedBalance = await stkcontract.methods.stakeOf(account, 1).call();
            const _riskystakedBalance = await stkcontract.methods.stakeOf(account, 2).call();
            const _rewardBalance = await stkcontract.methods.rewardOf(account).call();
            const _riskyrewardBalance = await stkcontract.methods.rewardOfRiskyRewards(account).call();
            const _totalSafe = await stkcontract.methods.totalStakes(1).call();
            const _totalRisky = await stkcontract.methods.totalStakes(2).call();
            const _lastsaferebase = await stkcontract.methods.NextRebase(1).call();
            const _lastriskyrebase = await stkcontract.methods.NextRebase(2).call();
            // Convert Unixtimestamps to readable dates
            const safemilliseconds = _lastsaferebase * 1000;
            const sdateObject = new Date(safemilliseconds);
            const safeformatted = sdateObject.toLocaleString();
            const riskymilliseconds = _lastriskyrebase * 1000;
            const rdateObject = new Date(riskymilliseconds);
            const riskyformatted = rdateObject.toLocaleString();
            ////////////////////////////////////////
            temp = web3.utils.fromWei(String(_lptokenbalance), 'ether');
            temp2 = parseInt(temp);
            temp2 = temp2 / 1;
            setAccount(accounts[0]);
            setBalance(web3.utils.fromWei(String(_balance), 'ether'));
            setDeadTokenBalance(web3.utils.fromWei(String(_deadtokenbalance), 'gwei'));
            setlpTokenBalance(temp2);
            setStakedBalance(web3.utils.fromWei(String(_stakedBalance), 'ether'));
            setRiskyStakedBalance(web3.utils.fromWei(String(_riskystakedBalance), 'ether'));
            setRewardBalance(web3.utils.fromWei(String(_rewardBalance), 'ether'));
            setRiskyRewardBalance(web3.utils.fromWei(String(_riskyrewardBalance), 'ether'));
            setTotalRisky(web3.utils.fromWei(String(_totalRisky), 'ether'));
            setTotalSafe(web3.utils.fromWei(String(_totalSafe), 'ether'));
            setLocked(!windowWeb3.currentProvider._state.isUnlocked);
            setNetworkId(networkId);
            setLastSafeRebase(safeformatted);
            setLastRiskyRebase(riskyformatted);
          } else {
            setNetworkId(networkId);
            setBalance(0);
          }
        } else {
          setAccount('');
          setBalance(0);
          setDeadTokenBalance(0);
          setlpTokenBalance(0);
          setStakedBalance(0);
          setTotalRisky(0);
          setTotalSafe(0);
          setRiskyStakedBalance(0);
          setRewardBalance(0);
          setRiskyRewardBalance(0);
          setLocked(!windowWeb3.currentProvider._state.isUnlocked);
        }
        window.ethereum.on('networkChanged', async function (netId: any) {
          const accounts = await windowWeb3.eth.getAccounts();
          if (typeof accounts != 'undefined' && accounts.length > 0) {
            const networkId = await windowWeb3.eth.net.getId();
            console.log(networkId);

            if (networkId == '56') {
              const account = accounts[0];
              const provider = await web3Modal.connect();
              const web3 = new Web3(provider);
              const deadTokenContract = await new window.web3.eth.Contract(deadtoken.abi, deadtoken.address);
              const rvcContract = await new windowWeb3.eth.Contract(rcvr.abi, rcvr.address);
              const stkcontract = await new window.web3.eth.Contract(staking.abi, staking.address);
              const lpcontract = await new window.web3.eth.Contract(liquidity.abi, liquidity.address);
              const _balance = await rvcContract.methods.balanceOf(account).call();
              const _lptokenbalance = await lpcontract.methods.balanceOf(account).call();
              const _deadtokenbalance = await deadTokenContract.methods.balanceOf(account).call();
              const _stakedBalance = await stkcontract.methods.stakeOf(account, 1).call();
              const _riskystakedBalance = await stkcontract.methods.stakeOf(account, 2).call();
              const _rewardBalance = await stkcontract.methods.rewardOf(account).call();
              const _totalSafe = await stkcontract.methods.totalStakes(1).call();
              const _totalRisky = await stkcontract.methods.totalStakes(2).call();
              const _riskyrewardBalance = await stkcontract.methods.rewardOfRiskyRewards(account).call();
              const _lastsaferebase = await stkcontract.methods.NextRebase(1).call();
              const _lastriskyrebase = await stkcontract.methods.NextRebase(2).call();
              // Convert Unixtimestamps to readable dates
              const safemilliseconds = _lastsaferebase * 1000;
              const sdateObject = new Date(safemilliseconds);
              const safeformatted = sdateObject.toLocaleString();
              const riskymilliseconds = _lastriskyrebase * 1000;
              const rdateObject = new Date(riskymilliseconds);
              const riskyformatted = rdateObject.toLocaleString();
              ////////////////////////////////////////
              temp = web3.utils.fromWei(String(_lptokenbalance), 'ether');
              temp2 = parseInt(temp);
              temp2 = temp2 / 1;

              setAccount(accounts[0]);
              setBalance(web3.utils.fromWei(String(_balance), 'ether'));
              setDeadTokenBalance(web3.utils.fromWei(String(_deadtokenbalance), 'gwei'));
              setStakedBalance(web3.utils.fromWei(String(_stakedBalance), 'ether'));
              setRiskyStakedBalance(web3.utils.fromWei(String(_riskystakedBalance), 'ether'));
              setRiskyRewardBalance(web3.utils.fromWei(String(_riskyrewardBalance), 'ether'));
              setlpTokenBalance(temp2);
              setTotalRisky(web3.utils.fromWei(String(_totalRisky), 'ether'));
              setTotalSafe(web3.utils.fromWei(String(_totalSafe), 'ether'));
              setRewardBalance(web3.utils.fromWei(String(_rewardBalance), 'ether'));
              setLocked(!windowWeb3.currentProvider._state.isUnlocked);
              setNetworkId(networkId);
              setLastSafeRebase(safeformatted);
              setLastRiskyRebase(riskyformatted);
              temp2 = parseInt(temp);
              temp2 = temp2 / 1000000000;

            } else {
              setNetworkId(networkId);
              setBalance(0);
              setStakedBalance(0);
              setRewardBalance(0);
              setlpTokenBalance(0);
              setTotalRisky(0);
              setTotalSafe(0);
              setRiskyStakedBalance(0);
              setRiskyRewardBalance(0);
              setDeadTokenBalance(0);
              setLastSafeRebase(0);
              setLastRiskyRebase(0);
            }
          }
          setNetworkId(netId);
        });
        window.ethereum.on('accountsChanged', async function (accounts: any) {
          if (typeof accounts !== 'undefined' && accounts.length > 0) {
            const account = accounts[0];
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            let _balance = 0;
            if (networkId == '56') {
              const deadTokenContract = await new window.web3.eth.Contract(deadtoken.abi, deadtoken.address);
              const rvcContract = await new windowWeb3.eth.Contract(rcvr.abi, rcvr.address);
              const stkcontract = await new window.web3.eth.Contract(staking.abi, staking.address);
              const _stakedBalance = await stkcontract.methods.stakeOf(account, 1).call();
              const _riskystakedBalance = await stkcontract.methods.stakeOf(account, 2).call();
              const _totalSafe = await stkcontract.methods.totalStakes(1).call();
              const _totalRisky = await stkcontract.methods.totalStakes(2).call();
              const _rewardBalance = await stkcontract.methods.rewardOf(account).call();
              const _riskyrewardBalance = await stkcontract.methods.rewardOfRiskyRewards(account).call();
              _balance = await rvcContract.methods.balanceOf(account).call();
              const _deadtokenbalance = await deadTokenContract.methods.balanceOf(account).call();
              const _lastsaferebase = await stkcontract.methods.NextRebase(1).call();
              const _lastriskyrebase = await stkcontract.methods.NextRebase(2).call();
              // Convert Unixtimestamps to readable dates
              const safemilliseconds = _lastsaferebase * 1000;
              const sdateObject = new Date(safemilliseconds);
              const safeformatted = sdateObject.toLocaleString();
              const riskymilliseconds = _lastriskyrebase * 1000;
              const rdateObject = new Date(riskymilliseconds);
              const riskyformatted = rdateObject.toLocaleString();
              ////////////////////////////////////////
              temp = web3.utils.fromWei(String(_deadtokenbalance), 'ether');
              temp2 = parseInt(temp);
              temp2 = temp2 * 100000000;
              setAccount(accounts[0]);
              setStakedBalance(web3.utils.fromWei(String(_stakedBalance), 'ether'));
              setRiskyStakedBalance(web3.utils.fromWei(String(_riskystakedBalance), 'ether'));
              setRewardBalance(web3.utils.fromWei(String(_rewardBalance), 'ether'));
              setBalance(web3.utils.fromWei(String(_balance), 'ether'));
              setDeadTokenBalance(Number(web3.utils.fromWei(String(_deadtokenbalance), 'gwei')) * 10);
              setRiskyRewardBalance(web3.utils.fromWei(String(_riskyrewardBalance), 'ether'));
              setTotalRisky(web3.utils.fromWei(String(_totalRisky), 'ether'));
              setTotalSafe(web3.utils.fromWei(String(_totalSafe), 'ether'));
              setLastSafeRebase(safeformatted);
              setLastRiskyRebase(riskyformatted);

            }
            setAccount(accounts[0]);
            setBalance(web3.utils.fromWei(String(_balance), 'ether'));
            setLocked(!windowWeb3.currentProvider._state.isUnlocked);
          } else {
            setWindowWeb3(null);
            setAccount('');
            setBalance(0);
            setStakedBalance(0);
            setRiskyStakedBalance(0);
            setDeadTokenBalance(0);
            setRewardBalance(0);
            setTotalRisky(0);
            setTotalSafe(0);
            setLocked(true);
            setWindowWeb3(null);
            setLastSafeRebase(0);
            setLastRiskyRebase(0);
          }
        });
      } else {
        try {
          if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);

            setWindowWeb3(new Web3(window.ethereum));
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            // Load account
            const accounts = await window.web3.eth.getAccounts();
            const networkId = await window.web3.eth.net.getId();
            const account = accounts[0];
            let _balance = 0;
            let _stakedBalance = 0;
            let _rewardBalance = 0;
            let _riskyrewardBalance = 0;
            let _riskystakedBalance = 0;
            let _deadtokenbalance = 0;
            let _totalRisky = 0;
            let _totalSafe = 0;
            let _lastsaferebase = 0;
            let _lastriskyrebase = 0;
            if (networkId == '56') {
              const deadTokenContract = await new window.web3.eth.Contract(deadtoken.abi, deadtoken.address);
              const rvcContract = await new windowWeb3.eth.Contract(rcvr.abi, rcvr.address);
              const stkcontract = await new window.web3.eth.Contract(staking.abi, staking.address);
              _balance = await rvcContract.methods.balanceOf(account).call();
              _deadtokenbalance = await deadTokenContract.methods.balanceOf(account).call();
              _rewardBalance = await stkcontract.methods.rewardOf(account).call();
              _riskyrewardBalance = await stkcontract.methods.rewardOfRiskyRewards(account).call();
              _stakedBalance = await stkcontract.methods.stakeOf(account, 1).call();
              _riskystakedBalance = await stkcontract.methods.stakeOf(account, 2).call();
              _totalSafe = await stkcontract.methods.totalStakes(1).call();
              _totalRisky = await stkcontract.methods.totalStakes(2).call();
              _lastsaferebase = await stkcontract.methods.NextRebase(1).call();
              _lastriskyrebase = await stkcontract.methods.NextRebase(2).call();


            }
            // Convert Unixtimestamps to readable dates
            const safemilliseconds = _lastsaferebase * 1000;
            const sdateObject = new Date(safemilliseconds);
            const safeformatted = sdateObject.toLocaleString();
            const riskymilliseconds = _lastriskyrebase * 1000;
            const rdateObject = new Date(riskymilliseconds);
            const riskyformatted = rdateObject.toLocaleString();
            ////////////////////////////////////////
            setAccount(accounts[0]);
            setBalance(web3.utils.fromWei(String(_balance), 'ether'));
            setDeadTokenBalance(Number(web3.utils.fromWei(String(_deadtokenbalance), 'gwei')) * 10);
            setStakedBalance(web3.utils.fromWei(String(_balance), 'ether'));
            setRiskyStakedBalance(web3.utils.fromWei(String(_riskystakedBalance), 'ether'));
            setTotalRisky(web3.utils.fromWei(String(_totalRisky), 'ether'));
            setTotalSafe(web3.utils.fromWei(String(_totalSafe), 'ether'));
            setRewardBalance(web3.utils.fromWei(String(_rewardBalance), 'ether'));
            setRiskyRewardBalance(web3.utils.fromWei(String(_riskyrewardBalance), 'ether'));
            setLocked(!windowWeb3.currentProvider._state.isUnlocked);
            setNetworkId(networkId);
            setLastSafeRebase(safeformatted);
            setLastRiskyRebase(riskyformatted);

          } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            setWindowWeb3(new Web3(window.web3.currentProvider));
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            // Load account
            const accounts = await window.web3.eth.getAccounts();
            const networkId = await window.web3.eth.net.getId();
            const account = accounts[0];
            let _balance = 0;
            let _stakedBalance = 0;
            let _rewardBalance = 0;
            let _totalRisky = 0;
            let _totalSafe = 0;
            let _deadtokenbalance = 0;
            let _riskyrewardBalance = 0;
            let _riskystakedBalance = 0;
            let _lastriskyrebase = 0;
            let _lastsaferebase = 0;
            if (networkId == '56') {
              const deadTokenContract = await new window.web3.eth.Contract(deadtoken.abi, deadtoken.address);
              const rvcContract = await new windowWeb3.eth.Contract(rcvr.abi, rcvr.address);
              const stkcontract = await new window.web3.eth.Contract(staking.abi, staking.address);
              _balance = await rvcContract.methods.balanceOf(account).call();
              _deadtokenbalance = await deadTokenContract.methods.balanceOf(account).call();
              _stakedBalance = await stkcontract.methods.balanceOf(account, 1).call();
              _rewardBalance = await stkcontract.methods.rewardOf(account).call();
              _riskyrewardBalance = await stkcontract.methods.rewardOfRiskyRewards(account).call();
              _riskystakedBalance = await stkcontract.methods.stakeOf(account, 2).call();
              _totalSafe = await stkcontract.methods.totalStakes(1).call();
              _totalRisky = await stkcontract.methods.totalStakes(2).call();
              _lastsaferebase = await stkcontract.methods.NextRebase(1).call();
              _lastriskyrebase = await stkcontract.methods.NextRebase(2).call();

              temp = web3.utils.fromWei(String(_deadtokenbalance), 'ether');
              temp2 = parseInt(temp);
              temp2 = temp2 * 100000000;

            }
            // Convert Unixtimestamps to readable dates

            const safemilliseconds = _lastsaferebase * 1000;
            const sdateObject = new Date(safemilliseconds);
            const safeformatted = sdateObject.toLocaleString();
            const riskymilliseconds = _lastriskyrebase * 1000;
            const rdateObject = new Date(riskymilliseconds);
            const riskyformatted = rdateObject.toLocaleString();
            ////////////////////////////////////////
            setLocked(!windowWeb3.currentProvider._state.isUnlocked);
            setAccount(accounts[0]);
            setBalance(web3.utils.fromWei(String(_balance), 'ether'));
            setNetworkId(networkId);
            setLastSafeRebase(safeformatted);
            setLastRiskyRebase(riskyformatted);
          } else {
            // DO NOTHING...
          }
        } catch (e) {
          console.log(e.message);
        }
      }
    };

    effectFunc();
  }, [windowWeb3]);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 2000);
  }, []);

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
    <BrowserRouter>
      <div className={styles.App}>
        <Header
          isVisibleNavbar={isVisibleNavbar}
          setIsVisibleNavbar={setIsVisibleNavbar}
          windowWeb3={windowWeb3}
          setWindowWeb3={setWindowWeb3}
          web3Modal={web3Modal}
          account={account}
          setAccount={setAccount}
          setTotalSafe={setTotalSafe}
          setTotalRisky={setTotalRisky}
          setLastRiskyRebase={setLastRiskyRebase}
          setLastSafeRebase={setLastSafeRebase}
          networkId={networkId}
          setNetworkId={setNetworkId}
          locked={locked}
          setLocked={setLocked}
          setBalance={setBalance}
          setDeadTokenBalance={setDeadTokenBalance}
          setRewardBalance={setRewardBalance}
          setRiskyRewardBalance={setRiskyRewardBalance}
          setRiskyStakedBalance={setRiskyStakedBalance}
          setStakedBalance={setStakedBalance}
          temp={temp}
          temp2={temp2}
        />
        <Layout
          isVisibleNavbar={isVisibleNavbar}
          setIsVisibleNavbar={setIsVisibleNavbar}
          windowWeb3={windowWeb3}
          setWindowWeb3={setWindowWeb3}
          web3Modal={web3Modal}
          account={account}
          setAccount={setAccount}
          totalSafe={totalSafe}
          totalRisky={totalRisky}
          lastsaferebase={lastsaferebase}
          lastriskyrebase={lastriskyrebase}
          networkId={networkId}
          setNetworkId={setNetworkId}
        />
        {!isLoading && <Preloader/>}
      </div>
    </BrowserRouter>
  );
};

export default App;
