import styles from '../Views.module.css';
import Title from '../../components/Content/Title/Title';
import Social from '../../components/Social/Social';
import Button from '../../components/Button/Button';

const Stacking = () => {
  return (
    <div className={styles.View}>
      <h2 className={styles.View__title}>Stacking LP</h2>
      <div className={styles.View__content}>
        <Title value="RCVR Staking Control"/>
        <div className={styles.View__container}>
          <div className={styles.View__label}>
            <h4>[SAFE POOL] RCVR</h4>
            <input type="number" placeholder="Enter value"/>
            <div>
              <Button type="primary">Stake</Button>
              <Button type="secondary" theme="dark">Unstake</Button>
              <Button type="danger">Withdraw!</Button>
              <Button type="success">Compound!</Button>
            </div>
          </div>
          <div className={styles.View__label}>
            <h4>[RISKY POOL] RCVR</h4>
            <input type="number" placeholder="Enter value"/>
            <div>
              <Button type="primary">Stake</Button>
              <Button type="secondary" theme="dark">Unstake</Button>
              <Button type="danger">Withdraw!</Button>
              <Button type="success">Compound!</Button>
            </div>
          </div>
          <div className={styles.View__buttons_2}>
            <Button type="primary">Trigger SafePool Rebase!</Button>
            <Button type="primary">Trigger RiskyPool Rebase!</Button>
          </div>
        </div>
        <Title value="RCVR V1 Liquidty"/>
        <div className={styles.View__container}>
          <div className={styles.View__label}>
            <h4>RCVR Tokens</h4>
            <input type="number" placeholder="Enter value"/>
            <div>
              <Button type="primary">Approve!</Button>
              <Button type="secondary" theme="dark">Get LP Tokens!</Button>
            </div>
          </div>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Stacking;
