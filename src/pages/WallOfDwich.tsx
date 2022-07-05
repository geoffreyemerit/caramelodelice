import React from 'react';

import Footer from '../components/global/Footer';
import Gallery from '../components/wallOfDwich/Gallery';

const WallOfDwich = () => {
  return (
    <div className="wallOfDwich">
      <Gallery />
      <Footer className="footer" />
    </div>
  );
};

export default WallOfDwich;
