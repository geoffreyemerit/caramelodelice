import './App.scss';
import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/global/Navbar';
import Bisous from './pages/Bisous';
import Club from './pages/Club';
import Dealers from './pages/Dealers';
import Home from './pages/Home';
import Infos from './pages/Infos';

import Loader from './components/global/Loader';
import News from './pages/News';
import Shop from './pages/Shop';
import WallOfDwich from './pages/WallOfDwich';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <Router>
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
    </div>
  );
}

export default App;