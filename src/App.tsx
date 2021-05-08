import styles from './App.module.css';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header/>
        <Layout/>
      </div>
    </BrowserRouter>
  );
};

export default App;
