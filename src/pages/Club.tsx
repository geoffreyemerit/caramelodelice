import React from 'react';
import ClubSection from '../components/club/ClubSection';

const Club = () => {
  return (
    <div className="club">
      <ClubSection id={1} />
      <ClubSection id={2} />
    </div>
  );
};

export default Club;
