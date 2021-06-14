import {Dispatch} from 'react';
import styles from './Header.module.css';
import image_logo from '../../assets/images/logo.svg';

import Container from '../Container/Container';
import Button from '../Button/Button';

import rcvr from '../../contracts/RCVR.json';
import deadtoken from '../../contracts/DeadToken.json';
import staking from '../../contracts/Staking.json';

import {Link} from 'react-router-dom';
import Web3 from 'web3';

interface IHeader {
  isVisibleNavbar: boolean;
  setIsVisibleNavbar: Dispatch<boolean>;
  windowWeb3: any;
  setWindowWeb3: Dispatch<any>;
  web3Modal: any;
  account: string;
  setAccount: Dispatch<string>;
  setTotalSafe: Dispatch<any>;
  setTotalRisky: Dispatch<any>;
  setLastRiskyRebase: Dispatch<any>;
  setLastSafeRebase: Dispatch<any>;
  networkId: string;
  setNetworkId: Dispatch<string>;
  temp: any;
  temp2: number;
  setBalance: Dispatch<any>;
  setDeadTokenBalance: Dispatch<any>;
  setStakedBalance: Dispatch<any>;
  setRiskyStakedBalance: Dispatch<any>;
  setRewardBalance: Dispatch<any>;
  setRiskyRewardBalance: Dispatch<any>;
  locked: boolean;
  setLocked: Dispatch<boolean>;
}

const Header = ({
                  isVisibleNavbar,
                  setIsVisibleNavbar,
                  windowWeb3,
                  setWindowWeb3,
                  web3Modal,
                  account,
                  setAccount,
                  setTotalSafe,
                  setTotalRisky,
                  setLastRiskyRebase,
                  setLastSafeRebase,
                  networkId,
                  setNetworkId,
                  temp,
                  temp2,
                  setBalance,
                  setDeadTokenBalance,
                  setStakedBalance,
                  setRiskyStakedBalance,
                  setRewardBalance,
                  setRiskyRewardBalance,
                  locked,
                  setLocked
                }: IHeader) => {

  const loadWeb3 = async () => {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        setWindowWeb3(new Web3(window.ethereum));
        //window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        setWindowWeb3(new Web3(window.web3.currentProvider));
        //  window.web3 = new Web3(window.web3.currentProvider)
      } else {
        // DO NOTHING...
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const loadBlockchainData = async () => {
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
    let _lastsaferebase = 0;
    let _lastriskyrebase = 0;
    //let _rewardBalance = 0
    if (networkId == '56') {
      const deadTokenContract = await new window.web3.eth.Contract(deadtoken.abi, deadtoken.address);
      const rvcContract = await new windowWeb3.eth.Contract(rcvr.abi, rcvr.address);
      const stkcontract = await new window.web3.eth.Contract(staking.abi, staking.address);
      _balance = await rvcContract.methods.balanceOf(account).call();
      _deadtokenbalance = await deadTokenContract.methods.balanceOf(account).call();
      _stakedBalance = await stkcontract.methods.stakeOf(account, 1).call();
      _riskystakedBalance = await stkcontract.methods.stakeOf(account, 2).call();
      _rewardBalance = await stkcontract.methods.rewardOf(account).call();
      _riskyrewardBalance = await stkcontract.methods.rewardOfRiskyRewards(account).call();
      _totalSafe = await stkcontract.methods.totalStakes(1).call();
      _totalRisky = await stkcontract.methods.totalStakes(2).call();
      _lastsaferebase = await stkcontract.methods.NextRebase(1).call();
      _lastriskyrebase = await stkcontract.methods.NextRebase(2).call();
      temp = web3.utils.fromWei(String(_deadtokenbalance), 'ether');
      temp2 = parseInt(temp);
      temp2 = temp2 * 100000000;
    }
    // Convert Unixtimestamps to readable dates
    temp = _deadtokenbalance;
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
    setDeadTokenBalance(Number(web3.utils.fromWei(String(_deadtokenbalance), 'gwei')) * 10);
    setStakedBalance(web3.utils.fromWei(String(_stakedBalance), 'ether'));
    setRiskyStakedBalance(web3.utils.fromWei(String(_riskystakedBalance), 'ether'));
    setRewardBalance(web3.utils.fromWei(String(_rewardBalance), 'ether'));
    setRiskyRewardBalance(web3.utils.fromWei(String(_riskyrewardBalance), 'ether'));
    setTotalRisky(web3.utils.fromWei(String(_totalRisky), 'ether'));
    setTotalSafe(web3.utils.fromWei(String(_totalSafe), 'ether'));
    setLastSafeRebase(safeformatted);
    setLastRiskyRebase(riskyformatted);
    setNetworkId(networkId);
  };

  const connectWeb3 = async () => {
    await loadWeb3();
    await loadBlockchainData();
  };

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
            <Button
              type="secondary"
              onClick={connectWeb3}
              //disabled={!locked}
            >Connect</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
