import React from 'react';

import Footer from '../components/global/Footer';
import HomeContent from '../components/home/HomeContent';

const Home = () => {
  return (
    <>
      <div className="home">
        <HomeContent id={41} />
        <Footer className="footer" />
      </div>
    </>
  );
};

export default Home;
