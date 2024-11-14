import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import styles from './index.module.css'

import Home from './pages/Home/HomePage';
import CreateAdvertisementPage from './pages/CreateAdvertisement/CreateAdvertisementPage';
import AboutUs from './pages/AboutUs/AboutUs';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { ROUTES } from './utils/routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.app_container}>
          <Header/>
          <div className={styles.app_content}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.CREATE_ADVERTISMENT} element={<CreateAdvertisementPage />} />
              <Route path={ROUTES.ABOUT} element = {< AboutUs/>} />
            </Routes>
          </div>
          <Footer/>
        </div>

      </Router>
    </Provider>
  );
};

export default App;
