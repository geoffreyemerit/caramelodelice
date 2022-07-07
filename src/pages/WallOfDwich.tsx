import React from 'react';

import Footer from '../components/global/Footer';
import GalleryList from '../components/wallOfDwich/GalleryList';

const WallOfDwich = () => {
  return (
    <div className="wallOfDwich">
      <GalleryList />
      <Footer className="footer" />
    </div>
  );
};

export default WallOfDwich;
