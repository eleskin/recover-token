import styles from './Container.module.css';

import {ReactNode} from 'react';

interface IContainer {
  children: ReactNode;
}

const Container = ({children}: IContainer) => {
  return (
    <div className={styles.Container}>{children}</div>
  );
};

export default Container;
