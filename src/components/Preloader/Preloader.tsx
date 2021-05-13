import styles from './Preloader.module.css';
import logo_img from '../../assets/images/logo.svg';
import {useEffect, useState} from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoading(true), 1500);
  }, []);

  return (
    <div className={isLoading ? styles.Preloader__hide : styles.Preloader}>
      <img src={logo_img} alt=""/>
    </div>
  );
};

export default Preloader;
