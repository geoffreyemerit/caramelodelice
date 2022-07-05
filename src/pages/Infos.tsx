import React from 'react';

import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';
import InfosContent from '../components/infos/InfosContent';

const Infos = () => {
  return (
    <div className="infos">
      <InfosContent idPage={11} idTypeKitchen={1} idTypeMusic={2} idTypeAll={3} />
      <Footer className="footer__absolute" />
      <GoToTop />
    </div>
  );
};

export default Infos;
