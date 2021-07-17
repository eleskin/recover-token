import styles from '../Views.module.css';
import Social from '../../components/Social/Social';
import background from '../Home/img/faces.png';

const Home = () => {
  return (
    <div className={styles.View} style={{backgroundImage: `url(${background})`}}>
      <h2 className={styles.View__title}
          style={{textAlign: 'center'}}>RecoverTokens's intention is to help rugged victims get some value back from their tokens. Dynamic Staking is already live earning investors rewards in 2 different pools based on the price of BTC & RCVR.</h2>
      <div className={styles.View__content}>
        <div className={styles.View__container}>
          <h1 className={styles.View__title}
              style={{color: 'yellow', textAlign: 'center'}}>A small project with a very very big goal....</h1>
          <p
            className={styles.View__text}>The world of ERC20/BEP20 tokens can be very daunting, especially given the anonymous nature of crypto. There are great opportunities to find great projects and ride the DEFI wave, however with that comes a very human factor of greed. DEFI/Crypto has become a breeding ground for rug pulls and scams. RecoverToken was born out of a desire to give back to the community...</p>
          <p
            className={styles.View__text}>RecoverToken is a BEP20 Token (ETH planned for the future) which was created in order to provide a mechanism for those victims of scams to attempt to reclaim some of their lost funds. How is this achieved you ask? By creating a direct path for the rugged token holders to</p>
          <h2 className={styles.View__title}>RCVR Features:</h2>
          <h3
            style={{color: 'chartreuse'}}>Frictionless Staking:</h3>
          <p
            className={styles.View__text}>Staking is done without removing RCVR from your wallet. You can stake in both pools at the same time and earn double the rewards! Rebase rewards are don’t against your reward balance, not your RCVR in your wallet. They are always yours!
          </p>
          <h3
            style={{color: 'red'}}>Dynamic Stake Pools:</h3>
          <p
            className={styles.View__text}>Rebases in the stake pools are based on the prices of real tokens (BTC and RCVR). If the price goes up since the last rebase, you get a 0.25% reward. If the price goes down you lose a 0.25% off your reward.
          </p>
          <h3
            style={{color: 'chartreuse'}}>RCVR Airdrop for a Rugged Token:</h3>
          <p
            className={styles.View__text}>A fixed amounf of RCVR per rugged token (currently $30). This is done via our Rug Migrator, and the RCVR is released via our Vesting contract
          </p>
          <h3
            style={{color: 'red'}}>Vesting Contract:</h3>
          <p
            className={styles.View__text}>In order to balance out a migration scenario of swap and sell, we have created a custom Vesting contract that drip feeds the RCVR over a period of 9 days after migration.
          </p>
          <h3
            style={{color: 'chartreuse'}}>LP Bonus rewards:</h3>
          <p
            className={styles.View__text}>If you hold RCVR V1 LP in your wallet at reward time, you will qualify for additional bonus RCVR!
          </p>
          <h2>We believe in the uniqueness of RCVR and the role it can play in the DEFI community. Our goal is to make it the Number One Token to help those victims of Rug Pulls!</h2>


        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Home;
