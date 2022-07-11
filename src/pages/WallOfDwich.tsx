import React from 'react';

import Footer from '../components/global/Footer';
import GalleryList from '../components/wallOfDwich/GalleryList';

const WallOfDwich = () => {
  return (
    <div className="wallOfDwich">
      <GalleryList idPageType={3} />
      <Footer className="footer__wallOfDwich" />
    </div>
  );
};

export default WallOfDwich;
