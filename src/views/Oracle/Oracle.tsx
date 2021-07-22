import styles from '../Views.module.css';
import background from '../Stacking/img/staking.png';
import Title from '../../components/Content/Title/Title';

import oracle from '../../contracts/Oracle.json';
import Web3 from 'web3';
import {useEffect, useState} from 'react';

interface IOracle {
}

const Oracle = ({}: IOracle) => {
  const [importedRugCounter, setImportedRugCounter] = useState(0);
  const [rugCount, setRugCount] = useState(0);
  const [ruggedTokenPrice, setRuggedTokenPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const web3 = new Web3(Web3.givenProvider || 'https://bsc-dataseed.binance.org/');
      const oracleAbi: any = oracle.abi;
      const oraclecontract = await new web3.eth.Contract(oracleAbi, oracle.address);

      setImportedRugCounter(await oraclecontract.methods.importedrugcounter().call());
      setRugCount(await oraclecontract.methods.getRugCount().call());
      setRuggedTokenPrice(await oraclecontract.methods.getRuggedTokenPrice('0x26d4552879cdcc32599e2ff1c1e2a438d5c5323e').call());
      console.log(oraclecontract.methods);
    })();
  }, []);

  return (
    <div className={styles.View} style={{backgroundImage: `url(${background})`}}>
      <h2 className={styles.View__title}>Oracle page</h2>
      <div className={styles.View__content}>
        <Title value="Oracle page"/>
        <div className={styles.View__container}>
          <div className={styles.View__stats}>
            <span>
              Number of Scam/Rugged Tokens in the RugOracle: {importedRugCounter}
            </span>
            <span>
              Number of Scams/Rugs supported by the migrator: {rugCount}
            </span>
            <span>
              Current RCVR Price : {(Number(String(ruggedTokenPrice).slice(0, 14)) / 1000000000000000000).toFixed(8)}BNB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oracle;
