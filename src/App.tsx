import './App.scss';
import '../src/sass/global/_index.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Footer from './components/global/Footer';
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

function App() {
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
    <div className="App">
      <Router>
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;
