import styles from './App.module.css';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

import {BrowserRouter} from 'react-router-dom';
import {useState} from 'react';

const App = () => {
  const [isVisibleNavbar, setIsVisibleNavbar] = useState(false);

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header isVisibleNavbar={isVisibleNavbar} setIsVisibleNavbar={setIsVisibleNavbar}/>
        <Layout isVisibleNavbar={isVisibleNavbar} setIsVisibleNavbar={setIsVisibleNavbar}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
