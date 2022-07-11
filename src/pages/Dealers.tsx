import React, { useEffect, useState } from 'react';

import DealersMobileSection from '../components/dealers/DealersMobileSection';
import DealersSection from '../components/dealers/DealersSection';
import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';

const Dealers = () => {
  // CREATING USESTATE TO DETECT WINDOW WIDTH (ABOUT MOBILE CAROUSSEL)
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // GETTING WINDOW SIZE WITH DESTRUCTURATION
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  // DETECTING WHEN COMPONENT MOUNT THE WIDTH OF THE WINDOW
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // APPEL AXIOS OU JE STOCK DANS UN USESTATE L'ENSEMBLE DE MES PAGES QUI CORRESPONDENT AU TYPE DE PAGE DEALERS

  return windowSize.innerWidth >= 1023 ? (
    <div className="dealers">
      {/* MAP de chaque dealers section */}
      {/* usestate.map((element)=>{DealersSection}) */}

      <DealersSection id={51} idSupplier={1} />
      <DealersSection id={61} idSupplier={11} />
      <DealersSection id={71} idSupplier={21} />
      <DealersSection id={81} idSupplier={31} />
      <DealersSection id={91} idSupplier={41} />
      <DealersSection id={101} idSupplier={51} />
    </div>
  ) : (
    <div>
      <DealersMobileSection />
      <Footer className="footer__absolute" />
      <GoToTop />
    </div>
  );
};

export default Dealers;
