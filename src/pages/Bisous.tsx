import React from 'react';

import Newsletter from '../components/bisous/Newsletter';
import Footer from '../components/global/Footer';

const Bisous = () => {
  return (
    <div>
      <h1>BISOUS SUR LES FESSES</h1>
      <p>blablabla</p>
      <Newsletter />
      <Footer className="footer__absolute" />
    </div>
  );
};

export default Bisous;
