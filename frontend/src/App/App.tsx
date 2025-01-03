import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store/store';

import styles from './app.module.css'

import Home from '../pages/Home/HomePage';
import CreateAdvertisementPage from '../pages/CreateAdvertisement/CreateAdvertisementPage';
import AboutUs from '../pages/AboutUs/AboutUs';
import CreateMessageComponent from '../components/Profile/ProfileMessenger/Messenger'


import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

import { ROUTES } from '../utils/routes';
import RegisterModal from '../components/Modals/Register/RegisterModal';
import LoginModal from '../components/Modals/Login/LoginModal';
import Profile from '../pages/Profile/ProfileMain/Profile';
import Favourites from '../pages/Profile/FavouritesPage/Favourites';
import AdvertismentPage from '../pages/AdvertismentPage/AdvertismentPage';
import Chat from '../pages/Profile/ChatPage/Chat';


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
              <Route path={ROUTES.CREATE_ADVERTISMENT} element={<CreateAdvertisementPage />} />
              <Route path={ROUTES.ABOUT} element = {< AboutUs/>} />
              <Route path={ROUTES.REGISTER} element = {< RegisterModal onClose={()=>{}} onOpenLogin={()=>{}}/>} />
              <Route path={ROUTES.LOGIN} element = {< LoginModal onClose={()=>{}} onOpenRegister={()=>{}}/>} />
              <Route path={ROUTES.ADVERTISMENT} element = {< AdvertismentPage/>} />
              <Route path={ROUTES.MESSENGER} element = {< CreateMessageComponent/>} />
            </Routes>
          </div>
          <Footer/>
        </div>

      </Router>
    </Provider>
  );
};

export default App;
