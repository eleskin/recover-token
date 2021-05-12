import {Dispatch} from 'react';

import styles from '../Views.module.css';

import migration from '../../contracts/Migration.json';
import deadtoken from '../../contracts/DeadToken.json';

import Web3 from 'web3';
import BigNumber from 'bignumber.js';

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
}

const Migration = ({
                     networkId,
                     setNetworkId,
                     loading,
                     setLoading,
                     web3Modal,
                     account,
                     setAccount
                   }: IMigration) => {
  const deadtokenname = 'GOMIX';

  const approve = async () => {
    try {
      if (networkId == '56') {
        setLoading(true);
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        const maxAmount = new BigNumber(1).multipliedBy(new BigNumber(2).pow(256)).minus(1);
        const deadTokenContract = await new window.web3.eth.Contract(deadtoken.abi, deadtoken.address);
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
      window.alert('Please Ensure you have Approved interaction with TTDX before proceeding! A 200RCVR wallet balance is required for the Migration.');
      if (networkId == '56') {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        const migrationContract = await new window.web3.eth.Contract(migration.abi, migration.address);
        //////Fee to add for liquidity and time
        const txHash = await migrationContract.methods.migratePaid().send({
          from: account,
          value: web3.utils.toWei('0.01', 'ether')
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

  return (
    <div className={styles.View}>
      <h2 className={styles.View__title}>Migration</h2>
      <div className={styles.View__content}>
        <Title value="DeadToken Migration Management"/>
        <div className={styles.View__container}>
          <div className={styles.View__buttons_3}>
            <Button type="primary" onClick={approve}>Approve {deadtokenname}!</Button>
            <Button type="primary" onClick={migrate}>Migrate {deadtokenname} to RCVR!</Button>
            <Button type="primary" onClick={migrate}>Claim Vested RCVR!</Button>
          </div>
          <p
            className={styles.View__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea. Lacus sed viverra tellus in. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Sed libero enim sed faucibus turpis in eu mi bibendum. Sed cras ornare arcu dui vivamus arcu felis bibendum. Tortor at auctor urna nunc id cursus metus. Egestas dui id ornare arcu odio ut sem nulla. Sagittis orci a scelerisque purus semper eget. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Morbi tincidunt ornare massa eget. Integer feugiat scelerisque varius morbi enim. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Consequat interdum varius sit amet mattis vulputate. Aliquam faucibus purus in massa. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Nunc id cursus metus aliquam eleifend mi in nulla.</p>
          <p
            className={styles.View__text}>Duis tristique sollicitudin nibh sit. Nibh cras pulvinar mattis nunc sed blandit. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Porttitor eget dolor morbi non arcu risus quis varius. Id leo in vitae turpis massa sed elementum. Cras semper auctor neque vitae tempus quam. Sociis natoque penatibus et magnis dis. Hac habitasse platea dictumst vestibulum rhoncus. Malesuada proin libero nunc consequat interdum. Consectetur adipiscing elit ut aliquam purus sit. Euismod quis viverra nibh cras pulvinar mattis. Amet mattis vulputate enim nulla aliquet. Sit amet dictum sit amet justo donec enim. Massa tincidunt nunc pulvinar sapien et ligula. Magnis dis parturient montes nascetur ridiculus mus. Vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Migration;
