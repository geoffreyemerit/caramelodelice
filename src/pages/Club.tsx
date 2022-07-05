import React from 'react';

import ClubSection from '../components/club/ClubSection';
import Footer from '../components/global/Footer';
import GoToTop from '../components/global/GoToTop';

const Club = () => {
  return (
    <div className="club">
      <ClubSection id={1} />
      <ClubSection id={2} />
      <ClubSection id={3} />
      <ClubSection id={4} />
      <Footer className="footer" />
      <GoToTop />
    </div>
  );
};

export default Club;
