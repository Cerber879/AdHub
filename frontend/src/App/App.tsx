import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store/store';
import styles from './app.module.css';

import Home from '../pages/Home/HomePage';
import CreateAdvertisementPage from '../pages/CreateAdvertisement/CreateAdvertisementPage';
import AboutUs from '../pages/AboutUs/AboutUs';
import Profile from '../pages/Profile/elements/Profile';
import Favourites from '../pages/Profile/elements/Favourites';
import AdvertismentPage from '../pages/AdvertismentPage/AdvertismentPage';
import Chat from '../pages/Profile/elements/Chat';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Catalogue from '../pages/Catalogue/Catalogue';
import Settings from '../pages/Profile/elements/Settings';

import { ROUTES } from '../utils/routes';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import User from '../pages/User/User';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className={styles.app_container}>
          <Header/>
          <div className={styles.app_content}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
              <Route path={ROUTES.MESSENGER} element={<Chat />} />
              <Route path={ROUTES.MESSENGER + 'messengers' + '/:friendId' } element={<Chat />} />
              <Route path={ROUTES.SETTINGS} element={<Settings />} />
              <Route path={'/category/:categoryId'} element={<Catalogue />} />
              <Route path={ROUTES.ADDITEM} element={<CreateAdvertisementPage />} />
              <Route path={ROUTES.ABOUT} element={<AboutUs />} />
              <Route path={ROUTES.PROFILE + '/:userId'} element={<Profile />} /> 
              <Route path={ROUTES.USER + '/:userId'} element={<User />} /> 
              <Route path={ROUTES.ITEMS + '/:adName/:adId'} element={<AdvertismentPage />} />
              <Route path={ROUTES.ITEMS + ROUTES.EDIT + '/:adId'} element={<></>} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
