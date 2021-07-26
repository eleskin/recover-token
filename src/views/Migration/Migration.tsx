import {Dispatch} from 'react';

import styles from '../Views.module.css';

import migration from '../../contracts/Migration.json';
import deadtoken from '../../contracts/DeadToken.json';

import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import background from './img/migrate.png';

import Title from '../../components/Content/Title/Title';
import Button from '../../components/Button/Button';
import Social from '../../components/Social/Social';

interface IMigration {
  networkId: any;
  setNetworkId: Dispatch<any>;
  loading: boolean;
  setLoading: Dispatch<boolean>;
  web3Modal: any;
  account: string;
  setAccount: Dispatch<string>;
  deadtokenBalance: string;
}

const Migration = ({
                     networkId,
                     setNetworkId,
                     loading,
                     setLoading,
                     web3Modal,
                     account,
                     setAccount,
                     deadtokenBalance,
                   }: IMigration) => {
  const deadtokenname = 'GOMIX';

  const approve = async () => {
    try {
      if (networkId) {
        setLoading(true);
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        const maxAmount = new BigNumber(1).multipliedBy(new BigNumber(2).pow(256)).minus(1);
        const deadtokenAbi: any = deadtoken.abi;
        const deadTokenContract = await new web3.eth.Contract(deadtokenAbi, deadtoken.address);
        const txHash = await deadTokenContract.methods.approve(migration.address, maxAmount.toString(10)).send({from: account});

        console.log(txHash.transactionHash);
        setLoading(false);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  const migrate = async () => {
    try {
      window.alert('A 100RCVR wallet balance is required for the Airdrop.');
      if (networkId) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        const migrationAbi: any = migration.abi;
        const migrationContract = await new web3.eth.Contract(migrationAbi, migration.address);
        //////Fee to add for liquidity and time
        const txHash = await migrationContract.methods.migratePaid().send({
          from: account,
          value: web3.utils.toWei('0.001', 'ether')
        });
        //Free Migration!
        //const txHash = await migrationContract.methods.migrate().send({ from: account })

        console.log(txHash.transactionHash);
      } else {
        console.log('wrong network');
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const claim = async () => {
    try {

      if (networkId) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        const migrationAbi: any = migration.abi;
        const migrationContract = await new web3.eth.Contract(migrationAbi, migration.address);
        //////Fee to add for liquidity and time
        const txHash = await migrationContract.methods.collectRCVR().send({from: account});
        //Free Migration!
        //const txHash = await migrationContract.methods.migrate().send({ from: account })

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
      <h2 className={styles.View__title}>Migration</h2>
      <div className={styles.View__content}>
        <Title value="DeadToken Migration Management"/>
        <div className={styles.View__container}>
          <div className={styles.View__stats}>
            <span>RecoverToken Rug-Migrator:</span>
          </div>
          <div className={styles.View__buttons_2}>

            <Button type="success" onClick={claim}
                    prompt="Claim your outstanding RCVR for the vested period">Manual Claim Vested RCVR!</Button>
            <Button type="danger" onClick={migrate}
                    prompt="Scan wallet for eligable Tokens and get RCVR!">Run RugMigrator on my Wallet!</Button>
          </div>
          <div className={styles.View__stats}>
            <span><b>Rug Migrator Statistics:</b></span>
          </div>
          <div>
            <span><b>Current Supported Tokens: </b><i>$KIDS (0x7acf49997e9598843cb9051389fa755969e551bb)</i></span>
          </div>
          <div>
            <span><b>Current RCVR Payout per supported Token: </b><i>$30</i></span>
          </div>
          <div>
            <span><b>Current MAX RCVR payout limit:</b><i>$100</i></span>
          </div>
          <div>
            <span><b>Current Migration Fee: </b><i>0.001BNB</i></span>
          </div>
          <div>
            <span><b>Total paid out to charity(s): </b><i>O RCVR</i></span>
          </div>


          <div>
            ----------------------------------------------------------------------------------------------------------{'\n'}
          </div>
          <h1
            style={{marginBottom: '20px'}}>Migration Rules and Guidelines:</h1>
          <h3
            style={{marginBottom: '20px'}}>We are currently offering an airdrop of RCVR, if you hold an eligable rugged token. Before you proceed, please make sure you are aware of the following before proceeding:</h3>
          <h3
            style={{
              color: 'yellow',
              marginBottom: '20px'
            }}>- You will only qualify if your address was in the holders contract snapshot when a rugged token was added to the migrator.</h3>
          <h3
            style={{
              color: 'yellow',
              marginBottom: '20px'
            }}>- We currently automatically add the top 250 holders of each rug. Please get in touch with us on our Telegram Group below, if you are not in that group</h3>
          <h3
            style={{
              color: 'red',
              marginBottom: '20px'
            }}>- A wallet is only allowed to migrate ONCE, and ALL rugged tokens will be used for the migration</h3>
          <h3
            style={{
              color: 'chartreuse',
              marginBottom: '20px'
            }}>- There is a fee of 0.001BNB per migration transaction. This will go towards liquidty and timer costs</h3>
          <h3
            style={{
              color: 'red',
              marginBottom: '20px'
            }}>- You will need to have 100RCVR in your wallet in order to process a migration transaction.</h3>
          <h3
            style={{
              color: 'chartreuse',
              marginBottom: '20px'
            }}>- The Vesting period is 9 days.A 10% RCVR amount is paid out at migration and a further 10% per day for 9 days. A claim can be made every 24 hours.This will be automated via an Airdrop</h3>
          <h3
            style={{
              color: 'red',
              marginBottom: '20px'
            }}>- If you hold RCVR v2 LP in your wallet you will get addtional RCVR as a bonus!</h3>
          <h3
            style={{
              color: 'chartreuse',
              marginBottom: '20px'
            }}>- Dont forgot to stake your RCVR to gain additional rewards!</h3>

          <h1>Any questions please visit our Telegram channel for assistance</h1>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Migration;
