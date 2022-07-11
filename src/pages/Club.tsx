import React from 'react';

import ClubSection from '../components/club/ClubSection';
import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';

const Club = () => {
  return (
    <div className="club">
      <ClubSection id={1} />
      <ClubSection id={11} />
      <ClubSection id={21} />
      <ClubSection id={31} />
      <Footer className="footer" />
      <GoToTop />
    </div>
  );
};

export default Club;
