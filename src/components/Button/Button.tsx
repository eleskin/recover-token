import styles from './Button.module.css';

import {ReactNode} from 'react';

interface IButton {
  children: ReactNode;
  type: string;
  theme?: string;
  onClick?: any;
  disabled?: boolean;
  prompt?: string;
}

const typesStyle: any = {
  primary: styles.Button__primary,
  secondary: styles.Button__secondary,
  danger: styles.Button__danger,
  success: styles.Button__success,
};

const themes: any = {
  light: {
    color: '#292929'
  },
  dark: {
    color: '#f5f5f5'
  }
};

const Button = ({children, type, theme, onClick, disabled, prompt}: IButton) => {
  return (
    <button
      className={typesStyle[type]}
      style={theme && themes[theme]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {prompt && <div className={styles.Button__prompt}>{prompt}</div>}
    </button>
  );
};

export default Button;
