import './App.scss';
import '../src/sass/global/_index.scss';

import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/global/Footer';
import Loader from './components/global/Loader';
import Logo from './components/global/Logo';
import Navbar from './components/global/Navbar';
import Sound from './components/global/Sound';
import Bisous from './pages/Bisous';
import Club from './pages/Club';
import Dealers from './pages/Dealers';
import Home from './pages/Home';
import Infos from './pages/Infos';
import News from './pages/News';
import Shop from './pages/Shop';
import WallOfDwich from './pages/WallOfDwich';
import axios from 'axios';
import IPage from '../src/interfaces/IPage';

const App = () => {
  //récupérer la route (useLocation)
  const location = useLocation();
  // créer une variable displayBackground qui va etre un boolean
  // cette variable prend true si location.pathname est
  // au choix, soit / soit *, soit /home

  console.log(location);
  const [content, setContent] = useState<IPage>();

  const getContent = async () => {
    const url: string = `http://localhost:3000/api/pages/5`;
    const { data } = await axios.get<IPage>(url);
    setContent(data);
  };

  useEffect(() => {
    getContent();
  }, []);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <div className="loadingGif">
      <Loader />
    </div>
  ) : (
    <div
      className="App"
      //* || / ? &&
      // n'affiche ce style que si displayBackground est à true
      style={{
        backgroundImage: `url(${content?.image1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <Sound />
      <Logo />
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/club" element={<Club />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/wallofdwich" element={<WallOfDwich />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/bisous" element={<Bisous />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
