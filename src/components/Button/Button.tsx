import styles from './Button.module.css';

import {ReactNode} from 'react';

interface IButton {
  children: ReactNode;
}

const Button = ({children}: IButton) => {
  return (
    <button className={styles.Button}>{children}</button>
  );
};

export default Button;
