import React from 'react';

import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';
import InfosContent from '../components/infos/InfosContent';

const Infos = () => {
  return (
    <div className="infos">
      <InfosContent idPage={101} idTypeKitchen={1} idTypeMusic={11} idTypeAll={21} />
      <Footer className="footer__absolute" />
      <GoToTop />
    </div>
  );
};

export default Infos;
