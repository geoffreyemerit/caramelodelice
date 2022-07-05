import React from 'react';

import ClubSection from '../components/club/ClubSection';
import GoToTop from '../components/global/GoToTop';

const Club = () => {
  return (
    <div className="club">
      <ClubSection id={1} />
      <ClubSection id={2} />
      <ClubSection id={3} />
      <ClubSection id={4} />
      <GoToTop />
    </div>
  );
};

export default Club;
