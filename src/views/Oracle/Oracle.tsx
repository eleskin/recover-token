import styles from '../Views.module.css';
import {useEffect, useState} from 'react';

import background from '../Stacking/img/staking.png';
import Title from '../../components/Content/Title/Title';

import oracle from '../../contracts/Oracle.json';
import Web3 from 'web3';
import Button from '../../components/Button/Button';
import Social from '../../components/Social/Social';

const Oracle = () => {
  const [importedRugCounter, setImportedRugCounter] = useState(0);
  const [rugCount, setRugCount] = useState(0);
  const [ruggedTokenPrice, setRuggedTokenPrice] = useState(0);
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenAddressSearch, setTokenAddressSearch] = useState('');
  const [currentTokenPrice, setCurrentTokenPrice] = useState(0);
  const [isScamTokenResult, setIsScamTokenResult] = useState('');
  const [isSupportedTokenResult, setIsSupportedTokenResult] = useState('');
  const [tokenAddressSupported, setTokenAddressSupported] = useState('');
  const [tokenNameFound, setTokenNameFound] = useState('');
  const [tokenRateFound, setTokenRateFound] = useState(0);
  const [tokenCharityFound, setTokenCharityFound] = useState('');
  const [addressEligable, setAddressEligable] = useState('');
  const [isEligableResult, setIsEligableResult] = useState('');

  const web3 = new Web3(Web3.givenProvider || 'https://bsc-dataseed.binance.org/');
  const oracleAbi: any = oracle.abi;
  const oraclecontract = new web3.eth.Contract(oracleAbi, oracle.address);

  useEffect(() => {
    (async () => {
      setImportedRugCounter(await oraclecontract.methods.importedrugcounter().call());
      setRugCount(await oraclecontract.methods.getRugCount().call());
      setRuggedTokenPrice(await oraclecontract.methods.getRuggedTokenPrice('0x26d4552879cdcc32599e2ff1c1e2a438d5c5323e').call());
    })();
  }, [oraclecontract.methods]);

  const getTokenPrice = async () => {
    try {
      setCurrentTokenPrice(await oraclecontract.methods.getRuggedTokenPrice(String(tokenAddress)).call());
    } catch (e) {
      setCurrentTokenPrice(0);
    }
  };

  const getTokenSearch = async () => {
    try {
      await oraclecontract.methods.isValidRugTokenImported(String(tokenAddressSearch)).call()
        ? setIsScamTokenResult('This is a known scam token, please be careful with your funds')
        : setIsScamTokenResult('This is a reliable token');
    } catch (e) {
      setIsScamTokenResult('Token not found');
    }
  };

  const getTokenSupported = async () => {
    try {
      if (await oraclecontract.methods.isValidRugToken(String(tokenAddressSupported)).call()) {
        setIsSupportedTokenResult('Token is supported');

        const _address = await oraclecontract.methods.RCVRAddress().call();

        setTokenNameFound(await oraclecontract.methods.getTokenName(String(tokenAddressSupported)).call());
        setTokenRateFound(await oraclecontract.methods.getConversionRate(String(_address)).call());
        setTokenCharityFound(await oraclecontract.methods.getCharityAddress(String(_address)).call());
      } else {
        setIsSupportedTokenResult('Token is not supported');
      }

    } catch (e) {
      setIsSupportedTokenResult('Token not found');
    }
  };

  const getIsEligable = async () => {
    try {
      const _address = await oraclecontract.methods.RCVRAddress().call();

      await oraclecontract.methods.isHolder(_address, String(addressEligable)).call()
        ? setIsEligableResult('Wallet is eligable for AirDrop')
        : setIsEligableResult('Wallet is not eligable for AirDrop');
    } catch (e) {
      setIsEligableResult('Address not found');
    }
  };

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
              Current RCVR Price : {(Number(String(ruggedTokenPrice)) / 1000000000000000000).toFixed(8)}BNB
            </span>
          </div>
          <div className={styles.View__label}>
            <header>
              <h4>PanCakeSwap Price Checker: [Token Address] [Get Price]</h4>
              <span>Current Token Price : {(Number(String(currentTokenPrice)) / 1000000000000000000).toFixed(8)}BNB</span>
            </header>
            <input
              type="text"
              placeholder="Token Address"
              defaultValue={tokenAddress}
              onChange={async (e) => setTokenAddress(e.target.value)}
            />
            <div>
              <Button type="primary" onClick={getTokenPrice}>Get price</Button>
            </div>
          </div>
          <div className={styles.View__label}>
            <header>
              <h4>Is token a known scam? [Token Address] [Search]</h4>
              <span>{isScamTokenResult}</span>
            </header>
            <input
              type="text"
              placeholder="Token Address"
              defaultValue={tokenAddressSearch}
              onChange={async (e) => {
                setTokenAddressSearch(e.target.value);
                setIsScamTokenResult('');
              }}
            />
            <div>
              <Button type="primary" onClick={getTokenSearch}>Search token</Button>
            </div>
          </div>
          <div className={styles.View__label}>
            <header>
              <h4>Check if Token is supported by the Migrator [Token Address] [Search]</h4>
              <span>{isSupportedTokenResult}</span>
            </header>
            <input
              type="text"
              placeholder="Token Address"
              defaultValue={tokenAddressSupported}
              onChange={async (e) => {
                setTokenAddressSupported(e.target.value);
                setIsSupportedTokenResult('');
              }}
            />
            <div>
              <Button type="primary" onClick={getTokenSupported}>Search token</Button>
            </div>
            <div className={styles.View__stats} style={{marginBottom: 0}}>
            <span>
              Token Name: {tokenNameFound}
            </span>
              <span>
              Current swap Rate in $: {tokenRateFound}
            </span>
              <span>
              Charity Donation Address: {tokenCharityFound}
            </span>
            </div>
          </div>
          <div className={styles.View__label}>
            <header>
              <h4>Am I in the Eligable for the airdrop?" [Wallet Address] [Search]</h4>
              <span>{isEligableResult}</span>
            </header>
            <input
              type="text"
              placeholder="Wallet Address"
              defaultValue={addressEligable}
              onChange={async (e) => {
                setAddressEligable(e.target.value);
                setIsEligableResult('');
              }}
            />
            <div>
              <Button type="primary" onClick={getIsEligable}>Check</Button>
            </div>
          </div>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Oracle;
