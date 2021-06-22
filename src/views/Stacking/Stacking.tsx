import {Dispatch, useState} from 'react';
import Web3 from 'web3';

import staking from '../../contracts/Staking.json';
import lp from '../../contracts/lp.json';
import pancake from '../../contracts/pancake.json';
import rcvr from '../../contracts/RCVR.json';
import BigNumber from 'bignumber.js';

import styles from '../Views.module.css';

import Title from '../../components/Content/Title/Title';
import Social from '../../components/Social/Social';
import Button from '../../components/Button/Button';
import background from '../Migration/img/Main_back.png';

interface IStacking {
  networkId: any;
  setNetworkId: Dispatch<any>;
  loading: boolean;
  setLoading: Dispatch<boolean>;
  web3Modal: any;
  account: string;
  setAccount: Dispatch<string>;
  windowWeb3: any;
  setWindowWeb3: Dispatch<any>;
  stakedBalance: number;
  riskystakedBalance: number;
  rewardBalance: number;
  riskyrewardBalance: number;
  lptokenBalance: number;
  balance: number;
}


const Stacking = ({
                    networkId,
                    setNetworkId,
                    loading,
                    setLoading,
                    web3Modal,
                    account,
                    setAccount,
                    windowWeb3,
                    setWindowWeb3,
                    stakedBalance,
                    lptokenBalance,
                    riskystakedBalance,
                    rewardBalance,
                    balance,
                    riskyrewardBalance
                  }: IStacking) => {
  const [stake, setStake] = useState('');
  const [riskystake, setRiskyStake] = useState('');
  const [rcvrliq, setRCVRLiq] = useState('');

  const createSafeStake = async () => {
    try {
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3: any = new Web3(provider);
        const BN = web3.utils.BN;
        let amount = parseInt(stake);

        const stkcontract = await new web3.eth.Contract(staking.abi, staking.address);
        const txHash = await stkcontract.methods.createSafeStake(web3.utils.toWei(`${amount}`, 'ether')).send({from: account});
        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const removeStake = async () => {
    try {
      window.alert('Please Ensure that RCVR balance is the same as your staked amount before proceeding!');
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3: any = new Web3(provider);
        const BN = web3.utils.BN;
        let amount = parseInt(stake);

        const stkcontract = await new web3.eth.Contract(staking.abi, staking.address);
        const txHash = await stkcontract.methods.removeStake(web3.utils.toWei(`${amount}`, 'ether')).send({from: account});
        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const getSafeRewards = async () => {
    try {
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const stakingAbi: any = staking.abi;
        const stkcontract = await new web3.eth.Contract(stakingAbi, staking.address);
        const txHash = await stkcontract.methods.withdrawTreasuryRewards(1).send({
          from: account,
          value: web3.utils.toWei('0.003', 'ether')
        });
        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const getTreasuryRewardsCompSafe = async () => {
    try {
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const stakingAbi: any = staking.abi;
        const stkcontract = await new web3.eth.Contract(stakingAbi, staking.address);
        const txHash = await stkcontract.methods.withdrawCompReward(1).send({
          from: account,
          value: web3.utils.toWei('0.003', 'ether')
        });
        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const createRiskyStake = async () => {
    try {
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3: any = new Web3(provider);
        const BN = web3.utils.BN;
        let amount = parseInt(riskystake);

        const stkcontract = await new web3.eth.Contract(staking.abi, staking.address);
        const txHash = await stkcontract.methods.createRiskyStake(web3.utils.toWei(`${amount}`, 'ether')).send({from: account});
        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const removeRiskyStake = async () => {
    try {
      window.alert('Please Ensure that RCVR balance is the same as your staked amount before proceeding!');
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3: any = new Web3(provider);
        const BN = web3.utils.BN;
        let amount = parseInt(riskystake);

        const stkcontract = await new web3.eth.Contract(staking.abi, staking.address);
        const txHash = await stkcontract.methods.removeRiskyStake(web3.utils.toWei(`${amount}`, 'ether')).send({from: account});
        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const getRiskyRewards = async () => {
    try {
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const stakingAbi: any = staking.abi;
        const stkcontract = await new web3.eth.Contract(stakingAbi, staking.address);
        const txHash = await stkcontract.methods.withdrawTreasuryRewards(2).send({
          from: account,
          value: web3.utils.toWei('0.003', 'ether')
        });
        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const getTreasuryRewardsCompRisky = async () => {
    try {
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const stakingAbi: any = staking.abi;
        const stkcontract = await new web3.eth.Contract(stakingAbi, staking.address);
        const txHash = await stkcontract.methods.withdrawCompReward(2).send({
          from: account,
          value: web3.utils.toWei('0.003', 'ether')
        });
        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const forceDistribute1 = async () => {   ////Risky Pool!
    try {
      window.alert('Please be aware there is a 0.02BNB Fee to force a rebase on the Risky Pool!');
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const stakingAbi: any = staking.abi;
        const stkcontract = await new web3.eth.Contract(stakingAbi, staking.address);
        const txHash = await stkcontract.methods.Forcedistribute(true).send({
          from: account,
          value: web3.utils.toWei('0.02', 'ether')
        });

        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const forceDistribute2 = async () => {
    try {
      window.alert('Please be aware there is a 0.01BNB Fee to force a rebase on the Safe Pool!');
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        const stakingAbi: any = staking.abi;
        const stkcontract = await new web3.eth.Contract(stakingAbi, staking.address);
        const txHash = await stkcontract.methods.Forcedistribute(false).send({
          from: account,
          value: web3.utils.toWei('0.01', 'ether')
        });

        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={styles.View} style={{backgroundImage: `url(${background})`}}>
      <h2 className={styles.View__title}>Staking Management</h2>
      <div className={styles.View__content}>
        <Title value={account}/>
        <div className={styles.View__container}>
          <div className={styles.View__stats}>
            <span>RCVR Balance: {balance}</span>
            <span>RCVR Staked in SafePool: {stakedBalance}</span>
            <span>RCVR Staked in RiskyPool: {riskystakedBalance}</span>
            <span>Pending Reward (Safe): {rewardBalance}</span>
            <span>Pending Reward (Risky): {riskyrewardBalance}</span>
            <span>RCVR LP Balance: {lptokenBalance}</span>
          </div>
          <div className={styles.View__label}>
            <h4>Safe Staking Pool:</h4>
            <input
              type="number"
              placeholder="RCVR amount to Stake"
              min="1"
              step="1"
              max="100000"
              defaultValue={stake}
              onChange={(e) => setStake(e.target.value)}
            />
            <div>
              <Button type="primary" prompt="Stake XX RCVR" onClick={createSafeStake}>Stake</Button>
              <Button type="secondary" prompt="Remove XX RCVR from Stake" theme="dark" onClick={removeStake}>Unstake</Button>
              <Button type="danger" prompt="Clain Pending RCVR Rewards" onClick={getSafeRewards}>Withdraw!</Button>
              <Button type="success" prompt="Claim Pending Reward and add to Stake" onClick={getTreasuryRewardsCompSafe}>Compound!</Button>
            </div>
          </div>
          <div className={styles.View__label}>
            <h4>Risky Staking Pool</h4>
            <input
              type="number"
              placeholder="RCVR amount to Stake"
              min="1"
              max="100000"
              defaultValue={riskystake}
              onChange={(e) => setRiskyStake(e.target.value)}
            />
            <div>
              <Button type="primary" prompt="Stake XX RCVR" onClick={createRiskyStake}>Stake</Button>
              <Button type="secondary" prompt="Remove XX RCVR from Stake" theme="dark" onClick={removeRiskyStake}>Unstake</Button>
              <Button type="danger" prompt="Clain Pending RCVR Rewards" onClick={getRiskyRewards}>Withdraw!</Button>
              <Button type="success" prompt="Claim Pending Reward and add to Stake" onClick={getTreasuryRewardsCompRisky}>Compound!</Button>
            </div>
          </div>
          <div className={styles.View__buttons_2}>
            <Button type="primary" prompt="Rebase the SafePool and generate Rewards if +" onClick={forceDistribute2}>Trigger SafePool Rebase!</Button>
            <Button type="primary" prompt="Rebase the RiskyPool and generate Rewards if +" onClick={forceDistribute1}>Trigger RiskyPool Rebase!</Button>
          </div>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Stacking;
