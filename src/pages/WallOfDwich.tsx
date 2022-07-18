import React from 'react';

import ScrollDown from '../components/global/ScrollDown';
import Footer from '../components/global/Footer';
import GalleryList from '../components/wallOfDwich/GalleryList';

const WallOfDwich = () => {
  return (
    <div className="wallOfDwich">
      <ScrollDown />
      <GalleryList idPageType={5} />
      <Footer className="footer__wallOfDwich" />
    </div>
  );
};

export default WallOfDwich;
