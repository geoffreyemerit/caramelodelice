import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Club from './pages/Club';
import Dealers from './pages/Dealers';
import WallOfDwich from './pages/WallOfDwich';
import Shop from './pages/Shop';
import Infos from './pages/Infos';
import Bisous from './pages/Bisous';
import Navbar from './components/global/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
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
        </main>
      </Router>
    </div>
  );
}

export default App;
