import React from 'react';

import InfosContent from '../components/infos/InfosContent';

const Infos = () => {
  return (
    <div className='infos'>
      <img className='infos__img' src="/assets/Perso-08_1.svg" alt="logo_club_sandwich" />
      <InfosContent idPage={11} idTypeKitchen={1} idTypeMusic={2} idTypeAll={3} />

    </div>
  );
};

export default Infos;
