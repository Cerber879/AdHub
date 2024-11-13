import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import CreateAdvertisementPage from './pages/CreateAdvertisement/CreateAdvertisementPage';
import { Provider } from 'react-redux';
import store from './store/store';
import styles from './index.module.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import  AboutUs from './pages/AboutUs/AboutUs';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.app_container}>
          <Header/>
          <div className={styles.app_content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-ad" element={<CreateAdvertisementPage />} />
              <Route path="/about" element = {< AboutUs/>} />
            </Routes>
          </div>
          <Footer/>
        </div>

      </Router>
    </Provider>
  );
};

export default App;
