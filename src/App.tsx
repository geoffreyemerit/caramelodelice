import './App.scss';
import '../src/sass/global/_index.scss';

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Logo from './components/global/Logo';
import Navbar from './components/global/Navbar';
import Bisous from './pages/Bisous';
import Club from './pages/Club';
import Home from './pages/Home';
import News from './pages/News';
import Shop from './pages/Shop';

const App = () => {
  const location = useLocation();
  let homePage: boolean = false;

  if (
    location.pathname === '/' ||
    location.key === 'default' ||
    location.pathname === '/home'
  ) {
    homePage = true;
  }
  return (
    <div
      className="App"
      style={
        homePage
          ? {
              backgroundImage: `url('./assets/wallpaper.jpeg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }>
      <Logo />
      {!homePage && <Navbar className="navbar" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<News />} />
        <Route path="/aboutUs" element={<Club />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bisous" element={<Bisous />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
